import { useState, useRef, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.css'
import { validateCity } from './functionsForApp.js'
import { Clock } from '../Clock/Clock.jsx'
let elem = [];


function App() {

  const cityName = useRef(null);
  const timtOffset = useRef(null);
  const [newElem, setElem] = useState(0);
  

  function onButtonClick(e) {
    e.preventDefault();
    let city = cityName.current.value;

    if (validateCity (city) ){
      /* console.log(city); */
      cityName.current.value='';
    } else {
      cityName.current.value='';
      alert('Не верный формат ввода');
      return
    }
    elem.push(<Clock key={uniqid()} cityName={city}  Offset={timtOffset.current.value == '' ? "0" : timtOffset.current.value } onClick={ e => {closeClock(e)}}/>);
    timtOffset.current.value='';
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
          <input className="app-box__form__elem__input" type="text" id ="cityName" ref={ cityName }/>
        </div>
        <div className="app-box__form__elem">
          <label htmlFor="way" className="app-box__form__elem__label">Временная зона</label>
          <br/>
          <input className="app-box__form__elem__input" type="text" id ="way" ref={ timtOffset }/>
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
