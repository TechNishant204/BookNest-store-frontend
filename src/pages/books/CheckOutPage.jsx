import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
        street: data.address,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };

    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Order Confirmed",
        text: "Your order has been placed successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Go to Orders",
      }).then(() => {
        navigate("/orders");
      });
    } catch (error) {
      console.error("Error placing order", error);
      Swal.fire({
        title: "Error",
        text: "Failed to place an order",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <section>
      <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="mb-8 text-center">
              <h2 className="font-bold text-2xl text-blue-700 mb-2 tracking-tight">
                Checkout - Cash On Delivery
              </h2>
              <p className="text-gray-600 mb-1 text-lg">
                <span className="font-semibold">Total:</span> ${totalPrice}
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Items:</span>{" "}
                {cartItems.length > 0 ? cartItems.length : 0}
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              autoComplete="off"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      className={`h-11 border ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="h-11 border border-gray-200 rounded-lg px-4 w-full bg-gray-100 text-gray-400"
                      disabled
                      defaultValue={currentUser?.email}
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      type="tel"
                      id="phone"
                      className={`h-11 border ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition`}
                      placeholder="+123 456 7890"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500">
                        Phone is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Address / Street
                    </label>
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      id="address"
                      className={`h-11 border ${
                        errors.address ? "border-red-400" : "border-gray-200"
                      } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition`}
                      placeholder="Street Address"
                    />
                    {errors.address && (
                      <span className="text-xs text-red-500">
                        Address is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      City
                    </label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="city"
                      className={`h-11 border ${
                        errors.city ? "border-red-400" : "border-gray-200"
                      } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition`}
                      placeholder="City"
                    />
                    {errors.city && (
                      <span className="text-xs text-red-500">
                        City is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Country / Region
                    </label>
                    <div className="relative">
                      <input
                        {...register("country", { required: true })}
                        id="country"
                        placeholder="Country"
                        className={`h-11 border ${
                          errors.country ? "border-red-400" : "border-gray-200"
                        } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition pr-10`}
                      />
                      <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.country && (
                      <span className="text-xs text-red-500">
                        Country is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      State / Province
                    </label>
                    <div className="relative">
                      <input
                        {...register("state", { required: true })}
                        id="state"
                        placeholder="State"
                        className={`h-11 border ${
                          errors.state ? "border-red-400" : "border-gray-200"
                        } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition pr-10`}
                      />
                      <FaTimes className="absolute right-8 top-3 text-gray-300 hover:text-red-500 cursor-pointer" />
                      <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.state && (
                      <span className="text-xs text-red-500">
                        State is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="zipcode"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Zipcode
                    </label>
                    <input
                      {...register("zipcode", { required: true })}
                      type="text"
                      id="zipcode"
                      className={`h-11 border ${
                        errors.zipcode ? "border-red-400" : "border-gray-200"
                      } rounded-lg px-4 w-full bg-gray-50 focus:ring-2 focus:ring-blue-200 transition`}
                      placeholder="Zipcode"
                    />
                    {errors.zipcode && (
                      <span className="text-xs text-red-500">
                        Zipcode is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  onChange={(e) => setIsChecked(e.target.checked)}
                  type="checkbox"
                  id="billing_same"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition"
                />
                <label htmlFor="billing_same" className="text-gray-600">
                  I agree to the{" "}
                  <Link
                    className="underline text-blue-600 hover:text-blue-800"
                    to="#"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="underline text-blue-600 hover:text-blue-800"
                    to="#"
                  >
                    Shopping Policy
                  </Link>
                  .
                </label>
              </div>
              <div className="text-right">
                <button
                  disabled={!isChecked}
                  className={`transition bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg ${
                    !isChecked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
