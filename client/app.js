import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout.js';
import HomePage from './pages/home-page/home-page.js';
import { NotFoundPage } from './pages/not-found-page/not-found-page.js';
import ProductDetailsPage from './pages/product-details-page/product-details-page.js';
import ProductListingPage from './pages/product-listing-page/product-listing-page.js';

export default function App() {

  return React.createElement(Routes, null,
    React.createElement(Route, { path: '', element: React.createElement(Layout) }, [
      React.createElement(Route, { key: "HomePage", path: '/', element: React.createElement(HomePage) }),
      React.createElement(Route, { key: 'ProductListingPage', path: '/products', element: React.createElement(ProductListingPage) }),
      React.createElement(Route, { key: 'ProductDetailsPage', path: '/product', element: React.createElement(ProductDetailsPage) }),
      React.createElement(Route, { key: 'NotFoundPage', path: '*', element: React.createElement(NotFoundPage) })
    ]))
}
