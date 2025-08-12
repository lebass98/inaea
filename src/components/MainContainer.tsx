import React from 'react';
import './MainContainer.css';

const MainContainer: React.FC = () => {
  return (
    <main className="main-container">
      <div className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>환영합니다!</h2>
            <p>Inaea에서 새로운 경험을 시작하세요</p>
            <button className="cta-button">시작하기</button>
          </div>
        </section>
        
        <section className="features-section">
          <h3>주요 기능</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>빠른 성능</h4>
              <p>최적화된 코드로 빠른 사용자 경험을 제공합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4>아름다운 디자인</h4>
              <p>모던하고 직관적인 사용자 인터페이스</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>안전한 보안</h4>
              <p>최신 보안 기술로 데이터를 보호합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContainer;
