"use client"

import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddUserPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.website.trim()) {
      newErrors.website = 'Website is required';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Form submitted!');
      // alert("Form submitted!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
      });
    } else {
      toast.error("Error submitting form!")
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} >
        <input type="text" placeholder='Name' name='name' onChange={handleChange} value={formData.name} required />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        <input type="email" placeholder='email' name='email' onChange={handleChange} value={formData.email} required />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <input type="phone" placeholder='phone' name='phone' onChange={handleChange} value={formData.phone} />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}

        <input type="text" placeholder='website' name='website' onChange={handleChange} value={formData.website} />
        {errors.website && <span style={{ color: 'red' }}>{errors.website}</span>}

        <p className={styles.label}>Address</p>

        <input type='text' placeholder='street' name='street' />
        <input type='text' placeholder='city' name='city' />
        <input type='number' placeholder='zipcode' name='zipcode' />
        <button type='submit' onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
