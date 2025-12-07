import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCategory } from '../redux/slices/ProductSlice';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { items, status, searchTerm, category } = useSelector(
    (state) => state.Store_products  // ✔️ FIXED
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = items.filter((item) => {
    return (
      (category === '' || item.category === category) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="pt-24">
       <Banner /> 
      <div className="flex justify-center gap-4 mt-4">
        {['', 'electronics', "men's clothing", "women's clothing", 'jewelery'].map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className={`px-4 py-2 rounded-md ${
              category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {cat === '' ? 'All' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          filtered.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};
export default Dashboard;
