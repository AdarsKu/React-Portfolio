import style from './stylefile/Footer.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {

  return <>
    <div id='Contact' className={style.footer}>
      <div className={style.content}>

        <div className={style.info}>Contact&apos;s
        </div>

        <div className={style.socialLink}>
          <div className={style.link}>
            <FaLinkedin style={{ marginRight: "2%" }} />www.linkdin.com/in/adarsh-pandey-26466b274
          </div>
          <div className={style.link}>
            <FaGithub style={{ marginRight: "2%" }} />https://github.com/AdarsKu
          </div>
          <div className={style.link}> <HiOutlineMail style={{ marginRight: "2%" }} />adarshpandey194200@gmail.com</div>




        </div>
      </div>
    </div>
  </>
}
