import { Gallery } from "react-grid-gallery";

const images = [
	 {
			src: "/dksideprofile.jpeg",
			width: 768,
			height: 1024,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)",
	 },
	 {
			src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			width: 320,
			height: 212,
			tags: [
				 { value: "Ocean", title: "Ocean" },
				 { value: "People", title: "People" },
			],
			alt: "Boats (Jeshu John - designerspics.com)",
	 },
	 {
			src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			width: 320,
			height: 212,
	 },
];



const Photo = () => {
	return (
 
 
<Gallery images={images} />

	)
}

export default Photo;