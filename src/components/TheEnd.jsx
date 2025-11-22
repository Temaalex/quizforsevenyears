import Person from '../pictures/Person.png';
import useSound from 'use-sound'; 
import OpenBox from '../sound/win.mp3'


const TheEnd = () => {
  const [playSound] = useSound(OpenBox);
  playSound()
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor">Вы справились! 100% послушные дети! Подарки спрятаны в прихоже.</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    </main>
  )
  
}

export default TheEnd