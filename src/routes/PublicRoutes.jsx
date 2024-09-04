import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Index/Home'
import CategoryPage from '../pages/Category/CategoryPage'
import Details from '../pages/Product/Details'
import Register from '../pages/Auth/Register'
import Login from '../pages/Auth/Login'
import BMIcalc from '../pages/BMI Calculator/BMIcalc'
import NutritionCalc from '../pages/Nutrition Calculator/NutritionCalc';
import Products from '../pages/Products/Products';
import AddToCart from '../pages/Cart/AddToCart';
import AddToFavorites from '../pages/Favorites/AddToFavorites';

const PublicRoutes = () => {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/category/:id' element={<CategoryPage />}/>
                <Route path='/details/:id' element={<Details />}/>
                <Route path='/auth/register' element={<Register />}/>
                <Route path='/auth/login' element={<Login />}/>
                <Route path='/client/src/pages/BMI Calculator/BMIcalc' element={<BMIcalc />}/>
                <Route path='/client/src/pages/Nutrition Calculator/NutritionCalc' element={<NutritionCalc />}/>
                <Route path='/client/src/pages/Products/Products' element={<Products />}/>
                <Route path='/client/src/pages/Cart/AddToCart' element={<AddToCart />}/>
                <Route path='/client/src/pages/Favorites/AddToFavorites' element={<AddToFavorites />}/>

            </Routes>
        </Layout>
    </div>
  )
}

export default PublicRoutes