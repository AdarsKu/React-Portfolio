import { getImageUrl } from "./utils"


export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi I m Adarsh</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae numquam neque accusantium, vitae placeat vero blanditiis sit asperiores reprehenderit obcaecati temporibus quas totam aspernatur illo animi debitis odit ut deserunt.</p>
        <a href="mailto:adarshpandey194200@gmail.com">contact Me</a>
      </div>

      <img src={getImageUrl('hero.png')} alt="hero" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  )
}


