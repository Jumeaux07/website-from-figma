import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import image1 from "./assets/selfie.png";
import image2 from "./assets/happynews.png";
import image3 from "./assets/jewelry.png";
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='mx-10'>
         <Hero/>
        <About image={image1}/>
        <About image={image2}/>
        <About image={image3}/>
      </div>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
