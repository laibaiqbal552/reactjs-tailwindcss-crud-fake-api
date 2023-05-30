import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductRead from "./ProductRead";
import ProductCreate from "./ProductCreate";
import axios from "axios";
import ProductUpdate from "./ProductUpdate";
const App = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
  });
  const [editProductId, setEditProductId] = useState();
  const [load, setLoad] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/products");
      setProducts(response.data.data);
      console.log(response.data, "data");
      setLoad(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };
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
      const response = await axios.post("http://localhost:1337/api/products", {
        data: newProduct,
      });
      console.log("Product created:", response.data);
      setLoad(true);
      const newaddedProducts = [...products, response.data];
      setProducts(newaddedProducts);
      setLoad(false);
      setModalOpen(true);

      setTitle("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // delete an entry
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      setShowDeleteModal(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleDeleteConfirm = () => {
    // Perform the deletion logic here

    // Assuming the deletion was successful, close the modal and handle any necessary cleanup
    setShowDeleteModal(false);
    // Additional logic or function calls after deletion
  };

  // delete an entry
  // edit data into form
  const HandleEdit = (pro) => {
    console.log(pro, "pro"); // Log the pro object to check if it has a valid id property
    setNewProduct(pro);
    setEditProductId(pro.id);
    console.log(editProductId, "editid");
  };

  // edit data into form
  const HandleUpdate = (event) => {
    const updateData = {
      data: {
        title: newProduct.attributes.title,
        price: newProduct.attributes.price,
        description: newProduct.attributes.description,
      },
    };
    event.preventDefault();
    try {
      // If editProductId is present, update the existing product
      axios
        .put(`http://localhost:1337/api/products/${editProductId}`, updateData)
        .then((response) => {
          console.log(response.data, "Product updated successfully.");
          setShowUpdateModal(true);
          fetchData(); // Refresh the product list after updating
          setNewProduct({
            // Reset the form fields after successful update
            title: "",
            price: "",
            description: "",
          });
          setEditProductId(null); // Reset the edit product ID
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  const handleUpdateConfirm = () => {
    // Perform the deletion logic here

    // Assuming the deletion was successful, close the modal and handle any necessary cleanup
    setShowUpdateModal(false);
    // Additional logic or function calls after deletion
  };
  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProductRead
              products={products}
              handleDelete={handleDelete}
              HandleEdit={HandleEdit}
              load={load}
              setLoad={setLoad}
              setShowDeleteModal={setShowDeleteModal}
              showDeleteModal={showDeleteModal}
              handleDeleteConfirm={handleDeleteConfirm}
            />
          }
        />
        <Route
          path="/products/create"
          element={
            <ProductCreate
              handleSubmit={handleSubmit}
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
              setModalOpen={setModalOpen}
              isModalOpen={isModalOpen}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductUpdate
              handleSubmit={handleSubmit}
              HandleUpdate={HandleUpdate}
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              title={title}
              setTitle={setTitle}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
              handleUpdateConfirm={handleUpdateConfirm}
              setShowUpdateModal={setShowUpdateModal}
              showUpdateModal={showUpdateModal}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
