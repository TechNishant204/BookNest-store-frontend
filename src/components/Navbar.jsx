import { Link, useNavigate } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();
  const token = localStorage.getItem("token");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  // Keyboard accessibility for dropdown
  const handleDropdownKey = (e) => {
    if (e.key === "Escape") setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md transition-all">
      <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <HiMiniBars3CenterLeft className="size-6" />
          </button>
          <Link
            to="/"
            className="text-4xl font-bold tracking-tight tracking-wide text-primary transition hover:text-primary/80 flex items-center gap-1"
          >
            BookNest📚
          </Link>
        </div>

        {/* Center: Search */}
        <form
          onSubmit={handleSearch}
          className="relative flex-1 max-w-md mx-4 hidden sm:flex"
        >
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books, authors..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition"
            aria-label="Search"
          />
        </form>

        {/* Right: Icons & User */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/wishlist"
            className="relative group p-2 rounded-full hover:bg-gray-100 transition hidden sm:block"
            aria-label="Wishlist"
          >
            <HiOutlineHeart className="size-6 text-gray-600 group-hover:text-primary" />
            {/* Optionally add badge */}
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-1 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
            aria-label="Cart"
          >
            <HiOutlineShoppingCart className="size-6 text-primary" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
              {cartItems.length}
            </span>
          </Link>
          {/* User / Auth */}
          <div className="relative" ref={dropdownRef}>
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen((v) => !v)}
                  className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-primary transition"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  tabIndex={0}
                  onKeyDown={handleDropdownKey}
                >
                  <img
                    src={avatarImg}
                    alt="User avatar"
                    className="size-8 rounded-full ring-2 ring-primary"
                  />
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b text-sm text-gray-700">
                      Hi, {currentUser.displayName || "User"}
                    </div>
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 transition"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() => {
                            logout();
                            setIsDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary/10 transition"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : token ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition font-semibold"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold"
              >
                <HiOutlineUser className="size-5" />
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-4 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 p-2 rounded hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-3 py-2 rounded-l bg-gray-100 focus:bg-white outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-3 py-2 rounded-r"
              >
                <IoSearchOutline />
              </button>
            </form>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-2 py-2 rounded hover:bg-primary/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {currentUser ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left px-2 py-2 rounded hover:bg-primary/10 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-2 py-2 rounded hover:bg-primary/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
