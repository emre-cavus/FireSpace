import React from 'react'
import styles from '../../../dist/Content.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLayerGroup, faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

export const Content = () => {
  return (
    <Container>
      <div className={styles.Content}>
        <textarea className={styles.Text} placeholder='Günlük yaz.'></textarea>
        <div className={styles.navButton}>
          <button>
            <FontAwesomeIcon icon={faLayerGroup} />
            <p>Kategori belirle</p>
          </button>
          <button>
            <FontAwesomeIcon icon={faImages} />
            <p>Fotoğraf ekle</p>
          </button>
          <button>
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Düzenle</p>
          </button>
          <button>
            <FontAwesomeIcon icon={faShare} />
            <p>Paylaş</p>
          </button>
        </div>
      </div>
    </Container>

  )
}
