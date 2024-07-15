import { getImageUrl } from "./utils"
import { FaArrowDown } from "react-icons/fa";
import style from './stylefile/Hero.module.css'

export const Hero = () => {
  return (
    <section className={style.heroContainer}>
      <div className={style.textContent}>
        <h1>Hi I&apos;m <b style={{ color: "#d5dfedac" }}>Adarsh</b></h1>
        <p>I am full stack developer having the knowledge of working on frontend with React and backend with spring boot. I had build lots of project by using these technology.</p>
        <a className={style.contactMe} href="./../../assets/Pandey_Adarsh_Kumar_Shivpujan_resume.pdf" download='AdarshPandeyResume'><FaArrowDown />Get Resume</a>
      </div>

      <div className="logoSection">
        <img className={style.logo} src={getImageUrl('Student.jpg')} alt="hero" />
        <div className="topBlur" />
        <div className="bottomBlur" />
      </div>
    </section>
  )
}


