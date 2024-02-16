import React from 'react'
import styles from "../../../dist/Login.module.css"
import { Navbar } from '../../components/Navbar/Navbar'
import { NavbarV2 } from '../../components/NavbarV2/NavbarV2'
// import { styles } from '../../../dist/Login.module.css'
export const Login = () => {
  return (
    <div >
      <NavbarV2 />
      <div class={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div class={styles.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
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
