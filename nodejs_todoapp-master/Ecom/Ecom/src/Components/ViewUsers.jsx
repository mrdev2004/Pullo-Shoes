import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; // Import toast for notifications

const ViewUsers = () => {
    const [users, setUsers] = useState([]); // Initialize users as an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/task/userdata');
                setTimeout(() => { setUsers(response.data.user); }, [2000])  // Assuming the data is in response.data.user
                console.log("userdata:", response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleUserDelete = async (id) => {

        console.log("ID:", id);
        try {
            const response = await axios.post('http://localhost:5000/api/v1/task/userid', { data: { id } });
            console.log(response)
            setUsers(prevUsers => prevUsers.filter(user => user._id !== id)); // Update the state immediately
            toast.success('User deleted successfully'); // Show success toast
        } catch (error) {
            toast.error('Error deleting user'); // Show error toast
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <Toaster /> {/* Include the Toaster component for displaying toasts */}
            {users.length > 0 ? (
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { handleUserDelete(user._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center">
                    <div className="spinner-border" style={{ marginTop: "20%", fontSize: "30px" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewUsers;
