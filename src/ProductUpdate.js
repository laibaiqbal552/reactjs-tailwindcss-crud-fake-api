import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
const ProductUpdate = ({
  HandleUpdate,
  handleSubmit,
  newProduct,
  setNewProduct,
  setLoad,
  load,
  showUpdateModal,
  setShowUpdateModal,
  handleUpdateConfirm,
}) => {
  const closeModal = () => setShowUpdateModal(false);
  if (load) {
    return (
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center ">
      <div className="max-w-4xl w-full mx-auto px-5 py-12">
        <Link to="/">
          <MdArrowBack className="text-4xl text-white font-extrabold" />
        </Link>
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
        <form onSubmit={HandleUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-white"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={newProduct?.attributes?.title}
                // onChange={(e) =>
                //   setNewProduct({ ...newProduct, title: e.target.value })
                // }
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    attributes: {
                      ...newProduct?.attributes,
                      title: e.target.value,
                    },
                  })
                }
                className="block w-full  px-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-white"
            >
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                value={newProduct?.attributes?.price}
                // onChange={(e) =>
                //   setNewProduct({ ...newProduct, price: e.target.value })
                // }
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    attributes: {
                      ...newProduct?.attributes,
                      price: e.target.value,
                    },
                  })
                }
                className="block w-full px-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-2 block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              value={newProduct?.attributes?.description}
              // onChange={(e) =>
              //   setNewProduct({ ...newProduct, description: e.target.value })
              // }
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  attributes: {
                    ...newProduct?.attributes,
                    description: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={HandleUpdate}
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Update
            </button>
            <PopupModal2 isOpen={showUpdateModal} onClose={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
const PopupModal2 = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Data Popup"
      className="max-w-[500px] w-full bg-white relative m-auto h-[400px] mt-28 p-6 rounded-md"
    >
      <button onClick={onClose} className="absolute right-6">
        <FaWindowClose className="text-2xl" />
      </button>

      <h2 className="flex text-indigo-900 text-2xl font-bold justify-center items-center h-full">
        Data updated Successfully!
      </h2>
    </Modal>
  );
};
