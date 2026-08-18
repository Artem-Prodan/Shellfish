
import "./About.css";
import photo from "../assets/images/plchldr.png";

export default function About() {
  return(
    <section className="container">
      <div className="about__caption">
        <h1>Our Shellfish story</h1>
        <h2>What is Shellfish</h2>
        <p>Shellfish was created around a simple idea: making time for yourself shouldn’t need an excuse. Set near the shores of Galway Bay, Shellfish found its home in an old pub that once welcomed sailors coming in from the coast.</p>
      </div>

      <div className="about__bio">
        <h2>Who is Shellfish</h2>

        <div className="about__bio-block">
            <div className="b-block-1">
              <img src={photo} alt="Cillian photo"></img>
              <h3>Cillian</h3>
              <p>Shellfish started with two friends and a shared appetite.
              Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. After graduating, they returned to Ireland and went their separate ways, cooking and working in different restaurants. Years later, the idea brought them back to the same table.
              </p>
            </div>

            <div className="b-block-2">
              <img src={photo} alt="Liam photo"></img>
              <h3>Liam</h3>
              <p>Shellfish started with two friends and a shared appetite.
              Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. After graduating, they returned to Ireland and went their separate ways, cooking and working in different restaurants. Years later, the idea brought them back to the same table.
              </p>
            </div>
        </div>
      </div>


      <div className="about__sourcing">
        <h2>Where it comes from</h2>
        <p>Shellfish started with two friends and a shared appetite.
        Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. </p>

        <div className="about__sourcing-block">
            <div className="s-block-1">
              <img src={photo} alt="farmers photo"></img>
              <h3>Our lovely farmers</h3>
              <p>Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. 
              </p>
            </div>

            <div className="s-block-2">
              <img src={photo} alt="Nature and care photo"></img>
              <h3>Nature and care</h3>
              <p>Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. 
              </p>
            </div>

            <div className="s-block-3">
              <img src={photo} alt="Seasonal catch photo"></img>
              <h3>Seasonal catch</h3>
              <p>Cillian and Liam met in France while studying to become chefs. Somewhere between long days in the kitchen, late dinners and conversations about the places they wanted to open one day, they became close friends. 
              </p>
            </div>
        </div>
      </div>

    </section>
  );
}