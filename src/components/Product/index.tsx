"use client"
import Image from "next/image";
import { Product } from "@/types/product";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import { useState } from "react";

const productData: Product[] = [
    {
        image: "/images/product/product-01.png",
        name: "Apple Watch Series 7",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        stock: 30,
        price: 296,
        SalePrice: 400,
        Brand: "HP",
        Featured: "Lorem Ipsum",
        Published: "21-01-2024",
        Type: "S45",
    },
    {
        image: "/images/product/product-02.png",
        name: "Macbook Pro M1",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 546,
        stock: 30,
        SalePrice: 400,
        Brand: "HP",
        Featured: "Lorem Ipsum",
        Published: "21-01-2024",
        Type: "S45",
    },
    {
        image: "/images/product/product-03.png",
        name: "Dell Inspiron 15",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 443,
        stock: 30,
        SalePrice: 400,
        Brand: "HP",
        Featured: "Lorem Ipsum",
        Published: "21-01-2024",
        Type: "S45",
    },
    {
        image: "/images/product/product-04.png",
        name: "HP Probook 450",
        productdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Electronics",
        price: 499,
        SalePrice: 400,
        stock: 30,
        Brand: "HP",
        Featured: "Lorem Ipsum",
        Published: "21-01-2024",
        Type: "S45",
    },
];

const Products = () => {
    const [addform, setAddForm] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const toggleAddForm = () => {
        setAddForm(!addform);
    };

    const toggleEditForm = () => {
        setEditForm(!editForm);
    };
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6">
            <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
                All Products List
            </h4>
            <table className="w-full border-collapse border border-stroke dark:border-strokedark">
                <thead>
                    <tr className="bg-gray-100 dark:bg-strokedark">
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Name</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Description</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Category</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Stock</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Price</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Sale Price</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Brand</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Featured</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Published</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Type</th>
                        <th className="border border-stroke dark:border-strokedark px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, key) => (
                        <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.name}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.productdesc}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.category}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.stock}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                ${product.price}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                ${product.SalePrice}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Brand}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Featured}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-2 py-2">
                                {product.Published}
                            </td>
                            <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.Type}
                            </td>
                            <td className="border space-y-5 border-stroke dark:border-strokedark px-4 py-2 text-center">
                                <button
                                    onClick={toggleAddForm}
                                    className="mr-2 rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">
                                    Add
                                </button>
                                <button
                                    onClick={toggleEditForm}
                                    className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                                    Edit
                                </button>
                                <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Form */}
            <div
                className={`fixed top-0 right-0 no-scrollbar overflow-auto z-999 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${addform ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Add Product Form</h3>
                    <button
                        onClick={toggleAddForm}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    >
                        Close
                    </button>
                </div>
                <form action="#">
                    <div className="p-6.5">
                        <div className="w-full mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product Category
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Category"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product Media
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Product Featured"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Brand Name
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Product Price"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Price
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Sale Price"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Discount Price
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Stock"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                GST Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Type"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>


                        <div className="mb-6">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Description
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Type your message"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            ></textarea>
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                GST Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Type"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="relative z-20 inline-block border border-stroke w-full">
                            <select
                                name="#"
                                id="#"
                                className="relative z-20 inline-flex appearance-none bg-transparent py-3 pl-3 pr-8 w-full text-sm font-medium outline-none"
                            >
                                <option value="" className="dark:bg-boxdark">
                                    in stock
                                </option>
                                <option value="" className="dark:bg-boxdark">
                                    Out of stock
                                </option>
                            </select>
                            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                        fill="#637381"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                        fill="#637381"
                                    />
                                </svg>
                            </span>
                        </div>

                        <button className="flex w-full mt-10 justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                            Add Product
                        </button>
                    </div>
                </form>
            </div >


            {/* Edit Form */}
            < div
                className={`fixed top-0 right-0 no-scrollbar overflow-auto z-999 h-full w-[30%] bg-white shadow-lg transition-transform duration-300 dark:bg-boxdark ${editForm ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">Edit Product Form</h3>
                    <button
                        onClick={toggleEditForm}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    >
                        Close
                    </button>
                </div>
                <form action="#">
                    <div className="p-6.5">
                        <div className="w-full mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product Featured
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Product Featured"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Product Price
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Product Price"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Sale Price
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Sale Price"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Stock
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Stock"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Type
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Type"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Category"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Brand
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Brand"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Featured
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Featured"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Published
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your Published"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Description
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Type your message"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            ></textarea>
                        </div>
                        <button className="flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                            Edit Product
                        </button>
                    </div>
                </form>
            </ div>
        </div >
    );
};

export default Products;
