import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';
import image1 from '../../assets/cbum.webp';
import image2 from '../../assets/gym.webp';
import image3 from '../../assets/baki.webp';

import Login from '../login';

function LandingPage() {
  const navigate = useNavigate();
  const [onOff, setOnOff] = useState(false);

  const login = Login(onOff);

  const loginButton = () => {
    setOnOff(!onOff);
    console.log(onOff);
  };

  const handleSignUpButton = () => {
    navigate('/sign-up');
  };

  const header = (
    <div className="w-full flex flex-row justify-between box-border" style={{ backgroundColor: '#4787C7' }}>
      <p className="p-10 box-border text-2xl">Page s name</p>
      <div className="flex flex-col box-border">
        <div className="grid grid-cols-2 p-10 box-border gap-x-1">
          <button type="button" onClick={handleSignUpButton}>Sign Up</button>
          <button type="button" onClick={loginButton}>Login</button>
        </div>
      </div>
    </div>
  );

  const footer = (
    <div className="w-full flex flex-row justify-evenly box-border p-10">
      <div>
        <p>Redes Sociales</p>
        <div className="m-4 grid grid-rows-3 gap-3 box-border">
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Twitter x</p>
        </div>
      </div>
      <div className="m-4 grid grid-rows-3 gap-3 box-border box-border">
        <p>About</p>
        <p>Contact Us</p>
        <p>Our Team</p>
      </div>
    </div>
  );

  const main = (
    <div className="w-full grid grid-rows-6 box-border" style={{ backgroundColor: 'white' }}>
      <div className="w-full flex flex-col row-start-2 row-end-3 py-10 px-20 box-border" style={{ backgroundColor: '#4787C7' }}>
        <h1>About the app</h1>
        <p>Explain the app, and functionality</p>
      </div>
      <div className="flex flex-row box-border row-start-3 row-end-7 justify-around align-middle my-auto">
        <img src={image1} alt="Chris Bumstead" className="w-auto h-80" style={{ border: '8px solid #4787C7', borderRadius: '15px' }} />
        <img src={image2} alt="Gym" className="w-auto h-80" style={{ border: '8px solid #4787C7', borderRadius: '15px' }} />
        <img src={image3} alt="Baki" className="w-auto h-80" style={{ border: '8px solid #4787C7', borderRadius: '15px' }} />

      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen flex flex-col justify-between box-border" style={{ fontFamily: 'Truculenta, sans-serif', fontWeight: 'bolder' }}>
      {header}
      {main}
      <div className="box-border w-full flex flex-col self-end bg-black" style={{ color: 'white' }}>
        {footer}
      </div>
      <div className={`absolute w-screen h-screen flex justify-center items-center ${onOff ? 'shown' : 'hidden'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        {login}
      </div>

    </div>
  );
}

export default LandingPage;
