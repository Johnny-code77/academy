import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/nu.png';

const Header = () => {
  return (
    <header className="bg-gray-900 py-6 shadow-lg" style={{zIndex: 9999}}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Nucleus Academy" width={50} height={50} style={{zIndex: 9999}} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center space-x-8" style={{zIndex: 9999}}>
          <Link href="/" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            Home
          </Link>
          <Link href="/courses" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            Courses
          </Link>
          <Link href="/prices" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            Prices
          </Link>
          <Link href="/about" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            About
          </Link>
          <Link href="/contact" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            Contact
          </Link>
          <Link href="/blog" className="hidden md:inline-block text-gray-300 hover:text-white transition duration-200 no-underline">
            Blog
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="relative group mr-6">
            <button className="px-6 py-2 border border-violet-400 rounded-full hover:bg-gray-800 text-violet-400 shadow-md hover:shadow-xl transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
              <Link href="/login" className="font-medium group-hover:text-violet-400 transition duration-200 no-underline">
                Login
              </Link>
            </button>
            <div className="absolute inset-0 transform translate-x-1 translate-y-1 rounded-full group-hover:-translate-x-0 group-hover:-translate-y-0 transition-all duration-300" style={{ zIndex: -1 }}></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
