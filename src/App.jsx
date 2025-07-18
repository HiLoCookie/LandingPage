import Header from "./components/Header"
import Hero from "./components/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  })

  return (
    <main>
      {/* Gradient Image */}
      <img className="absolute top-0 right-0 opacity-80 z-10" src="src\assets\gradient.png" alt="Gradeint-img" />

      {/* Blur Effect */}
      <div className="absolute top-[20%] right-[-5%] w-[40rem] h-10 bg-[#e99b63] opacity-50 blur-3xl rotate-[-30deg] -z-10"></div>

      <Header/>
      <Hero/>



    </main>
  




  )
}