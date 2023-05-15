import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { useContext, useEffect } from 'react';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { ThemeContext, ThemeProvider } from './context/themeContext';
import Contact from './components/Contact';
import Counter from './components/Counter';
import CounterWrapper from './components/CounterWrapper';
import List from './components/List';

const router = createBrowserRouter([{
  path: '/',
  element: <><Header /> <ProductList /></>
}, {
  path: '/product/:productId',
  element: <><Header /> <ProductDetail /></>
}, {
  path: '/cart',
  element: <><Header /> <Cart /></>
}, {
  path: '/contact',
  element: <><Header /><Contact /> </>
}, {
  path: '/counter',
  element: <><CounterWrapper /> </>
}, {
  path: '/list',
  element: <><List /> </>
}
]);

function App() {
  useEffect(() => {
    console.log('App got mounted');
  }, []);

  const { isDarkMode } = useContext(ThemeContext);

  return (
      <div className={`App ${isDarkMode ? 'dark-mode': 'light-mode'}`}>
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
