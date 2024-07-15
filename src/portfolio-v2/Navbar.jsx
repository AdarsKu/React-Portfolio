import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { getImageUrl } from './utils'
import styles from './stylefile/Navbar.module.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (<>
    <IoMdClose />
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Adarsh</a>

      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? < IoMdClose /> :
          getImageUrl('menuIcon.png')} alt="menu" onClick={() => (setMenuOpen(!menuOpen))} />


        <ul className={`${styles.menuItem}  ${menuOpen && styles.menuOpen} `}
          onClick={() => setMenuOpen(!menuOpen)}>


          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>

          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar;
