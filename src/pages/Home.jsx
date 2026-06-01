import "./Home.css"
import arduinoboard from "../assets/arduinoboard.jpg"
import classroompic from "../assets/classroompic.jpg"
function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="h1">WEST WILLOW WILL: CODING FOR CHANGE</h1>
        <h2>WWW.CODE (University of Michigan)</h2>
      </section>
      <div className= "section">
          <img src={arduinoboard} className="board" alt="Img" />
          {/* <p className = "caption">A musical keyboard student's built using arduino. Students built and programmed the circuit
           using C++, to play a variety of different notes.
          </p> */}
        <div className="text">
          <div className="eyebrow">WHO WE ARE</div>
          <div className="subheading">What is WWW.CODE?</div>
          WWW.Code stands for West Willow Will: Coding for Change - A four-week summer camp held in West Willow, 
            Ypsilanti, where students ages 6 - 19 learned the fundamentals of computer programming and engineering through
            hands-on activities and collaborative projects. The program was part of the Davis Projects for Peace 2025 Cohort 
            and was supported by a $10,000 grant which helped supply computers, Arduino boards, and other engineering materials 
            for the course throughout the summer. The program was also supported by the Odindi Youth Action Village, a 501c3 nonprofit 
            whose Freedom School provided the structure and space for WWW.Code sessions. One can explore the broader Projects for Peace initiative through the 
             <a href="https://docs.google.com/spreadsheets/d/14e4Xw5cjOW0_oxFepvgIsov-7mMzLNWxBJSPkonURw4/edit?gid=291679145#gid=291679145" target="_blank" rel="noopener noreferrer">  Projects for Peace Index (2007-2025) </a>,
              and <a href="https://projects-for-peace-map-2025.streamlit.app" target="_blank" rel="noopener noreferrer"> Projects for Peace map 2025.</a>
        </div>
      </div>
      <div className= "section2">
        <div className="text">
          <div className="eyebrow">WHY IT MATTERS</div>
          <div className="subheading">Our Mission</div>
          WWW.CODE was created to expand access to computer science and engineering education for students who may not 
          otherwise have opportunities to explore these fields. By providing hands-on experience with programming and 
          engineering projects, we hope to help students discover new interests, build confidence, and envision themselves 
          pursuing future studies and careers in STEM.</div>
        <img src={classroompic} className="board" alt="Img" />
          {/* <p className = "caption">A musical keyboard student's built using arduino. Students built and programmed the circuit
           using C++, to play a variety of different notes.
          </p> */}
      </div>
    </main>
  )
}

export default Home