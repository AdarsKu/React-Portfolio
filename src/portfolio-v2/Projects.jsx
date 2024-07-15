import style from './stylefile/Projects.module.css'

export default function Projects() {

  return <>
    <div id='Projects' className={style.mainProjects}>
      <center><h2>PROJECTS</h2></center>
      <div className={style.cards}>

        <div className={style.card}>
          <img style={{ width: "90%", margin: "5%" }} src="../../assets/proj.jpg" alt="" />
          <h3>Todo web App <i >(Full stack)</i> </h3>
          <div className={style.aboutProj}>
            fully functional React connected with SpringBoor REST api
          </div>
          <div className={style.techUsed}>
            <div className={style.tech}> Spring boot</div>
            <div className={style.tech}> JPA, React</div>
            <div className={style.tech}>spring mvc</div>
          </div>
        </div>


        <div className={style.card}>
          <img style={{ width: "90%", margin: "5%" }} src="../../assets/proj.jpg" alt="" />
          <h3>Expression Evaluator<i>(Calculator)</i></h3>
          <div className={style.aboutProj}>
            Frontend is designed by JavaFX.
            • Infix Exp-{'>'}Postfix Exp-{'>'}Postfix Evaluation of Expression on Input field
          </div>
          <div className={style.techUsed}>
            <div className={style.tech}>Core Java</div>
            <div className={style.tech}>JavaFX</div>
          </div>
        </div>



        <div className={style.card}> <img style={{ width: "90%", margin: "5%" }} src="../../assets/proj.jpg" alt="" />
          <h3>Student Management System<i>(mini project)</i></h3>
          <div className={style.aboutProj}>

            performs CRUD operation on file
            1.add newly enrolled student
            <br />
            2.Get Data of student using roll no
            3.Delete record by using roll no
            4.Fetching record of all student

          </div>
          <div className={style.techUsed}>
            <button style={{ marginLeft: "20px" }} className={style.tech}>C</button>
          </div>
        </div>
      </div>
    </div>
  </>
}