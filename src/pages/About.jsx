import "./Home.css"
function About() {
  return (
    <main>
      <h1>About WWW.Code</h1>
      <div className="about1">
        <div className="eyebrow">First Sessions</div>
      From June through July, students attended two classes each week, 
        learning alongside their peers in an interactive and creative environment. <br/><br/>
      In the first few sessions, students were introduced to the basics of coding through 
      team activities and interactive lessons. One activity involved students giving 
      instructions to a partner to build a lego structure which they couldn't see. This exercise taught the importance of 
      giving exact instructions to the computer when coding. Students then explored core coding concepts such as while
      loops, if-statements and other conditionals while creating their own mini-projects using Scratch (
      <a href="https://scratch.mit.edu" target="_blank" rel="noopener noreferrer">scratch.mit.edu</a> ).
      Through Scratch, Kahoots, and interactive lessons, students mastered the basics of coding.
      </div>
      <div className="about2">
        <div className="eyebrow">Arduino</div>
      After learning about circuits and general engineering concepts, 
      students began building their own Arduino boards. Using Arduino Uno kits, 
      students learned the fundamentals of electronics and programming by building their own interactive devices. 
      They assembled circuits from individual components, wrote code to control their boards, and created projects
       including sensor alarms, light and sound sensors, and musical keyboards capable of playing different notes. 
       Throughout the process, students collaborated closely, helping one another debug code, troubleshoot circuits,
        and refine their designs. By seeing their ideas come to life through technology they built themselves, 
        students strengthened their technical skills, problem-solving abilities, communication skills, and 
        confidence as young engineers.
      </div>
      <div className="about1">
        <div className="eyebrow">End of Course</div>
      Upon completing the course, students earned a personalized WWW.CODE certificate and celebrated their accomplishments with a fun end-of-course party. 
      They took home a summary of what they learned and a list of resources to continue exploring coding and engineering on their own. <br/><br/>
        <div className="learnmore"><a href="/projects" className="learnmorebtn">Learn more</a></div>
      </div>
    </main>
    
  )
}

export default About