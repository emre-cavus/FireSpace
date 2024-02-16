import React from 'react';
import styles from "../../../dist/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <button onclick="window.location.href='/';" className={styles.button}>
        <img src="../../assets/Fire_Space_Vector_Logo.png" alt="button" />
      </button>
      {/* <div className="search-box">
        <form action="/search" id="search-form" method="get" target="_top">
          <input id="search-text" name="q" placeholder="Search Box" type="text" />
          <button id="search-button" type="submit">
            <FontAwesomeIcon icon={faSearch} color="white" className='icon' />

          </button>
        </form> 
      </div> */}
      <hr />
    </div >
  )
}
