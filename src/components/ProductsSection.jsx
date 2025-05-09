import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function ProductsSection({ products }) {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  function handleAddToCart(id, title, price, stock, imageUrl) {
    if (stock <= 0) {
      toast.error("Out of stock");
      return;
    }
    const existingItem = cartItems.find((i) => i.id === id);
    if (!existingItem) {
      dispatch(addToCart({ id: id, title: title, price: price, quantity: 1, imageUrl: imageUrl }));
      toast.success("Item added to Cart");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ToastContainer position="top-right" pauseOnHover={false} closeOnClick theme="dark" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const existingItem = cartItems.find((i) => i.id === product.id);
          return (
            <div
              key={product.id}
              className="bg-gray-900 text-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-800 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-fit sm:object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-100 line-clamp-1">{product.title}</h3>
                  <span className="bg-emerald-900 text-emerald-400 text-xs font-semibold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < Math.round(product.rating) ? "text-emerald-400" : "text-gray-700"} w-4 h-4`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-end">
                    <span className="text-xl font-bold text-emerald-400">
                      ${(product.price).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className={`text-xs font-medium mr-2 ${product.stock > 0 ? "text-emerald-400" : "text-orange-400"}`}>
                      {existingItem ? "Already in Cart" : (product.stock > 0 ? "In Stock" : "Out of Stock")}
                    </span>

                    {existingItem ? (
                      <button
                        onClick={() => navigate('/cart')}
                        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm rounded-md transition-colors duration-200 cursor-pointer">
                        <FaShoppingCart className="mr-2" />
                        View Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product.id, product.title, product.price, product.stock, product.thumbnail)}
                        className={`flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 text-sm rounded-md transition-colors duration-200 ${product.stock > 0 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                          }`}
                        disabled={product.stock <= 0}>
                        <FaShoppingCart className="mr-2" />
                        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsSection;
