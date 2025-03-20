import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.css'
import { validateCity } from './functionsForApp.js'
import { Clock } from '../Clock/Clock.jsx'
let elem = [];


function App() {


  const [cityName, setCityName] = useState('');
  const [timtOffset, setTimtOffset] = useState('');
  const [newElem, setElem] = useState(0);

  
  

  function onButtonClick(e) {
    e.preventDefault();
    let city = cityName;

    if (validateCity (city) ){
      setCityName('');
      
    } else {
      setCityName('');
      alert('Не верный формат ввода');
      return
    }
    elem.push(<Clock key={uniqid()} cityName={city}  Offset={timtOffset == '' ? "0" : timtOffset } onClick={ e => {closeClock(e)}}/>);
    setTimtOffset('');
    setElem(newElem + 1);
  }

  function closeClock(e) {
    let clock = e.target.parentElement.parentElement;
    if (clock.classList.contains('delSim')) {
      clock = clock.parentElement;
    }
    clock.remove();
  }


 
  return (
    <div className='app-box' >
      <form className="app-box__form" >
        <div className="app-box__form__elem">
          <label htmlFor="cityName" className="app-box__form__elem__label" >Название</label>
          <br/>
          <input className="app-box__form__elem__input" type="text" id ="cityName" value={cityName} onChange={(e) => {setCityName(e.target.value)}} /* ref={ cityName } *//>
        </div>
        <div className="app-box__form__elem">
          <label htmlFor="way" className="app-box__form__elem__label">Временная зона</label>
          <br/>
          <input className="app-box__form__elem__input" type="number" min="-12" max="12" id ="way" value={timtOffset} onChange={(e) => {setTimtOffset(e.target.value)}} /* ref={ timtOffset } *//>
        </div>
        <button className="app-box__form__but" onClick={onButtonClick} >Добавеить</button>
      </form>
      <div className="app-box__clocs" >
        { elem }
      </div>
    </div>
  )
}

export default App
