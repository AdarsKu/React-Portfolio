import styles from '../App.module.css'
import { Hero } from './Hero'
import Navbar from './Navbar'
const Portfolio = () => {
  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
    </>
  )
}
export default Portfolio