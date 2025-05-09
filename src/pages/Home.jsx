import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import { ClipLoader } from 'react-spinners';
import ProductsSection from '../components/ProductsSection';

function Home() {
  const searchTerm = useSelector(state => state.search.searchTerm);
  const { loading, items, error } = useSelector(state => state.products);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(20);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = items.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm) || (product.brand?.toLowerCase() || '').includes(searchTerm)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(items);
    }
  }, [searchTerm, items]);

  return (
    <main className="min-h-96">
      <div className="pt-6 pb-12 px-4">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <ClipLoader loading={true} size={40} color="#34d399" />
          </div>
        )}

        {!loading && error && (
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
              <h2 className="text-xl font-medium text-red-400">{error}</h2>
              <p className="mt-2 text-gray-400">There was a problem loading the products. Please try again later.</p>
            </div>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <><ProductsSection products={products.slice(0, visibleProducts)} />
            {visibleProducts < products.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleProducts(visibleProducts + 20)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg 
            font-medium transition-colors duration-200 flex items-center space-x-2
            shadow-lg hover:shadow-xl cursor-pointer">
                  Load more products
                </button>
              </div>
            )}
          </>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-medium text-emerald-400">No products found</h2>
              <p className="mt-2 text-gray-400">
                {searchTerm
                  ? `No products match "${searchTerm}". Try a different search term.`
                  : "No products available at the moment."}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;