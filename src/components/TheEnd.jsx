import data from '../bd.json';
import Person from '../pictures/Person.png';
import { useLocation } from "react-router-dom"

const TheEnd = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" >{data.contents[37].textDoctor}</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    </main>
  )
  
}

export default TheEnd