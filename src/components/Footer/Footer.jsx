import React from "react";
import "./footer.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__company">
              <span className="footer__nav">О компании</span>
              <a href="#">Партнёрская программа</a>
              <a href="#">Вакансии</a>
            </div>

            <div className="footer__nav">
              <div>
                <span className="footer__nav">Меню</span>
                <a href="#">Расчёт стоимости</a>
                <a href="#">Услуги</a>
                <a href="#">Виджеты</a>
                <a href="#">Интеграции</a>
                <a href="#">Наши клиенты</a>
              </div>

              <div>
                <a href="#">Кейсы</a>
                <a href="#">Благодарственные письма</a>
                <a href="#">Сертификаты</a>
                <a href="#">Блог на Youtube</a>
                <a href="#">Вопрос / Ответ</a>
              </div>
            </div>
          </div>

          <div className="footer__right">
            <span className="footer__nav">Контакты</span>

            <a href="tel:+75555555555">+7 555 555-55-55</a>

            <div className="footer__links">
              <a href="#">
                <FaTelegramPlane className="header__right-icon" />
              </a>
              <a href="#">
                <BiPhoneCall className="header__right-icon" />
              </a>
              <a href="#">
                <BsWhatsapp className="header__right-icon" />
              </a>
            </div>

            <p className="footer__address">Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </div>

        <div className="footer__copyright">
          <p>©WELBEX 2023. Все права защищены.</p>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
