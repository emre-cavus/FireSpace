import React from 'react'
import styles from "../../../dist/Login.module.css"
import { Navbar } from '../../components/Navbar/Navbar'

export const Register = () => {
  return (
    <div >
      <Navbar />
      <div class={styles.loginBox}>
        <h2>Register</h2>
        <form>
          <div class={styles.userBox}>
            <input type="email" name="" required="" />
            <label>Email</label>
          </div>
          <div class={styles.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class={styles.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div class={styles.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
