'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/layout';
import { Button, Card, Input } from '@/components/common';
import './components-demo.css';

const ComponentsDemoPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const handleButtonClick = (action: string) => {
    console.log(`${action} button clicked`);
    alert(`${action} 버튼이 클릭되었습니다!`);
  };

  return (
    <PageLayout>
      <div className="components-demo">
        <h1 className="demo-title">컴포넌트 데모</h1>
        
        {/* Button Section */}
        <section className="demo-section">
          <h2 className="section-title">Button 컴포넌트</h2>
          <div className="demo-grid">
            <Button variant="primary" onClick={() => handleButtonClick('Primary')}>
              Primary Button
            </Button>
            <Button variant="secondary" onClick={() => handleButtonClick('Secondary')}>
              Secondary Button
            </Button>
            <Button variant="outline" onClick={() => handleButtonClick('Outline')}>
              Outline Button
            </Button>
            <Button variant="ghost" onClick={() => handleButtonClick('Ghost')}>
              Ghost Button
            </Button>
          </div>
          
          <div className="demo-grid">
            <Button size="sm" onClick={() => handleButtonClick('Small')}>
              Small Button
            </Button>
            <Button size="md" onClick={() => handleButtonClick('Medium')}>
              Medium Button
            </Button>
            <Button size="lg" onClick={() => handleButtonClick('Large')}>
              Large Button
            </Button>
          </div>

          <div className="demo-grid">
            <Button disabled onClick={() => handleButtonClick('Disabled')}>
              Disabled Button
            </Button>
            <Button fullWidth onClick={() => handleButtonClick('Full Width')}>
              Full Width Button
            </Button>
          </div>
        </section>

        {/* Card Section */}
        <section className="demo-section">
          <h2 className="section-title">Card 컴포넌트</h2>
          <div className="demo-grid">
            <Card 
              variant="default" 
              padding="md"
              className="demo-card"
            >
              <h3>Default Card</h3>
              <p>기본 카드 컴포넌트입니다.</p>
            </Card>

            <Card 
              variant="elevated" 
              padding="md"
              hoverable
              className="demo-card"
            >
              <h3>Elevated Card</h3>
              <p>그림자가 있는 카드입니다.</p>
            </Card>

            <Card 
              variant="outlined" 
              padding="md"
              className="demo-card"
            >
              <h3>Outlined Card</h3>
              <p>테두리가 있는 카드입니다.</p>
            </Card>
          </div>

          <div className="demo-grid">
            <Card 
              variant="filled" 
              padding="md"
              hoverable
              onClick={() => handleCardClick('interactive')}
              selected={selectedCard === 'interactive'}
              className="demo-card"
            >
              <h3>Interactive Card</h3>
              <p>클릭 가능한 카드입니다.</p>
            </Card>
          </div>
        </section>

        {/* Input Section */}
        <section className="demo-section">
          <h2 className="section-title">Input 컴포넌트</h2>
          <div className="demo-grid">
            <Input
              label="기본 입력"
              placeholder="텍스트를 입력하세요"
              value={inputValue}
              onChange={handleInputChange}
              helperText="도움말 텍스트입니다."
            />
          </div>

          <div className="demo-grid">
            <Input
              label="이메일 입력"
              type="email"
              placeholder="이메일을 입력하세요"
              required
              helperText="필수 입력 항목입니다."
            />

            <Input
              label="비밀번호 입력"
              type="password"
              placeholder="비밀번호를 입력하세요"
              required
              helperText="8자 이상 입력해주세요."
            />
          </div>

          <div className="demo-grid">
            <Input
              label="에러 상태"
              placeholder="에러가 있는 입력"
              error
              errorMessage="올바른 값을 입력해주세요."
            />

            <Input
              label="비활성화"
              placeholder="비활성화된 입력"
              disabled
              helperText="이 입력은 비활성화되어 있습니다."
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="demo-section">
          <h2 className="section-title">상호작용 데모</h2>
          <div className="interactive-demo">
            <Card variant="elevated" padding="lg" className="interactive-card">
              <h3>상호작용 테스트</h3>
              <p>현재 입력값: <strong>{inputValue || '없음'}</strong></p>
              <p>선택된 카드: <strong>{selectedCard || '없음'}</strong></p>
              
              <div className="demo-actions">
                <Button 
                  variant="primary" 
                  onClick={() => setInputValue('')}
                  disabled={!inputValue}
                >
                  입력값 초기화
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCard(null)}
                  disabled={!selectedCard}
                >
                  카드 선택 해제
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ComponentsDemoPage;
