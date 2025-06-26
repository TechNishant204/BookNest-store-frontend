import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 flex items-center justify-center py-10 px-2">
      <div className="w-full max-w-3xl rounded-3xl shadow-2xl bg-white/90 backdrop-blur-lg border border-white/40">
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight flex items-center gap-2">
            <span role="img" aria-label="cart">
              🛒
            </span>{" "}
            Shopping Cart
          </h2>
          <button
            type="button"
            onClick={handleClearCart}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg shadow-md font-semibold transition-all duration-200 active:scale-95"
          >
            Clear Cart
          </button>
        </div>
        <div className="px-8 py-6">
          {cartItems.length > 0 ? (
            <ul className="space-y-6">
              {cartItems.map((product) => (
                <li
                  key={product?._id}
                  className="flex items-center bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200 p-4 group"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 border-pink-400 group-hover:scale-105 transition-transform duration-200">
                    <img
                      alt={product?.title}
                      src={getImgUrl(product?.coverImage)}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex flex-wrap justify-between items-center">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                        <Link to="/" className="hover:underline">
                          {product?.title}
                        </Link>
                      </h3>
                      <span className="text-xl font-semibold text-pink-500">
                        ${product?.newPrice}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 capitalize">
                      <strong>Category:</strong> {product?.category}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-gray-600 text-sm">
                        <strong>Qty:</strong> 1
                      </span>
                      <button
                        onClick={() => handleRemoveFromCart(product)}
                        type="button"
                        className="text-red-500 hover:text-red-700 font-semibold px-3 py-1 rounded transition-colors duration-200 border border-red-200 hover:border-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <span className="text-6xl mb-4 animate-bounce">🛍️</span>
              <p className="text-lg text-gray-500 font-medium">
                No product found!
              </p>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 px-8 py-6 bg-white/70 rounded-b-3xl">
          <div className="flex justify-between items-center text-xl font-bold text-gray-800">
            <span>Subtotal</span>
            <span>${totalPrice ? totalPrice : 0}</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              to="/checkout"
              className="flex-1 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 text-lg font-bold text-white shadow-md hover:from-red-500 hover:to-pink-500 transition-all duration-200 active:scale-95"
            >
              Checkout
            </Link>
            <Link to="/" className="flex-1">
              <button
                type="button"
                className="w-full flex items-center justify-center rounded-lg border-2 border-pink-400 px-6 py-3 text-lg font-bold text-pink-500 bg-white hover:bg-pink-50 transition-all duration-200 active:scale-95"
              >
                Continue Shopping
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
