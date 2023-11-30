import { createRoot } from 'react-dom/client';
import { Nav } from './Nav.jsx';
import { Product } from './Product.jsx';
import {Recommended} from './Recommended.jsx';
import products from './products.json';
import './index.css';


const root = document.getElementById('root');
createRoot(root).render(
  <>
    <Nav />
    <Product {...products[0]} />
    <Recommended />
  </>
);