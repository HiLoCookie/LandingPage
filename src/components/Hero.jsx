import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-6rem)] px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
      
    {/* Text Content - Left on Desktop */}
    <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
        <div className="max-w-xl z-10">
          {/* Tag box with gradient border */}
            <div className="relative w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-4">
                <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 px-4 text-white text-sm">
                    <i className="bx bx-diamond"></i>
                    INTRODUCING
                </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8 text-white">
            EMAIL FOR
            <br />
            DEVELOPERS
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            the best way to bring your site to life,
            grow customer base and catch the eye of
            EVERYONE
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12 flex-wrap">
            <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold 
            tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] text-white"
            href="#">
                Documentation <i className="bx bx-link-external"></i>
            </a>

            <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold 
            tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#">
              Get Started <i className="bx bx-link-external"></i>
            </a>
            </div>
        </div>
    </div>

    {/* 3D Model - Right on Desktop */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2">
        <div className="w-full max-w-[800px] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
            <Spline data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="3000" scene="https://prod.spline.design/ij0A8PhI4U1yEjVH/scene.splinecode" />
        </div>
    </div>
    </section>
  );
};

export default Hero;
