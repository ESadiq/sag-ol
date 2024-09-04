import React, { useState } from 'react';
import './BMIcalc.css';
import { useTranslation } from 'react-i18next'

function BMIcalc() {
  const { t, i18n } = useTranslation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height && age && gender) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage(t('Underweight')); 
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage(t('Normal_weight'));
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage(t('Overweight'));
      } else {
        setMessage(t('Obesity'));
      }
    } else {
      setMessage(t('enter_all_fields'));
    }
  };

  return (
    <div className="bmi-calc">
      <h1>{t('BMI_Calculator')}</h1>
      <div className="input-group">
        <label>{t('Weight')}:</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>{t('Height')}:</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>{t('Age')}:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>{t('Gender')}:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">{t('select_gender')}</option>
          <option value="male">{t('Male')}</option>
          <option value="female">{t('Female')}</option>
        </select>
      </div>
      <button onClick={calculateBMI}>{t('Calculate_BMI')}</button>
      {bmi && (
        <div className="result">
          <h2>{t('Your_BMI')}: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default BMIcalc;

