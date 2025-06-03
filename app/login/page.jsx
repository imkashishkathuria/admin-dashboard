import React from 'react'
import styles from '../ui/login/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      
      <form className={styles.form}>
        <h1>
          Login
        </h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button className=''> Login </button>
      </form>
    </div>
  )
}

export default Login
