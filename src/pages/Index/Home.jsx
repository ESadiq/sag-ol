import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import services from "../../api/api";
import "./home.css";
import { CiDumbbell, CiGlobe } from "react-icons/ci";
import { BsBicycle } from "react-icons/bs";
import {
  FaAward,
  FaShoppingCart,
  FaHeart,
  FaPlus,
  FaExpand,
} from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    services.categoryAPI.getCategories(setCategories);
    services.productAPI.getProducts(setProducts);
  }, []);
  return (
    <div>
      <section id="Banner">
        <div className="slider">
          <img></img>
          <div className="center-text">
          <h2>{t('For_life')}</h2>
          <h6>{t('Secure_health')}</h6>
          <button>{t('Start_now')}</button>
          </div>
        </div>
      </section>
      <section className="section-products" id="Products">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h3>{t('featured_products')}</h3>{t('')}
                <h2>{t('popular_products')}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('zulu_swift')}</h3>
                  <h4 class="product-old-price">$17.88</h4>
                  <h4 class="product-price">$14.00</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" class="single-product">
                <div class="part-1">
                  <span class="discount">15% off</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('atletic_mat')}</h3>
                  <h4 class="product-price">$17.97</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('proform_carbon')}</h3>
                  <h4 class="product-old-price">$598.00 </h4>
                  <h4 class="product-price">$490.00</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('loop_band_kit')}</h3>
                  <h4 class="product-price">$10.98</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-5" class="single-product">
                <div class="part-1">
                  <span class="discount">10% off</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('everlast_hand_wraps')}</h3>
                  <h4 class="product-old-price">$18.14</h4>
                  <h4 class="product-price">$16.57</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-6" class="single-product">
                <div class="part-1">
                  <span class="new">new</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('15lb_dumbbell')}</h3>
                  <h4 class="product-price">$22.97</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-7" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('8kg_kettlebell')}</h3>
                  <h4 class="product-old-price">$84.99</h4>
                  <h4 class="product-price">$75.99</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-8" class="single-product">
                <div class="part-1">
                  <span class="discount">20% off</span>
                  <ul>
                    <li>
                      <a href="#">
                        <FaShoppingCart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaHeart />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaPlus />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaExpand />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{t('everlast_jump_rope')}</h3>
                  <h4 class="product-price">$9.24</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container px-3 py-5">
          <h2 class="pb-2 border-bottom">{t('Features')}</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-5 py-5">
            <div class="col d-flex align-items-center">
              <CiDumbbell />
              <div>
                <h4 class="fw-bold mb-0">{t('best_tarining')}</h4>
              </div>
            </div>
            <div class="col d-flex align-items-center">
              <PiStudentFill />
              <div>
                <h4 class="fw-bold mb-0">{t('qual_instructors')}</h4>
              </div>
            </div>
            <div class="col d-flex align-items-center">
              <BsBicycle />
              <div>
                <h4 class="fw-bold mb-0">{t('lastest_equip')}</h4>
              </div>
            </div>
            <div class="col d-flex align-items-center">
              <FaAward />
              <div>
                <h4 class="fw-bold mb-0">{t('award_winner')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        <div className="container px-3 py-5">
          <h2 class="pb-2 border-bottom">{t('pricing')}</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-5"></div>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">{t('free')}</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0<small class="text-muted fw-light">/{t('mo')}</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>{t('only_site_included')}</li>
                    <li>{t('calcs_usage')}</li>
                    <li>{t('email_support')}</li>
                    <li>{t('help_center_access')}</li>
                  </ul>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-warning"
                  >
                    {t('free_signup')}
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Standart</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $29<small class="text-muted fw-light">/{t('mo')}</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>{t('12_access')}</li>
                    <li>{t('site_opportunities')}</li>
                    <li>{t('priority_email_support')}</li>
                    <li>{t('help_center_access')}</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-warning">
                  {t('get_started')}
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="last-card card mb-4 rounded-3 shadow-sm border-warning">
                <div class="last-card-header card-header py-3 text-white bg-warning border-warning">
                  <h4 class="my-0 fw-normal">Premium</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $45<small class="text-muted fw-light">/{t('mo')}</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>{t('limitless_access')}</li>
                    <li>{t('free_swiming')}</li>
                    <li>{t('site_opportunities')}</li>
                    <li>{t('personal_trainer')}</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-warning">
                  {t('contact_us')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-form">
        <div className="container px-3 py-5">
          <h2 class="pb-2 border-bottom">{t('contacts')}</h2>
          <div className="d-flex justify-content-between">
            <div class="mb-3 col-6">
              <label for="exampleFormControlInput1" class="form-label pt-5">
              {t('email_address')}
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <label for="exampleFormControlTextarea1" class="form-label pt-3">
              {t('message')}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={t('type_your_text')}
              ></textarea>
              <button type="button" class="w-100 btn btn-lg btn-dark mt-4">
              {t('send')}
              </button>
            </div>
            <div class="mb-4 col-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.850555939055!2d49.82759667471683!3d40.390004657267504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d82b3b0c031%3A0xc11310c761bdb24!2sCity%20Point%20Baku!5e0!3m2!1saz!2saz!4v1722806803592!5m2!1saz!2saz"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
