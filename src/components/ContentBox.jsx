import Person from '../pictures/Person.png';
import Box from '../pictures/Box.png';
import { useNavigate } from "react-router-dom"
import useSound from 'use-sound'; 
import OpenBox from '../sound/win.mp3'

const ContentBox = () => {
  let navigate = useNavigate();
  const arr = ['н', 'о', 'в',
               'ы', 'й','г',
               'о', 'д', '!']

  const [playSoundhitHeroes] = useSound(OpenBox);
  const click = () => {
    const arr1 = [];
    for (let index = 0; index < arr.length; index++) {
      arr1.push(document.getElementById(index+1)?.value)
    }
    if(JSON.stringify(arr) === JSON.stringify(arr1)){
      playSoundhitHeroes()
      navigate('/TheEnd')
      } else {
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] !== arr1[index].toLowerCase()){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = 'red'
          }
          if (arr[index] === arr1[index].toLowerCase()){
          const elements = document.querySelectorAll('.boxForNumber')
          elements[index].style.background = '#00fa2e'
          }
        }
        console.log(false)
      }
  }

   return (
  <main>
  <div className="header">
    <div className="TextOfDoctor">
      <p className="ConnentOfDoctor">Вау, вы решили все задачи, настало время открыть сундук и узнать где спрятаны подарки!</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
  </div>
  <div className="imgBox">
    <p className='textBox'>Нажми на меня!</p>
    <img onClick={click} className="box" src={Box} alt="Box"/>
  </div>
  
<div className='wrapBox'>
    <div>
      <p className='textForNumber'>1</p>
      <input id='1' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>2</p>
      <input id='2' className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>3</p>
      <input id='3'className='boxForNumber'></input>
    </div>
  </div>
<div className='wrapBox'>
    <div>
      <p className='textForNumber'>4</p>
      <input id='4'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>5</p>
      <input id='5'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>6</p>
      <input id='6'className='boxForNumber'></input>
    </div>
</div>
<div className='wrapBox'> 
    <div>
      <p className='textForNumber'>7</p>
      <input id='7'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>8</p>
      <input id='8'className='boxForNumber'></input>
    </div>
    <div>
      <p className='textForNumber'>9</p>
      <input id='9'className='boxForNumber'></input>
    </div>
  </div>
  </main>
  )
  
}

export default ContentBox