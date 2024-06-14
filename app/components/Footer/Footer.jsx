import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center bottom-0 w-full">
      <div className="container mx-auto">
        <br />
        <nav className="flex justify-center space-x-4">
          <Link href="/" passHref>
            <p className="hover:text-gray-400 cursor-pointer">Home</p>
          </Link>
          <Link href="/about" passHref>
            <p className="hover:text-gray-400 cursor-pointer">About</p>
          </Link>
        </nav>
        <br />
        <p className="mt-4">© 2024 Flat Dekho. All rights reserved.</p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
