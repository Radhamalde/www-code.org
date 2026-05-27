import "./Home.css"
import arduinoboard from "../assets/arduinoboard.jpg"
function Home() {
  return (
    <main>
      <h1 className="h1">WWW.CODE</h1>
      <h2>West Willow Will: Coding for Change (University of Michigan)</h2>
      <div className="imgwrapper">
        <img src={arduinoboard} className="board" alt="Img" />
      </div>
      <div className = "imgdescription">
        A musical keyboard student's built using arduino. <br/> Students built and programmed the circuit <br/> using C++, to play a variety of different notes.
      </div>
    </main>
  )
}

export default Home