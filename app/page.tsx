import Services from './components/Services';
import World from './components/World';
import AboutComp from './components/AboutComp';
import Review from './components/Review';
// import Footer from './components/Footer';
import Hero from './components/molecules/hero';
import CarouselSection from './components/molecules/carouselSection';

export default function Home() {
  // const { cart } = useCart();
  return (
    <div className='relative'>
      <Hero />
      <CarouselSection />
      <hr className='my-10' />
      <AboutComp />
      <hr className='my-10' />
      <Services />
      <hr className='my-10' />
      <World />
      <hr className='mb-10' />
      <Review />
    </div>
  );
}
