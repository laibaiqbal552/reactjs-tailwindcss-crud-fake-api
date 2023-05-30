import React from "react";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
const ProductRead = ({
  products,
  handleDelete,
  HandleEdit,
  setLoad,
  load,
  setShowDeleteModal,
  showDeleteModal,
  handleDeleteConfirm,
}) => {
  const closeDeleteModal = () => setShowDeleteModal(false);
  if (load) {
    return (
      <div className="bg-gray-900  ">
        <div className="mx-auto max-w-7xl min-h-screen h-full flex items-center justify-center">
          <Oval
            height={150}
            width={150}
            color="#6366F1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#A5B4FC"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl min-h-screen">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  Users
                </h1>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <Link
                  to="/products/create"
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add user
                </Link>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-3xl font-semibold text-white sm:pl-0"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          price
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {products.length > 0 &&
                        products.map((product) => (
                          <tr key={product.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {product.attributes.title}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {product.attributes.price}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <div className="text-indigo-400 hover:text-indigo-300">
                                <Link to={`/products/${product.attributes.id}`}>
                                  <button
                                    onClick={() => HandleEdit(product)}
                                    type="button"
                                  >
                                    Edit
                                  </button>
                                </Link>
                              </div>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="text-indigo-400 hover:text-indigo-300"
                              >
                                Delete
                                <span className="sr-only">
                                  , {product.attributes.title}
                                </span>
                              </button>
                              <DeleteConfirmationModal
                                isOpen={showDeleteModal}
                                onCancel={closeDeleteModal}
                                onConfirm={handleDeleteConfirm}
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductRead;
const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Delete Confirmation Popup"
      className="max-w-[500px] w-full bg-white relative m-auto h-[400px] mt-28 p-6 rounded-md"
    >
      <button onClick={onCancel} className="absolute right-6">
        <FaWindowClose className="text-2xl" />
      </button>
      <h2 className="flex text-red-900 text-2xl font-bold justify-center items-center h-full">
        one item deleted?
      </h2>
    </Modal>
  );
};
