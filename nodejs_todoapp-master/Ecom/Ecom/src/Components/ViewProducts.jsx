import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Components/Loader.css";

const ViewProducts = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/task/data1');
                setTimeout(() => {
                    setProducts(response.data.user);

                }, 2000);
                console.log("shopdata:", response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        console.log("ID:", id)
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/v1/task/products`, { data: { id } });
                setProducts(products.filter(product => product._id !== id));
                console.log("Product deleted successfully", response.data.users);
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    const handleEdit = (product) => {
        setEditProduct(product);
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/v1/task/products/${id}`, editProduct);
            setProducts(products.map(product =>
                product._id === id ? editProduct : product
            ));
            setEditProduct(null);
            console.log("Product updated successfully");
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
            {products.length > 0 ? (
                <div className='container'>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {editProduct && editProduct._id === product._id ? (
                                            <input
                                                type="text"
                                                value={editProduct.title}
                                                onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })}
                                            />
                                        ) : (
                                            product.title
                                        )}
                                    </td>
                                    <td>
                                        {editProduct && editProduct._id === product._id ? (
                                            <input
                                                type="number"
                                                value={editProduct.price}
                                                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                                            />
                                        ) : (
                                            `Rs.${product.price}`
                                        )}
                                    </td>
                                    <td>
                                        <img
                                            src={product.images}
                                            alt={product.name}
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                    </td>
                                    <td>
                                        {editProduct && editProduct._id === product._id ? (
                                            <>
                                                <button className='btn btn-primary me-2' onClick={() => handleUpdate(product._id)}>Save</button>
                                                <button className='btn btn-primary me-2' onClick={() => setEditProduct(null)}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className='btn btn-primary me-2' onClick={() => handleEdit(product)}>Edit</button>
                                                <button className='btn btn-primary me-2' onClick={() => handleDelete(product._id)}>Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border"
                        style={{ marginTop: "20%", fontSize: "30px" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewProducts;
