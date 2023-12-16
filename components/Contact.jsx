import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import contactImg from "../public/assets/contacts.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";

const Contact = () => {

  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, subject, message } = formData;

      const payload = {
        name,
        email,
        phone,
        subject,
        message,
      };

      const response = await axios.post(
        "http://localhost:3001/api/messages",
        payload
      );

      if (response.status === 200) {
        setSubmitted(true);
      } else {
        console.error("Error sending email:", response.data.error);
        setError(response.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Error sending email", error);
    }
  };

  // useEffect to reset form data after submitted state changes
  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => {
        setSubmitted(false); 
        setFormData(initialState);
      }, 3000);
  
      return () => clearTimeout(timeoutId);
    }
  }, [submitted]);

  return (
    <div id="contact" className="w-full lg:h-screen ">
      Hello
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  src={contactImg}
                  alt="/"
                  className="rounded-xl"
                  width="400"
                  height="500"
                />{" "}
              </div>
              <div>
                <h2 className="py-4">Dahlak Keleta</h2>
                <p>Full-Stack Devops Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&rsquo;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*right*/}
          <div className="col-span-3 lg:col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase test-sm py-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      name="name"
                      onChange={handleChange}
                      className="border-2 border-gray-300 p-3 shadow-xl flex rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase test-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      name="phone"
                      onChange={handleChange}
                      className="border-2 border-gray-300 p-3 shadow-xl flex rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase test-sm py-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className="border-2 border-gray-300 p-3 shadow-xl flex rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase test-sm py-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    name="subject"
                    onChange={handleChange}
                    className="border-2 border-gray-300 p-3 shadow-xl flex rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase test-sm py-2">Message</label>
                  <textarea
                    type="text"
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="border-2 border-gray-300 p-3 shadow-xl flex rounded-lg w-full rows=100"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
                {submitted && <p>Thank you for your submission!</p>}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300  ">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
