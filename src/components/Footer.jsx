// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStoreAlt, FaHome, FaShoppingCart, FaUser, FaEnvelope } from 'react-icons/fa';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <FaStoreAlt className="text-2xl text-emerald-400" />
              <span className="text-xl font-medium text-gray-100">Redux-Shop</span>
            </Link>
            <p className="text-sm">Your one-stop shop for quality products at great prices.</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-gray-100 font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-emerald-400 transition-colors flex items-center justify-center md:justify-start gap-2">
                  <FaShoppingCart /> Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-gray-100 font-medium mb-4">Contact</h3>
            <a
              href="https://abhishek-soni6904.github.io/Abhishek-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors"
            >
              <FaUser />
              Abhishek Soni
            </a>

            <a
              href="mailto:abhisheks6904@gmail.com"
              className="text-sm flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors"
            >
              <FaEnvelope />
              abhisheks6904@gmail.com
            </a>

            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Redux-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
