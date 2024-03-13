import { useEffect, useState } from 'react';
import './App.css';
import Product from './componets/Product';
import db from './db.json';

function App() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // read all products
  const data = db.products;

  // set products
  useEffect(() => {
    const newProducts = data.filter((value) => value.page == currentPage);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setHasMore(newProducts.length > 0);
  }, [currentPage]);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    // update page number
    if (scrollTop + clientHeight >= scrollHeight - 50 && hasMore) { 
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // page scrolling listerner
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]); 


  return (
    <>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

export default App
