import Person from '../pictures/Person.png';



const TheEnd = () => {
  console.log(window.location.href)
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