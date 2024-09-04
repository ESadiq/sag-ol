import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CiGlobe, CiHeart, CiShoppingCart } from "react-icons/ci";
import logo from "../img/white-logo-trp.png";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { t, i18n } = useTranslation();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setHeaderVisible(false);
    } else {
      // Scrolling up
      setHeaderVisible(true);
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);

    // Reset timeout on scroll
    clearTimeout(scrollTimeout);
    setScrollTimeout(setTimeout(() => {
      setHeaderVisible(true); // Show header after 10 seconds of inactivity
    }, 10000)); // 10000 milliseconds = 10 seconds
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollTop, scrollTimeout]);

  return (
    <header className={`header ${isHeaderVisible ? '' : 'header-hidden'}`}>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 left">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 right">
              <ul>
                <li>
                  <Link to="/client/src/pages/Products/Products">{t('products')}</Link>
                </li>
                <li>
                  <Link to="/client/src/pages/BMI Calculator/BMIcalc">{t('bmi_calc')}</Link>
                </li>
                <li>
                  <Link to="/client/src/pages/Nutrition Calculator/NutritionCalc">{t('nutrition_calc')}</Link>
                </li>
                <li>
                <Link to="/client/src/pages/Favorites/AddToFavorites"><a href=""><CiHeart /></a></Link> 
                </li>
                <li>
                <Link to="/client/src/pages/Cart/AddToCart"><a href=""><CiShoppingCart /></a></Link>  
                </li>
                <li>
                  <Link to="/auth/register" className="disc">
                    {t('login')}
                  </Link>
                </li>
                <li className="lang-globe">
                  <a href="#" onClick={handleDropdownToggle}>
                    <CiGlobe />
                  </a>
                  {isDropdownOpen && (
                    <div className="language-dropdown">
                      <button className="Az" onClick={() => handleLanguageChange('az')}>AZ</button>
                      <button className="En" onClick={() => handleLanguageChange('en')}>EN</button>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


