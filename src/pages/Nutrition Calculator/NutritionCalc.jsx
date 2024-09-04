import React, { useState } from "react";
import nutritionData from "./nutritionData.json";
import "./nutrition-calc.css";
import { useTranslation } from 'react-i18next';


const normalizeString = (str) => {
  return str
    .replace(/[_\s]+/g, " ")
    .trim()
    .toLowerCase();
};

const NutritionCalc = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);
  const { t, i18n } = useTranslation();

  const handleCalculate = () => {
   
    const cleanedFoodName = normalizeString(foodName);
    const foodKey = Object.keys(nutritionData).find(
      (key) => normalizeString(key) === cleanedFoodName
    ); 
    const food = nutritionData[foodKey]; 

    if (food) {
      const quantityInGrams = parseFloat(quantity);
      if (!isNaN(quantityInGrams) && quantityInGrams > 0) {
        const calories = (food.calories_per_100g * quantityInGrams) / 100;
        const protein = (food.protein_per_100g * quantityInGrams) / 100;
        const carbs = (food.carbs_per_100g * quantityInGrams) / 100;
        const fat = (food.fat_per_100g * quantityInGrams) / 100;

        setResult({
          name: food.name,
          calories: calories.toFixed(2),
          protein: protein.toFixed(2),
          carbs: carbs.toFixed(2),
          fat: fat.toFixed(2),
        });
      } else {
        setResult({ error: "Please enter a valid quantity." }); 
      }
    } else {
      setResult({ error: "Food name not found." }); 
    }
  };

  return (
    <div className="nutrition-calc">
      <h1>{t('Nutrition_Calculator')}</h1>
      <div className="input-group">
        <label htmlFor="foodName">{t('Food_Name')}:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder={t('Enter_Food_Name')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="quantity">{t('Quantity')}:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder={t('Enter_Quantity')}
        />
      </div>
      <button onClick={handleCalculate}>{t('Calculate')}</button>
      {result && (
        <div className="result">
          {result.error ? (
            <p>{result.error}</p> 
          ) : (
            <>
              <h2>{result.name}</h2>
              <p>{t('Calories')}: {result.calories} {t('kcal')}</p>
              <p>{t('Protein')}: {result.protein} {t('g')}</p>
              <p>{t('Carbohydrates')}: {result.carbs} {t('g')}</p>
              <p>{t('Fat')}: {result.fat} {t('g')}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NutritionCalc;
