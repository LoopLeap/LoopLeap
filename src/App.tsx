import './App.css'
import TopHeader from './components/TopHeader'
import LowScreen from './components/LowScreen'
import MiddleHeader from './components/MiddleHeader'
import Section1 from './components/Section1'
import Products from './components/Products'
import Build from './components/Build'
import Customer from './components/Customer'
import Footer from './components/Footer'
import VideoBanner from './components/VideoBanner'
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  const videos = [
    '/videos/5086645-uhd_3840_2160_30fps.mp4',
    '/videos/5086645-uhd_3840_2160_30fps.mp4',
    '/videos/5086645-uhd_3840_2160_30fps.mp4',
  ];

  return (
    <>
      <TopHeader />
      <LowScreen />
      <MiddleHeader />
      <VideoBanner videoSrc = '/videos/5086645-uhd_3840_2160_30fps.mp4' overlayText='Unleash the possibilities'/>
      <Section1 /> 
      <Products />
      <Build />
      <Customer />
      <TestimonialSlider videos={videos} />
      <Footer />
    </>
  )
}

export default App
