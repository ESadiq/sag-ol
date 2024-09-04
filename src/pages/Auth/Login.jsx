import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import services from '../../api/api'
import { useTranslation } from 'react-i18next'

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { t, i18n } = useTranslation();

    const userHandler = () => {
        services.authAPI.loginUser(user)
        navigate('/')
    }

  return (
    <div className="register-form col-lg-4 mx-auto">
        <div className='pt-4 mb-4'>
            <label htmlFor="email">{t('Email')}</label>
            <input onChange={(e) => setUser({...user, email: e.target.value.trim()})} type="email" className='form-control' id='email' />
        </div>
        <div className='mb-4'>
            <label htmlFor="password">{t('Password')}</label>
            <input onChange={(e) => setUser({...user, password: e.target.value.trim()})} type="password" className='form-control' id='password' />
        </div>
        <div className='mb-4'>
            <button onClick={userHandler} className='btn btn-success w-100'>{t('Login')}</button>
        </div>
        <div className='pb-4'>
            <Link to='/auth/register'>{t('dont_have_account')}</Link>
        </div>
    </div>
  )
}

export default Login