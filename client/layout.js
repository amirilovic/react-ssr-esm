import { Link, Outlet } from 'react-router-dom';
import React from 'react';

export function Layout() {
    return React.createElement('div', null,
        React.createElement('nav', null,
            React.createElement('ul', null,
                React.createElement('li', null,
                    React.createElement(Link, { to: "/" }, "Home Page")
                ),
                React.createElement('li', null,
                    React.createElement(Link, { to: "/products" }, "Product Listing Page")
                ),
                React.createElement('li', null,
                    React.createElement(Link, { to: "/product" }, "Product Details Page")
                )
            )
        ),
        React.createElement(Outlet)
    )
}
