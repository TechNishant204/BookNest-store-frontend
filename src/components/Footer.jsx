import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side - Logo and Nav */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 w-full">
          <img
            src={footerLogo}
            alt="Logo"
            className="mb-6 w-40 drop-shadow-lg"
          />
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-lg font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-primary transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-end">
          <p className="mb-4 text-center md:text-right text-gray-300 max-w-md">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-r-lg text-white font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 text-sm text-gray-400">
          <li>
            <a
              href="#privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Center - Copyright */}
        <div className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} BookNest. All rights reserved.
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
