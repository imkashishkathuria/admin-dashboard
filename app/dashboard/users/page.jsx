"use client"

import React, { useEffect, useState } from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const UserPages = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async() => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log("failed to fetch data")
      }
    }
    fetchUsers();
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>
            Add New
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>City</td>
            <td>Website</td>
            <td>Company</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userImage} />
                  {user.name}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            {/* <td>
              <div className={styles.buttons}>
              <Link href="/dashboard/users/test">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td> */}
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UserPages
