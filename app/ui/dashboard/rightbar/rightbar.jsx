import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt='' className={styles.bg} fill/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>
            🔥 Available Now
          </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel. Minima placeat.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>
            🚀 Coming Soon
          </span>
          <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming up!</h3>
          <span className={styles.subTitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vel. Minima placeat facilis.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar