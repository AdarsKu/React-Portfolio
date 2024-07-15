import { useState } from 'react';
import { getImageUrl } from './utils'
import styles from './Navbar.module.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Adarsh</a>




      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? <div>Close</div> :
          getImageUrl('menuIcon.png')} alt="menu" onClick={() => (setMenuOpen(!menuOpen))} />


        <ul className={`${styles.menuItem}  ${menuOpen && styles.menuOpen} `}
          onClick={() => setMenuOpen(!menuOpen)}>


          <li><a href="#about">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
