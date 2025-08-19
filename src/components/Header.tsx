import React from 'react';
import Link from 'next/link';
import { getImagePath } from '../utils/imagePath';
import './Header.css';

const Header: React.FC = () => {
  
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Link href="/"><h1><img src={getImagePath('images/common/inaea_top_logo.svg')} alt="Inaea" /></h1></Link>
        </div>
        <nav className="navigation">
          <ul className="nav-gnb">
            <li><Link href="/">평가소개</Link></li>
            <li><Link href="/">체험하기</Link></li>
            <li><Link href="/infocenter">정보마당</Link></li>
            <li><Link href="/notice">소통하기</Link></li>
            <li><Link href="/notification">마이페이지</Link></li>
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
              <a href="#"><img src={getImagePath('images/icons/icon_header_alram.svg')} alt="알림" /><em>1</em></a>
            </li>
            <li>
              <a href="#"><img src={getImagePath('images/icons/icon_header_ham.svg')} alt="알림" /></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
