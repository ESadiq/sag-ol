import React, { useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom'
import services from '../../api/api'
import { useTranslation } from 'react-i18next'

const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const { t, i18n } = useTranslation();

    const userHandler = async () => {
        await services.authAPI.registerUser(user)
        navigate('/auth/login')
    }
  return (
        <div className="register-form col-lg-4 pt-5 mx-auto">
            <div className='mb-4'>
                <label htmlFor="username">{t('Username')}</label>
                <input onChange={(e) => setUser({...user, fullname: e.target.value})} type="text" className='form-control' id='username'/>
            </div>
            <div className='mb-4'>
                <label htmlFor="email">{t('Email')}</label>
                <input onChange={(e) => setUser({...user, email: e.target.value})} type="email" className='form-control' id='email' />
            </div>
            <div className='mb-4'>
                <label htmlFor="password">{t('Password')}</label>
                <input onChange={(e) => setUser({...user, password: e.target.value})} type="password" className='form-control' id='password' />
            </div>
            <div className='mb-4'>
                <button onClick={userHandler} className='btn btn-success w-100'>{t('Sign_up')}</button>
            </div>
            <div className='pb-4'>
                <Link to='/auth/login'>{t('have_account')}</Link>
            </div>
        </div>
  )
}

export default Register