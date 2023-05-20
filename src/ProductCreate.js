import React, { useState } from 'react';
import axios from 'axios';
import {MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';
const ProductCreate = ({handleSubmit,title,setTitle,price,setPrice,description,setDescription}) => {
  

  return (
   
    <div className="bg-gray-900  min-h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className='max-w-4xl w-full mx-auto px-5 py-12'>
    <Link to="/"><MdArrowBack className='text-4xl text-white font-extrabold'/></Link>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
   create new entry
      </h2>
    </div>

    <div className="mt-10 ">
      <form onSubmit={handleSubmit} className="space-y-6" >
        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
            Title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              value={title} onChange={(e) => setTitle(e.target.value)} 
              className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
            price
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="number" value={price} onChange={(e) => setPrice(e.target.value)} 
              className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
        <div>
        <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
            description
          </label>
           <textarea  className="mt-2 px-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" value={description} onChange={(e) => setDescription(e.target.value)} />
         </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
           CREATE
          </button>
        </div>
      </form>

      </div>
    </div>
  </div>
  );
};

export default ProductCreate;
