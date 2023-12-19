import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { useState } from "react";

const images = [
	 {
			src: "/dksideprofile.jpeg",
			original: "/dksideprofile.jpeg",
			width: 768,
			height: 1024,
			caption: "After Rain (Jeshu John - designerspics.com)",
		
	 },
	 {
			src: "/dahlak-leaning.jpg",
			original: "/dahlak-leaning.jpg",
			width: 828,
			height: 914,
			alt: "Boats (Jeshu John - designerspics.com)",
	 },
	 {
			src: "/dahlak-eotw.jpg",
			original: "/dahlak-eotw.jpg",
			width: 828,
			height: 1221,
	 },
	 
	 {
		src: "/assets/photos/christmasDahlak.jpg",
		original: "/assets/photos/christmasDahlak.jpg",
		width: 826,
		height: 825,
 },
 {
	src: "/dahlakPurple.jpeg",
	original: "/dahlakPurple.jpeg",
	width: 826,
	height: 825,
},

];



const Photo = () => {
	const [index, setIndex] = useState(-1);

	const currentImage = images[index];
	const nextIndex = (index + 1) % images.length;
	const nextImage = images[nextIndex] || currentImage;
	const prevIndex = (index + images.length - 1) % images.length;
	const prevImage = images[prevIndex] || currentImage;
  
	const handleClick = (index, item) => setIndex(index);
	const handleClose = () => setIndex(-1);
	const handleMovePrev = () => setIndex(prevIndex);
	const handleMoveNext = () => setIndex(nextIndex);
	

	console.log('current image', currentImage, nextImage);
	return (
 
 
<div className="max-w-7xl mx-auto mt-4">

<p className='py-4 text-[#545F66]font-bold max-w-[70%] m-auto'>
            I&apos;m a full-stack web developer building and designing 
            exceptional digital experiences. Currently I&apos;m a devops platform engineer. Most recently before that, I was creating an application 
            for a school course management platform using NextJS and other modern technologies.
          </p>

      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
		rowHeight={300}
		margin={0}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>

	)
}

export default Photo;

