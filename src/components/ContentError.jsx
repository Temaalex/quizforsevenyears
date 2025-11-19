import data from '../bd.json';
import Person from '../pictures/Person.png';

const Error = () => {
  let text = data.contents[0].error_text_Doctor;
  return (
    <main>
      <div className="header">
      <div className="TextOfDoctor">
        <p className="ConnentOfDoctor" key='1'>{text}</p>
      </div>
      <img className="Person" src={Person} alt="Person"/>
    </div>
      <div className='words'></div>
    </main>
  )
  
}

export default Error