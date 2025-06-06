import React from 'react'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill />
            </div>
            John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
        <label>
            Username
        </label>
        <input type="text" name='username' placeholder='john doe'/>
        <label>
            Email
        </label>
        <input type="email" name='email' placeholder='johndoe@gmail.com'/>
        <label>
            Password
        </label>
        <input type="password" name='password' placeholder='john doe'/>
        <label>
            Phone
        </label>
        <input type="text" name='phone' placeholder='+1234567'/><label>
            Address
        </label>
        <textarea type="text" name="address" placeholder="New York"></textarea>
        <label>
            Is Admin?
        </label>
        <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <label>
            Is Active
        </label>
        <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
