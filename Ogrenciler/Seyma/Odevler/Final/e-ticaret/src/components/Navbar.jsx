import Link from "next/link";
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>SHOP.CO</li>
        <li>Shop</li>
        <Link href="/categories">Categories</Link>
        <Link href="/onsale">On Sale</Link>
        <Link href="/newarrivals">New Arrivals</Link>
        <li>Brands</li>
        <ThemeToggleBtn />
      </ul>
    </nav>
  );
};

export default Navbar;
