import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "./redux/slices/cartSlice";
import Header from "./components/Header"
import Footer from "./components/Footer"

function Root() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem('cart')
      if (savedItems) {
        const parsedItems = JSON.parse(savedItems)
        dispatch(setCart(parsedItems))
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error)
      localStorage.removeItem('cart')
    }
  }, [dispatch])

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } else {
      localStorage.removeItem('cart')
    }
  }, [cartItems])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root