import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl md:text-4xl lg:text-5xl font-light m-0">HiLoCookie</h1>

    {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Hero</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Tech Stack</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Projects</a>
            <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Contact</a>
        </nav>

    {/* Desktop CTA Button */}
    <button className="hidden md:block bg-[#bd6b59] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        CONTACT
    </button>

    {/* Mobile Menu Toggle Button */}
    <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50 text-white">
        <i className="bx bx-menu text-white"></i>
    </button>

    {/* Mobile Menu */}
    <div id="mobileMenu" className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
        <nav className="flex flex-col gap-6 items-center">
            <a className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Hero</a>
            <a className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Tech Stack</a>
            <a className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Projects</a>
            <a className="text-base tracking-wider transition-colors hover:text-blue-300 z-50" href="#">Contact</a>
        </nav>
    </div>
    </header>
  );
};

export default Header;
