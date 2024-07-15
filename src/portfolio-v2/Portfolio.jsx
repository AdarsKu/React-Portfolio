import styles from '../App.module.css'
import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import { Hero } from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
const Portfolio = () => {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
      </div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}
export default Portfolio;