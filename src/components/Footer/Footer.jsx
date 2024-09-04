import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import logoF from "../img/white-logo-trp.png";
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="footer" className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <Link to="/">
              <img src={logoF} alt="logoF" />
            </Link>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                {t('opening_time')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                {t('Media')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                {t('Career')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                {t('Membership')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                {t('contact_us')}
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                {t('Home')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                {t('features')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                {t('pricing')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                {t('FAQs')}
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                {t('About')}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 offset-md-1 mb-3">
            <form>
              <h5>{t('subscribe_newsletter')}</h5>
              <p>{t('monthly_digest')}</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                {t('email_address')}
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder={t('email_address')}
                />
                <button className="btn btn-primary" type="button">
                {t('Subscribe')}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-3 my-0 border-top">
          <p>
            © 2024 &nbsp; Sağ ol! Fitness &#38; Health. &nbsp; All rights
            reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a class="link-body-emphasis" href="#">
                <FaXTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a class="link-body-emphasis" href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a class="link-body-emphasis" href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
