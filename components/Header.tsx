import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Nucleus Academy
        </h1>
        <div className="flex-1 flex justify-center items-center space-x-8">
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
            <button className="px-6 py-2 border border-gray-300 rounded-full bg-white text-gray-800 shadow-md hover:shadow-xl transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
              <Link href="#" className="font-medium group-hover:text-blue-600 transition duration-200 no-underline">
                Login
              </Link>
            </button>
            <div className="absolute inset-0 transform translate-x-1 translate-y-1 bg-gray-800 rounded-full group-hover:-translate-x-0 group-hover:-translate-y-0 transition-all duration-300" style={{ zIndex: -1 }}></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;