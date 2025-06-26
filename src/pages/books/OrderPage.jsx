import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-64 text-red-500 font-semibold">
        Error getting orders data
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-primary drop-shadow-lg">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Your Orders
        </span>
      </h2>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <svg
            className="w-16 h-16 text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1a2 2 0 002 2h1m10-3v1a2 2 0 002 2h1m-1 13a2 2 0 002-2v-7a2 2 0 00-2-2h-1m-10 11a2 2 0 01-2-2v-7a2 2 0 012-2h1m0 0V5a2 2 0 012-2h4a2 2 0 012 2v2"
            />
          </svg>
          <span className="text-lg text-gray-500 font-medium">
            No orders found!
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-6 group"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold rounded-full shadow">
                  #{index + 1}
                </span>
              </div>
              <h2 className="font-bold text-lg mb-2 text-primary">
                Order ID:{" "}
                <span className="text-gray-700">{order._id.slice(-8)}</span>
              </h2>
              <div className="mb-2 flex flex-col gap-1">
                <span className="text-gray-600">
                  <span className="font-semibold">Name:</span> {order.name}
                </span>
                <span className="text-gray-600">
                  <span className="font-semibold">Email:</span> {order.email}
                </span>
                <span className="text-gray-600">
                  <span className="font-semibold">Phone:</span> {order.phone}
                </span>
                <span className="text-gray-600">
                  <span className="font-semibold">Total Price:</span>{" "}
                  <span className="text-green-600 font-bold">
                    ${order.totalPrice}
                  </span>
                </span>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold text-sm text-gray-700 mb-1">
                  Address:
                </h3>
                <p className="text-gray-500 text-sm">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-700 mb-1">
                  Products
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {order.productIds.map((productId) => (
                    <li
                      key={productId}
                      className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 px-2 py-1 rounded text-xs font-mono shadow-sm"
                    >
                      {productId.slice(-6)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow hover:scale-105 transform transition-transform duration-200 text-xs font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
