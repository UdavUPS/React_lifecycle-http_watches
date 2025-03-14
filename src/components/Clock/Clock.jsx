import './Clock.css'
import React, { useState, useEffect } from 'react';
const delSimbol = (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
  <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
  </svg>);

/**
 * Компонент для отображения часов.
 * 
 * @param {stryng} cityName принимант название города в формате: Город
 * @param {stryng} Offset чесовое смещение без знака +
 */

export function Clock ({cityName, Offset='0', onClick}) {
  
  const timtOffset = -(new Date().getTimezoneOffset() / 60);
  const [time, setTime] = useState(new Date());


  // Обновляем время каждую секунду
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      /* console.log('сек'); */
    }, 1000);

    return () => {
      clearInterval(intervalId); // Очищаем интервал при размонтаже компонента
      /* console.log('таймер остановлен!'); */
    }
  }, []);

  function doClose(e) {
    onClick(e);
  }

  // Вычисление углов для каждой стрелки
  const secondHandAngle = time.getSeconds() * 6; // Углы для секундной стрелки
  const minuteHandAngle = time.getMinutes() * 6; // Углы для минутной стрелки
  const hourHandAngle = ((time.getHours() - timtOffset + parseInt(Offset)) % 12) * 30; // Углы для часовой стрелки

  return (
    <div className="clock-box">
        <p className="city-name">{cityName}</p><p className="delSim" onClick={doClose}>{delSimbol}</p>
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${hourHandAngle}deg)` }} />
      <div className="minute-hand" style={{ transform: `rotate(${minuteHandAngle}deg)` }} />
      <div className="second-hand" style={{ transform: `rotate(${secondHandAngle}deg)` }} />
    </div>
    </div>
  );
};

/*  default Clock; */