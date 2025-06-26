import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-96 text-lg font-medium">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-96 text-red-600 font-semibold">
        Error happened to load book info
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 mt-10">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
        {book.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 flex justify-center items-center md:w-1/3">
          <img
            src={getImgUrl(book.coverImage)}
            alt={book.title}
            className="w-48 h-64 object-cover rounded-lg shadow-md border border-gray-200"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Author:</span>{" "}
              {book.author || "admin"}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Published:</span>{" "}
              {new Date(book?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-2 capitalize">
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {book?.category}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">Description:</span>{" "}
              {book.description}
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            <FiShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
