import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__left">
            <h3>Зарабатывайте больше</h3>
            <h1>с WELBEX</h1>
            <p>Развиваем и контролируем продажи за вас</p>
          </div>

          <div className="about__right">
            <div className="about__right-top">
              <h3>
                Вместе с  <span>бесплатной консультацией</span> мы дарим:
              </h3>
            </div>

            <div className="about__right-center">
              <div className="about__right-solution">
                <h4>Виджеты</h4>
                <p>30 готовых решений</p>
              </div>
              <div className="about__right-solution">
                <h4>Dashboard</h4>
                <p>с показателями вашего бизнеса</p>
              </div>
            </div>

            <div className="about__right-bottom">
              <div className="about__right-solution">
                <h4>Skype Аудит</h4>
                <p>отдела продаж и CRM системы</p>
              </div>
              <div className="about__right-solution">
                <h4>35 дней</h4>
                <p>использования CRM</p>
              </div>
            </div>

            <div className="about__mobile">
              <div>
                <svg
                  width="10"
                  height="1"
                  viewBox="0 0 10 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.5"
                    x2="10"
                    y2="0.5"
                    stroke="url(#paint0_linear_0_99)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_99"
                      x1="-5.02155e-08"
                      y1="1.52942"
                      x2="10"
                      y2="1.52942"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.369906" stopColor="#FCB045" />
                      <stop offset="1" stopColor="#FD1D1D" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Skype аудит</p>
              </div>

              <div>
                <svg
                  width="10"
                  height="1"
                  viewBox="0 0 10 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.5"
                    x2="10"
                    y2="0.5"
                    stroke="url(#paint0_linear_0_99)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_99"
                      x1="-5.02155e-08"
                      y1="1.52942"
                      x2="10"
                      y2="1.52942"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.369906" stopColor="#FCB045" />
                      <stop offset="1" stopColor="#FD1D1D" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>30 виджетов</p>
              </div>

              <div>
                <svg
                  width="10"
                  height="1"
                  viewBox="0 0 10 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.5"
                    x2="10"
                    y2="0.5"
                    stroke="url(#paint0_linear_0_99)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_99"
                      x1="-5.02155e-08"
                      y1="1.52942"
                      x2="10"
                      y2="1.52942"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.369906" stopColor="#FCB045" />
                      <stop offset="1" stopColor="#FD1D1D" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Dashboard</p>
              </div>

              <div>
                <svg
                  width="10"
                  height="1"
                  viewBox="0 0 10 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.5"
                    x2="10"
                    y2="0.5"
                    stroke="url(#paint0_linear_0_99)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_99"
                      x1="-5.02155e-08"
                      y1="1.52942"
                      x2="10"
                      y2="1.52942"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.369906" stopColor="#FCB045" />
                      <stop offset="1" stopColor="#FD1D1D" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Месяц аmoCRM</p>
              </div>
            </div>

            <button className="about__right-btn">Получить консультацию</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
