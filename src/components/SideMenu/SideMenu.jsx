import React from 'react';
import styles from "../../../dist/SideMenu.module.css";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCubes, faEnvelopeOpenText, faGear, faHouse, faNewspaper, faUserGroup, faUserPlus } from '@fortawesome/free-solid-svg-icons';


export const SideMenu = () => {
  return (
    <div>
      <nav className={styles.sidenav}>
        <ul className={styles.mainButtons}>
          <li>
            <FontAwesomeIcon icon={faHouse} color="white" className='icon' />
            <Link to="/Anasayfa" className='icon'>Anasayfa</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserPlus} color="white" className='icon' />
            <Link to="/Takip">Takip Ettiklerin</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} color="white" className='icon' />
            <Link to="/Günlükler">Günlükler</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCubes} color="white" className='icon' />
            <Link to="/Hobilerin">Hobilerin</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} color="white" className='icon' />
            <Link to="/Ayarlar">Ayarlar</Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.rightSidenav}>
        <ul className={styles.rightButtons}>
          <li>
            <FontAwesomeIcon icon={faUserGroup} color="white" className='icon' />
            <Link to="/Anasayfa">Arkadaşlar</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} color="white" className='icon' />
            <Link to="/Takip">Gündem</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelopeOpenText} color="white" className='icon' />
            <Link to="/Takip">Mesajlar</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
