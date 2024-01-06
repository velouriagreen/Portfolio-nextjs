import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { useState } from "react";
import { images } from './ImagesData';

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
	
return (
	<div className="max-w-7xl mx-auto mt-4">
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

