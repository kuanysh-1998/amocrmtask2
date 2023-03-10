import React from "react";
import "./header.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div className="header__logo">
              <svg
                width="35"
                height="24"
                viewBox="0 0 35 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.5946 0H0V12.7841H1.3208V1.28886H23.2738V5.52746H21.0842V5.53671H21.0684C21.0096 5.65146 20.8861 5.90965 20.698 6.31127C20.5098 6.7129 20.2776 7.20058 20.0012 7.77434C19.7249 8.34809 19.4162 8.98207 19.0752 9.67634C18.7342 10.3706 18.3901 11.0734 18.0433 11.7848C17.6964 12.4963 17.3524 13.1876 17.0114 13.859C16.6704 14.5302 16.3647 15.1241 16.0941 15.6404L10.7143 5.53671H9.09151L16.0941 18.446L22.1009 6.7853H24.5927V6.77176H24.5946V0ZM0 17.1961H0.00609518V17.1819H8.47042L2.42401 5.53671H4.0997L9.84995 17.0175L9.1268 18.446L9.1157 18.4247V18.4398H1.3208V22.7111H23.2738V11.1838H24.5946V24H0V17.1961ZM33.6949 24V0H35.0517V24H33.6949Z"
                  fill="#E4E5EA"
                />
              </svg>
              <svg
                width="97"
                height="15"
                viewBox="0 0 97 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.00185 0L8.28906 12.5571L7.49834 14.1196L0.169678 0H2.00185ZM22.3871 0L15.1163 14.1196L7.45977 0H9.23407L15.1163 11.051C15.412 10.4861 15.7463 9.83672 16.1191 9.10245C16.492 8.36823 16.8681 7.61205 17.2474 6.8339C17.6267 6.05574 18.0028 5.28701 18.3756 4.52769C18.7484 3.76837 19.086 3.07494 19.3881 2.4474C19.6903 1.81986 19.9442 1.28646 20.1499 0.847178C20.3556 0.407898 20.4906 0.125509 20.5549 0H22.3871ZM36.2619 1.37431V0H26.9275V14.1384H36.2619V12.7642H28.3547V7.7752H34.9505V6.40089H28.3547V1.37431H36.2619ZM40.4167 14.1384V0H41.8438V12.7642H49.7511V14.1384H40.4167ZM53.9058 0V14.1384H60.8294C60.9323 14.1384 61.1606 14.1039 61.5141 14.0349C61.8677 13.9658 62.2502 13.8121 62.6617 13.5737C62.8545 13.4607 63.057 13.3132 63.2691 13.1313C63.4813 12.9492 63.671 12.7265 63.8381 12.4629C64.0053 12.1993 64.1435 11.8887 64.2528 11.5311C64.362 11.1733 64.4167 10.756 64.4167 10.2791C64.4167 9.73941 64.3459 9.26874 64.2045 8.86712C64.0631 8.46549 63.8831 8.12035 63.6645 7.83169C63.4459 7.54301 63.1984 7.31082 62.922 7.13512C62.6455 6.9594 62.366 6.82134 62.083 6.72094C62.366 6.44483 62.6102 6.06517 62.8159 5.58196C63.0216 5.09875 63.1245 4.51828 63.1245 3.84053C63.1245 3.3385 63.0698 2.90551 62.9605 2.54153C62.8513 2.17756 62.713 1.86379 62.5459 1.60023C62.3787 1.33666 62.1923 1.11702 61.9866 0.941306C61.7809 0.765596 61.5816 0.621263 61.3888 0.508306C61.1702 0.382798 60.9613 0.285531 60.762 0.216501C60.5627 0.147472 60.3827 0.0972684 60.222 0.0658915C60.0612 0.0345144 59.9294 0.0156885 59.8266 0.00941306C59.7237 0.00313766 59.6659 0 59.653 0H53.9058ZM60.7909 12.7642C60.8423 12.7642 60.9838 12.7422 61.2152 12.6982C61.4466 12.6543 61.6942 12.5508 61.9577 12.3877C62.2212 12.2244 62.4559 11.9766 62.6617 11.6439C62.8674 11.3114 62.9702 10.8564 62.9702 10.2791C62.9702 9.70172 62.8674 9.24679 62.6617 8.91419C62.4559 8.58159 62.2212 8.33058 61.9577 8.16114C61.6942 7.9917 61.4434 7.88502 61.2055 7.8411C60.9677 7.79717 60.8231 7.7752 60.7716 7.7752H55.333V12.7642H60.7909ZM60.0676 6.32559C59.8427 6.3758 59.7044 6.40089 59.653 6.40089H55.333V1.37431H59.653C59.6788 1.37431 59.8008 1.39313 60.0194 1.43078C60.238 1.46844 60.4759 1.56571 60.733 1.72259C60.9902 1.87948 61.2248 2.12422 61.437 2.45681C61.6491 2.78941 61.7552 3.25065 61.7552 3.84053C61.7552 4.41788 61.6556 4.87597 61.4563 5.21484C61.257 5.55372 61.032 5.81101 60.7812 5.98672C60.5306 6.16243 60.2927 6.27539 60.0676 6.32559ZM78.6386 0V1.37431H70.7314V6.40089H77.3272V7.7752H70.7314V12.7642H78.6386V14.1384H69.3042V0H78.6386ZM89.3313 8.11407L94.1529 14.1384H96.0433L90.4307 7.05981L96.0433 0H94.1529L89.3313 6.02438L84.7799 0H82.6392L88.2513 7.05981L82.6392 14.1384H84.7799L89.3313 8.11407Z"
                  fill="#E4E5EA"
                />
              </svg>
            </div>

            <div className="header__menu">
              <a href="#">Услуги</a>
              <a href="#">Виджеты</a>
              <a href="#">Интеграции</a>
              <a href="#">Кейсы</a>
              <a href="#">Сертификаты</a>
            </div>
          </div>

          <div className="header__right">
            <div className="header__right-phone">
              <a href="tel:+75555555555">+7 555 555-55-55</a>
            </div>

            <div className="header__right-links">
              
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
          </div>
        </div>
        <div className="header__title">
          <p>
            крупный интегратор CRM <br /> в Росcии и ещё 8 странах
          </p>
        </div>

        <svg
          className="header__circle"
          width="117"
          height="117"
          viewBox="0 0 117 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_bd_0_13)">
            <circle
              cx="55.5"
              cy="52.5"
              r="41.5"
              fill="url(#paint0_radial_0_13)"
              fillOpacity="0.8"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_0_13"
              x="0"
              y="0"
              width="117"
              height="117"
              filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_13"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="10"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_0_13"
              />
              <feOffset dx="3" dy="6" />
              <feGaussianBlur stdDeviation="13.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_0_13"
                result="effect2_dropShadow_0_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_13"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_13"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(36.6175 32.995) rotate(51.0412) scale(68.3129)"
            >
              <stop stopColor="#FFD0D0" stopOpacity="0.67" />
              <stop
                offset="0.596678"
                stopColor="#D45D5D"
                stopOpacity="0.33"
              />
              <stop
                offset="0.785899"
                stopColor="#A73131"
                stopOpacity="0.31"
              />
              <stop offset="1" stopColor="#821919" stopOpacity="0.31" />
            </radialGradient>
          </defs>
        </svg>


      </div>
    </div>
  );
};

export default Header;
