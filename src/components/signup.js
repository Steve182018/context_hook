import React, { createContext, useState, useContext } from 'react';
import { useUser } from './usecontext';


function SignupForm() {
    const { updateUser } = useUser();
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                /><br/><br/>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                /><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
