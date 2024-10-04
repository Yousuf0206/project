import Link from 'next/link';
import Image from 'next/image';



const Header = () => {
  return (
    <header className="bg-blue-500 py-4 flex justify-between items-center">
    <div className="container mx-auto">
    <Link href="/">
    <div>
    <img src="/logo.png" alt="Panjatan Plastic Industries Logo" width="60" height="35" />
    </div>
    </Link>
    </div>
      <div className="flex">
        <Link href="/" passHref>
          <div className="btn">Home</div>
        </Link>
        <Link href="/about" passHref>
          <div className="btn">About</div>
        </Link>
        <Link href="/contact" passHref>
          <div className="btn">Contact Us</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;