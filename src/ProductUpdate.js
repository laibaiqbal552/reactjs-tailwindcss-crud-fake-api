import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductUpdate = ({
  HandleUpdate,
  handleSubmit,
  newProduct,
  setNewProduct,
}) => {
  return (
    <div className='bg-gray-900 min-h-screen flex flex-col justify-center '>
      <div className='max-w-4xl w-full mx-auto px-5 py-12'>
        <Link to="/"><MdArrowBack className='text-4xl text-white font-extrabold'/></Link>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
   update an entry
      </h2>
    </div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='title' className='block text-sm font-medium leading-6 text-white'>
              Title
            </label>
            <div className='mt-2'>
              <input
                id='title'
                name='title'
                type='text'
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className='block w-full  px-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label htmlFor='price' className='block text-sm font-medium leading-6 text-white'>
              Price
            </label>
            <div className='mt-2'>
              <input
                id='price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className='block w-full px-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label htmlFor='description' className='block text-sm font-medium leading-6 text-white'>
              Description
            </label>
            <textarea
              id='description'
              className='mt-2 block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </div>
          <div>
            <button
              type='submit'
              onClick={HandleUpdate}
              className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
