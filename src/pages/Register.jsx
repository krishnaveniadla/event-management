import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(formData);
    navigate('/login');
  };

  return (
    <div className="register__container">
      <div className="register__wrapper">
        <div className="register__content">
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg" alt="register" />
        </div>

        <div className="register__form">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Photo URL"
              id="photo"
              onChange={handleChange}
            />
            <button type="submit" className="btn primary__btn">
              Register
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register
