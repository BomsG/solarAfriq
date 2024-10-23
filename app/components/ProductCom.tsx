import Carousel from './CarouselComp';
import hero from "../images/image1.jpg"
import hero2 from "../images/image2.jpg"
import hero3 from "../images/image3.jpg"
import hero4 from "../images/image4.jpg"

const ProductCom = () => {
  const images = [
    { src: hero, alt: 'Image 1' },
    { src: hero2, alt: 'Image 2' },
    { src: hero3, alt: 'Image 3' },
    { src: hero4, alt: 'Image 3' },
  ];

  return (
    <div className='px-10 md:px-[150px]'>
      <Carousel images={images} />
    </div>
  );
};

export default ProductCom;
