import './App.css';
import Jar from './Jar';
import Buttons from './Buttons';
import { useState } from 'react';

function App() {
  const [waterLevel, setWaterLevel] = useState(
    +localStorage.getItem('waterLevel') || 0,
  );

  const waterMotorFunc = (isFill) => {
    let newValue;
    newValue = isFill ? waterLevel + 5 : waterLevel - 5;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    localStorage.setItem('waterLevel', newValue);

    setWaterLevel(newValue);
    return;
  };

  return (
    <>
      <h1 className='text-4xl text-blue-500'>পানি দিয়ে জগ পূর্ণ করুন অথবা খালি করুন</h1>
      <Jar waterLevel={waterLevel} />
      <Buttons onWaterMotor={waterMotorFunc} />
    </>
  );
}

export default App;
