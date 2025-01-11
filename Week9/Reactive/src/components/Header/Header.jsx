import './Header.css';
import Logo from './Logo';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top header ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <div className="navbar-line">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
}