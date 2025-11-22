import Person from '../pictures/Person.png';



const TheEnd = () => {
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor">Вы справились! 100% послушные дети! Подарки спрятаны в прихожей.</p>
      </div>
      <img className="Person"src={Person}alt="Person"/>
    </div>
    </main>
  )
  
}

export default TheEnd