import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const InsertData = () => {
    const defaultCategory = {
        id: 1,
        name: 'Default Category',
        image: 'default_image_url',
    };

    const [image, setImage] = useState('');
    const [price,setprice]=useState();
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        category: defaultCategory,
    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const convertToBase64 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/task/upload-data', {
                base64: image,
                ...formData
            });

            if (response.status === 200) {
                toast.success("Data submitted successfully!");
            } else {
                toast.error("Failed to submit data.");
            }

        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error("Error submitting data.");
        }
    };

    return (
        <>
            <div className="container" style={{ 
                boxShadow: "5px 5px 5px 5px black",
                maxHeight: "150vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="1"
                            value={formData.id}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">ID</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Title</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Price</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Description</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="file"
                            className="form-control"
                            onChange={convertToBase64}
                        />
                        <label htmlFor="floatingPassword">Upload Images</label>
                    </div>
                    <button type="submit" className="btn btn-outline-warning mt-4">Submit</button>
                </form>
                {/* {image && <img src={image} alt="Preview" height={100} width={100} />} */}
                <Toaster />
            </div>
        </>
    );
};

export default InsertData;
