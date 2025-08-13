import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate('/notice');
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <a href="/"><h1><img src="/src/images/common/inaea_top_logo.svg" alt="Inaea" /></h1></a>
        </div>
        <nav className="navigation">
          <ul className="nav-gnb">
            <li><a href="#home">평가소개</a></li>
            <li><a href="#about">체험하기</a></li>
            <li><a href="#services" onClick={handleInfoClick}>정보마당</a></li>
            <li><a href="#contact">소통하기</a></li>
            <li><a href="#contact">마이페이지</a></li>
          </ul>
        </nav>
        <div className="nav-util">
          <ul className="nav-user-list">
            <li>
              <a href="#" className="nav-user-name">강부모님</a>
            </li>
            <li>
              <select name="" id="">
                <option value="">학부모</option>
                <option value="">학생</option>
                <option value="">교사</option>
              </select>
            </li>
            <li>
              <span className="util-line">|</span>
            </li>
            <li>
              <div className="user-log-wrap">
                <a href="#">로그아웃</a>
              </div>
            </li>
          </ul>
          <ul className="nav-util-list">
            <li className="util-alarm-wrap">
              <a href="#"><img src="/src/images/icons/icon_header_alram.svg" alt="알림" /><em>1</em></a>
            </li>
            <li>
              <a href="#"><img src="/src/images/icons/icon_header_ham.svg" alt="알림" /></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
