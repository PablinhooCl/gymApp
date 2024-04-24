import React, { useState } from 'react';
import fIcon from '../assets/female.webp';
import mIcon from '../assets/male.webp';
import '../output.css';

function CalculadorCalorias() {
  const [formData, setFormData] = useState({
    kg: '',
    cm: '',
    years: '',
  });

  const [sexo, setSexo] = useState('m');

  const tmbM = 88.362 + (13.397 * formData.kg) + (4.799 * formData.cm) - (5.677 * formData.years);
  const tmbF = 447.593 + (9.247 * formData.kg) + (3.098 * formData.cm) - (4.330 * formData.years);

  const tmbShow = (kcal) => {
    if (sexo === 'm') {
      return Math.floor(tmbM) + kcal;
    }
    return Math.floor(tmbF) + kcal;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButton = (gender) => {
    setSexo(gender);
  };

  const SexButton = (
    <div className="flex flex-row">
      <div className="size-6"><button src={mIcon} onClick={() => handleButton('m')} type="button" aria-label="Male" /></div>
      <div className="size-6"><button src={fIcon} onClick={() => handleButton('f')} type="button" aria-label="Female" /></div>
    </div>
  );

  const InputCal = (
    <div className="flex flex-col">
      <label className="font-bold m-4">Weight(kg)</label>
      <input className="appearance-none hover:appearance-none w-16" type="number" name="kg" max={500} placeholder="Weight(kg)" onChange={handleChange} value={formData.kg} />
      <label className="font-bold">Heigt(cm)</label>
      <input className="appareance-none" type="number" name="cm" max={300} placeholder="Heigt(cm)" onChange={handleChange} value={formData.cm} />
      <label className="font-bold">Age(years)</label>
      <input className="appareance-none" type="number" name="years" max={100} placeholder="Age(years)" onChange={handleChange} value={formData.years} />
    </div>
  );

  return (
    <div className="flex flex-col">
      {SexButton}
      <div className="flex flex-row">
        {InputCal}
        <div className="">
          <p className="font-bold">Superavit fuerte</p>
          {tmbShow(500)}
          <p className="font-bold">Superavit suave</p>
          {tmbShow(300)}
          <p className="font-bold">Mantencion</p>
          {tmbShow(0)}
          <p className="font-bold">Deficit suave</p>
          {tmbShow(-300)}
          <p className="font-bold">Deficit fuerte</p>
          {tmbShow(-500)}
        </div>
      </div>
    </div>
  );
}

export default CalculadorCalorias;
