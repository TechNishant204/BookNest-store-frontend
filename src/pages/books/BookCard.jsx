import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [isBouncing, setIsBouncing] = useState(false);

  const handleAddToCart = (product) => {
    setIsBouncing(true);
    dispatch(addToCart(product));
    setTimeout(() => setIsBouncing(false), 400);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-80 group">
      <Link to={`/books/${book._id}`} className="block">
        <div className="relative">
          <img
            src={getImgUrl(book?.coverImage)}
            alt={book?.title}
            className="w-44 h-60 object-cover rounded-2xl mx-auto mt-6 transition-transform duration-300 group-hover:scale-105"
          />
          {book?.oldPrice && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              -{Math.round(100 - (book.newPrice / book.oldPrice) * 100)}%
            </span>
          )}
        </div>
      </Link>
      <div className="px-6 py-5 text-center flex flex-col gap-2">
        <Link to={`/books/${book._id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
            {book?.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2 min-h-[2.5em]">
          {book?.description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xl font-bold text-blue-600">
            ${book?.newPrice}
          </span>
          {book?.oldPrice && (
            <span className="text-gray-400 line-through text-base">
              ${book?.oldPrice}
            </span>
          )}
        </div>
        <button
          onClick={() => handleAddToCart(book)}
          className={`mt-2 bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white rounded-full px-6 py-3 shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 font-medium ${
            isBouncing ? "animate-bounce" : ""
          }`}
          title="Add to Cart"
        >
          <FiShoppingCart className="text-xl" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
