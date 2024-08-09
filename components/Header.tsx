import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Nucleus Academy</div>
        <div>
          <Link href="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link href="/Courses" className="px-4 hover:underline">
            Courses
          </Link>
          <Link href="/prices" className="px-4 hover:underline">
            Prices
          </Link>
          <Link href="/about" className="px-4 hover:underline">
            About
          </Link>
          <Link href="/contact" className="px-4 hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
