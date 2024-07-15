import style from './stylefile/Experience.module.css'
import { getImageUrl } from './utils'
export default function Experience() {

  return <>
    <div id='Experience' className={style.expMain}>
      <center><h2>Skills</h2></center>
      <div className={style.expMainBox}>

        <div className={style.logo}>
          <img src={`${getImageUrl('exp.png')}`} alt="Skills" />
        </div>

        <div className={style.cards}>
          <div className={style.card}>I had completed my core Java and SpringBoot on Udemy with instructor Range Karnam.I had done MySQL and JPA,JSP,Servlet in my cllege syllabus.</div>

          <div className={style.card}>I had done HTML, CSS,JS in my frontend course and bootcamp along with React which makes me learn component based designing of website at fast pace.</div>

          <div className={style.card}>C and C++ was covered by college training and Android App development are currently in progress on udemy with most knowledged instructor Abbas Masri</div>

        </div>

      </div>
    </div>
  </>
}
