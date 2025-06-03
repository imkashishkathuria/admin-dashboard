import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

import React from 'react'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='Name' name='username' required/>
        <input type="email" placeholder='email' name='email' required/>
        <input type="phone" placeholder='phone' name='phone' />
        <input type="text" placeholder='website' name='website' />
       
         <p className={styles.label}>Address</p>
        
          <input type='text' placeholder='street' name='street' />
           <input type='text' placeholder='city' name='city' />
           <input type='number' placeholder='zipcode' name='zipcode' />
        {/* <select name='isAdmin' id='isAdmin'>
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value={true} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select> */}
        {/* <textarea name='address' id='address' rows="16" placeholder='Address'></textarea> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
