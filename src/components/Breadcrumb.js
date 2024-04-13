import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="bg-gray-100 rounded-md flex p-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span><a href="/dashboard" >{item.name}</a></span>
            {index !== items.length - 1 && (
              <svg
                className="mx-2 w-3 h-3 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 3l-7 7h4v7h6v-7h4z" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
