import Person from '../pictures/Person.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import img9 from '../pictures/triengl.png';
import img10 from '../pictures/square.png';
import img11 from '../pictures/boxes.png';
import img13 from '../pictures/pictureNumberOne.png';
import img14 from '../pictures/pictureNumberTwo.png';
import img15 from '../pictures/pictureNumberThree.png';

const QuizTest = () => {
const location = useLocation()  
let [key, setKey] = useState(Number(location.pathname.slice(1)));
let navigate = useNavigate();

function getEnd(){
    if("answer" in data.contents[key+1] === false){
      document.querySelector(".buttons__content").remove()
      document.querySelector(".ConnentOfDoctor").innerHTML=data.contents[key+1].textDoctor
    }else{
      setKey(key + 1)
    }
}

const checked_1 = () => {
  if(data.contents[key].answer.answer_1[1] === true){ 
    getEnd()
   }else{
     navigate('/0')
   }
}
const checked_2 = () => {
  if(data.contents[key].answer.answer_2[1] === true) {
    getEnd() 
   }else{
     navigate('/0')
   }
}
const checked_3 = () => {
   if(data.contents[key].answer.answer_3[1] === true) {
     getEnd()
    }else{
     navigate('/0')
    }
}
const checked_4 = () => {
  if(data.contents[key].answer.answer_4[1] === true) {
     getEnd()
    }else{
     navigate('/0')
    }
  }
function img(){
  if(key===9){
    return <img className="imgs2425" src={img9} alt="Doctor"/>
  } else if(key===10){
     return<img className="imgs2425" src={img10} alt="Doctor"/>
  } else if(key===11){
    return<img className="imgs2425" src={img11} alt="Doctor"/>
  } else if(key===13){
    return<img className="imgs2425" src={img13} alt="Doctor"/>
  } else if(key===14){
    return<img className="imgs2425" src={img14} alt="Doctor"/>
  } else if(key===15){
    return<img className="imgs2425" src={img15} alt="Doctor"/>
  }
}

  return (
  <div className="App">
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">{data.contents[key].textDoctor}</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
  </div>
      
      <div className='buttons__content'> 
        {img()}
        <button onClick={checked_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
        <button onClick={checked_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
        <button onClick={checked_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
        <button onClick={checked_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
      </div>
  </main>
  </div>
  )
}
export default QuizTest