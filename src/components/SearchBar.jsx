import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { setSearchTerm } from '../redux/slices/searchSlice';

function SearchBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const searchTerm = useSelector(state => state.search.searchTerm)
    const [query, setQuery] = useState(searchTerm)

    function handleSearch(e) {
        e.preventDefault()
        dispatch(setSearchTerm(query.trim().toLowerCase()))
        if (location.pathname !== '/') {
            navigate('/')
        }
    }

    return (
        <form 
        onSubmit={handleSearch}
        className="relative w-full"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-800
                       border border-gray-700 focus:border-emerald-400
                       text-gray-100 placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 text-gray-400 hover:text-emerald-400
                       flex items-center justify-center"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>
      </form>
    )
}

export default SearchBar
