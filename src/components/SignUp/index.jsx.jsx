import React, { useState } from 'react';
import "./index.css"
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Storing form data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    // Reset form fields
    setFormData({
      name: '',
      password: '',
      email: '',
      phoneNumber: '',
      profession: '',
    });
    alert('Form submitted successfully!');
    navigate("/");

  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession:</label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="full-stack-developer">Full Stack Developer</option>
            <option value="frontend-developer">Frontend Developer</option>
            <option value="backend-developer">Backend Developer</option>
            <option value="product-manager">Product Manager</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
