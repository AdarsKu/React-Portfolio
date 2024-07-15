import style from './stylefile/About.module.css'
import { getImageUrl } from './utils';
import { SiAffinitydesigner } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";

export default function About() {

  return <>
    <div id='About' className={style.aboutMain}>
      <h2 style={{ paddingTop: "20px" }}> <center>About</center>      </h2>
      <div className={style.mainBox}>

        <img className={style.aboutImage} src={`${getImageUrl('about.jpg')}`}  />
        <div className={style.aboutCards}>

          <div className={style.card}>
            <SiAffinitydesigner style={{ position: "absolute" }} />
            <h4 style={{ paddingLeft: "20px" }}> Frontend Developer</h4>
            <p>I am Frontend Developer with experience in developing responsive website </p>
          </div>

          <div className={style.card}>
            <FaServer style={{ position: "absolute" }} />
            <h4 style={{ paddingLeft: "20px" }}> Backend Developer</h4>
            <p>I have experience developing fast and optimised back-end system and APIs</p>
          </div>

          <div className={style.card}>
            <FaJava style={{ position: "absolute" }} />
            <h4 style={{ paddingLeft: "20px" }}> Java Developer</h4>
            <p>I am efficient in Java language. I see my future as Java developer.</p>
          </div>
        </div>

      </div>

    </div>
  </>
} 
