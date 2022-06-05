import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return React.createElement('div', null,
    React.createElement('h2', null, "Nothing to see here!"),
    React.createElement('p', null, React.createElement(Link, { to: "/" }, "Go to home page"))
  )
}
