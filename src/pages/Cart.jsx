import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }, [cartItems])

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }, [cartItems])

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id))
    toast.success("Successfully Removed")
  }

  function handleUpdateQuantity(id, quantity) {
    dispatch(updateQuantity({ id: id, quantity: quantity }))
  }

  if (cartItems.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="bg-gray-900 rounded-lg p-8 max-w-md mx-auto">
          <FaShoppingCart className="text-6xl text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors duration-200">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 min-h-96">
      <ToastContainer position="top-center" pauseOnHover={false} closeOnClick theme="dark" />
      <h2 className="text-2xl mb-6  font-bold text-gray-100">Shopping Cart</h2>
      <div className="grid gap-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 border border-gray-800">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-lg font-medium text-gray-100">{item.title}</h3>
              <p className="text-emerald-400 font-bold">
                ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleUpdateQuantity(item.id, -1)}
                disabled={item.quantity <= 1}
                className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-3 py-1 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                -
              </button>
              <p className="text-gray-100 w-8 text-center">{item.quantity}</p>
              <button
                onClick={() => handleUpdateQuantity(item.id, +1)}
                className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-3 py-1 rounded-md cursor-pointer">
                +
              </button>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md ml-2 cursor-pointer">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-2xl justify-center items-center">
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-gray-400">Items: </span>
          <span className="text-emerald-400 font-bold">{totalItems}</span>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-gray-400">Total: </span>
          <span className="text-emerald-400 font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </main>
  )
}

export default Cart