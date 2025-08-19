'use client';

import React from 'react';
import { MainContainer, MainContainerProps } from '@/components/layout';

const HomePage: React.FC = () => {
  const mainContainerProps: MainContainerProps = {
    hero: {
      title: 'Inaea에 오신 것을 환영합니다!',
      subtitle: '교육 평가의 새로운 패러다임을 경험해보세요',
      ctaText: '지금 시작하기',
      ctaAction: () => {
        console.log('Hero CTA clicked');
        // 여기에 실제 액션 추가
      }
    },
    features: [
      {
        id: 'performance',
        icon: '🚀',
        title: '빠른 성능',
        description: '최적화된 코드로 빠른 사용자 경험을 제공합니다.',
        onClick: () => console.log('Performance feature clicked')
      },
      {
        id: 'design',
        icon: '🎨',
        title: '아름다운 디자인',
        description: '모던하고 직관적인 사용자 인터페이스',
        onClick: () => console.log('Design feature clicked')
      },
      {
        id: 'security',
        icon: '🔒',
        title: '안전한 보안',
        description: '최신 보안 기술로 데이터를 보호합니다.',
        onClick: () => console.log('Security feature clicked')
      },
      {
        id: 'accessibility',
        icon: '♿',
        title: '접근성',
        description: '모든 사용자를 위한 포용적인 디자인',
        onClick: () => console.log('Accessibility feature clicked')
      }
    ],
    showFeatures: true
  };

  return <MainContainer {...mainContainerProps} />;
};

export default HomePage;
