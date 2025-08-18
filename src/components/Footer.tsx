import React from 'react';
import { getImagePath } from '../utils/imagePath';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logos">
              <div className="logo-item">
                <img src={getImagePath('images/common/footer-logo_edu.svg')} alt="교육부 로고" />
              </div>
              <div className="logo-item">
                <img src={getImagePath('images/common/footer-logo_kice.svg')} alt="KICE 로고" />
              </div>
            </div>
            <div className="footer-info">
              <p><strong>학업성취도평가지원포털</strong> (27873) 충청북도 진천군 덕산읍 교학로 8 한국교육과정평가원</p>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="related-sites">
              <select className="related-sites-dropdown">
                <option value="">관련사이트 바로가기</option>
                <option value="moe">교육부</option>
                <option value="kice">한국교육과정평가원</option>
                <option value="neis">나이스</option>
                <option value="edunet">에듀넷</option>
              </select>
            </div>
          </div>
        </div>
            <div className="copyright">
              <p>&copy; 2025 by KICE. All rights reserved.</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
