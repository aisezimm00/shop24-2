import React from 'react';
import { Link } from 'react-router-dom';
import './geader.css';


export default function Header() {
  return (
    <header className='header'>
      <div className="container header-container">
        <h1 className='header-logo'>
          <Link to={'/'}>Shop</Link>
        </h1>
        <nav className='header-nav'>
          <Link to={'/category/electronics'}>Electronics</Link>
          <Link to={'/category/jewelery'}>Jewelery</Link>
          <Link to={'/category/men-clothing'}>Men's Clothing</Link>
          <Link to={'/category/women-clothing'}>Women's Clothing</Link>
        </nav>
        <nav className='header-nav'>
          <Link to={'/cart'} className='cart-link'>
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
