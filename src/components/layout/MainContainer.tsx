import React from 'react';
import { Button, Card } from '../common';
import './MainContainer.css';

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction?: () => void;
  backgroundImage?: string;
}

export interface MainContainerProps {
  hero?: HeroSection;
  features?: FeatureItem[];
  showFeatures?: boolean;
  className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  hero = {
    title: '환영합니다!',
    subtitle: 'Inaea에서 새로운 경험을 시작하세요',
    ctaText: '시작하기'
  },
  features = [
    {
      id: 'performance',
      icon: '🚀',
      title: '빠른 성능',
      description: '최적화된 코드로 빠른 사용자 경험을 제공합니다.'
    },
    {
      id: 'design',
      icon: '🎨',
      title: '아름다운 디자인',
      description: '모던하고 직관적인 사용자 인터페이스'
    },
    {
      id: 'security',
      icon: '🔒',
      title: '안전한 보안',
      description: '최신 보안 기술로 데이터를 보호합니다.'
    }
  ],
  showFeatures = true,
  className = ''
}) => {
  const handleHeroCTA = () => {
    hero.ctaAction?.();
  };

  const handleFeatureClick = (feature: FeatureItem) => {
    feature.onClick?.();
  };

  const baseClass = 'main-container';
  const containerClasses = [baseClass, className].filter(Boolean).join(' ');

  return (
    <main className={containerClasses}>
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div 
            className="hero-background"
            style={hero.backgroundImage ? { backgroundImage: `url(${hero.backgroundImage})` } : {}}
          />
          <div className="hero-content">
            <h2 className="hero-title">{hero.title}</h2>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleHeroCTA}
              className="hero-cta"
            >
              {hero.ctaText}
            </Button>
          </div>
        </section>
        
        {/* Features Section */}
        {showFeatures && features.length > 0 && (
          <section className="features-section">
            <div className="features-header">
              <h3 className="features-title">주요 기능</h3>
            </div>
            <div className="features-grid">
              {features.map((feature) => (
                <Card 
                  key={feature.id}
                  variant="elevated"
                  size="md"
                  padding="lg"
                  hoverable
                  onClick={() => handleFeatureClick(feature)}
                  className="feature-card"
                >
                  <div className="feature-content">
                    <div className="feature-icon">{feature.icon}</div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default MainContainer;
