import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductRead from './ProductRead';
import ProductCreate from './ProductCreate';
import axios from 'axios';
import ProductUpdate from "./ProductUpdate"
const App = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description:''
  });
  const [editProductId, setEditProductId] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      console.log(response.data,"data")
    } catch (error) {
      console.log('Error:', error);
    }
  }
  useEffect(() => {
    

    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price,
      description,
    };

    try {
      
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      console.log('Product created:', response.data);
      const newaddedProducts = [...products, response.data];
    setProducts(newaddedProducts);
      setTitle('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.log('Error:', error);
    }
  };
//delete an entry 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log('Error:', error);
    }
  };
  //delete an entry 
  //edit data into form
  const HandleEdit = (product) => {
    setNewProduct(product);
    setEditProductId(product.id);
  };
   //edit data into form
   const HandleUpdate = (event) => {
    event.preventDefault();
    try {
      // If editProductId is present, update the existing product
      axios
        .put(`https://fakestoreapi.com/products/${editProductId}`, newProduct)
        .then((response) => {
          console.log(response.data,'Product updated successfully.');
          fetchData(); // Refresh the product list after updating
          setNewProduct({ // Reset the form fields after successful update
            title: '',
            price: '',
            description:''
          });
          setEditProductId(null); // Reset the edit product ID
        })
        .catch((error) => {
          console.error('Error updating product:', error);
        });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
 
  
  return (

      <div>
        <Routes>
        <Route index path="/" element={<ProductRead handleDelete={handleDelete} products={products} HandleEdit={HandleEdit}   />} />
        <Route path="/products/create" element={<ProductCreate handleSubmit={handleSubmit} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription}/>} />
        <Route path="/products/:id" element={<ProductUpdate handleSubmit={handleSubmit} HandleUpdate={HandleUpdate} newProduct={newProduct} setNewProduct={setNewProduct}  title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription}/>} />

        </Routes>
      </div>
 
  );
};

export default App;
