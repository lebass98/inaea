'use client';
import React from 'react';
import { useParams, useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';


interface PromotionItem {
  id: number;
  title: string;
  content: string;
  hasAttachment: boolean;
  date: string;
  views: number;
  author: string;
  category: string;
  attachments?: string[];
}

const PromotionView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '보도자료', href: '#news', isActive: false, path: '/infocenter' },
    { id: 'data', label: '연구자료', href: '#data', isActive: false, path: '/research' },
    { id: 'statistics', label: '설문자료', href: '#statistics', isActive: false, path: '/survey' },
    { id: 'promotion', label: '홍보자료', href: '#promotion', isActive: true, path: '/promotion' }
  ];

  // 비주얼 섹션 데이터
  const visualData = {
    title: '정보마당',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '정보마당' },
      { label: '홍보자료', isActive: true }
    ]
  };

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const promotionData: PromotionItem = {
    id: parseInt(id || '1'),
    title: '2025학년도 맞춤형 학업성취도 자율평가 홍보 브로셔',
    content: `
      <h3>홍보 브로셔 개요</h3>
      <p>본 홍보 브로셔는 2025학년도 맞춤형 학업성취도 자율평가 시스템의 특징과 장점을 효과적으로 전달하기 위해 제작되었습니다.</p>
      
      <h3>주요 홍보 내용</h3>
      <ul>
        <li>맞춤형 학업성취도 자율평가 시스템 소개</li>
        <li>평가 시스템의 주요 특징 및 장점</li>
        <li>참여 학교 및 학생들의 성공 사례</li>
        <li>평가 결과 활용 방법 및 효과</li>
        <li>향후 발전 방향 및 계획</li>
      </ul>
      
      <h3>홍보 대상</h3>
      <ol>
        <li>전국 초·중·고등학교 교사 및 학부모</li>
        <li>교육청 및 교육 관련 기관 관계자</li>
        <li>교육 정책 수립자 및 연구자</li>
        <li>일반 국민 및 교육에 관심 있는 분들</li>
      </ol>
      
      <h3>홍보 효과</h3>
      <p>본 홍보 브로셔를 통해 맞춤형 학업성취도 자율평가 시스템에 대한 이해도가 크게 향상되었으며, 특히 교사와 학부모들의 관심과 참여 의지가 높아졌습니다.</p>
      
      <h3>주요 홍보 채널</h3>
      <ul>
        <li>학교 및 교육청 배포</li>
        <li>교육 관련 전시회 및 세미나</li>
        <li>온라인 홍보 및 소셜미디어</li>
        <li>언론사 보도자료 및 기사</li>
      </ul>
      
      <h3>향후 홍보 계획</h3>
      <p>본 홍보 브로셔의 성공적인 결과를 바탕으로, 2026학년도에는 더욱 다양한 형태의 홍보 자료를 제작하여 맞춤형 학업성취도 자율평가 시스템의 우수성을 널리 알릴 예정입니다.</p>
    `,
    hasAttachment: true,
    date: '2025-06-12',
    views: 156,
    author: '홍보팀',
    category: 'promotion',
    attachments: [
      '2025학년도_맞춤형_학업성취도_자율평가_홍보_브로셔.pdf',
      '홍보_브로셔_원본_디자인.ai',
      '홍보_브로셔_인쇄용_파일.pdf'
    ]
  };

  const handleBackToList = () => {
    navigate('/promotion');
  };



  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <SubVisual
        title={visualData.title}
        breadcrumbs={visualData.breadcrumbs}
        backgroundImage={getImagePath('images/sub/sub_visual_3.png')}
      />

      <div className="sub-content">
        {/* 왼쪽 사이드바 */}
        <SubLeftMenu
          title="정보마당"
          menuItems={sidebarMenuItems}
          backgroundImage={getImagePath('images/sub/sub_side_bg_3.png')}
        />

        {/* 오른쪽 메인 컨텐츠 */}
        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>홍보자료</h2>
          </div>

          <div className="bbs-view-content">
            {/* 게시글 상세보기 */}
            <div className="bbs-view-detail">
              <div className="bbs-view-header">
                <div className="bbs-view-group-tit">
                  <span>정보마당 &gt; 홍보자료</span>
                </div>
                <div className="bbs-veiw-title-section">
                  <h2>{promotionData.title}</h2>
                </div>
                <div className="bbs-veiw-meta">

                  <span className="meta-item">
                    <span className="meta-label">조회수</span>
                    <span className="meta-value">{promotionData.views}</span>
                  </span>
                  <span className="meta-item">
                    <span className="meta-label">작성일</span>
                    <span className="meta-value">{promotionData.date}</span>
                  </span>

                </div>
              </div>





              {/* 첨부파일 */}
              {promotionData.hasAttachment && promotionData.attachments && (
                <div className="attachments-section">
                  <ul className="attachment-list">
                    {promotionData.attachments.map((file, index) => (
                      <li key={index}>
                        <span className="attachment-item">
                          <em className="attachment-icon"><img src={getImagePath('images/icons/icon_file-att.svg')} alt="첨부파일" /></em>
                          <a href="#" className="attachment-link">{file}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="bbs-veiw-content-editor">
                <div dangerouslySetInnerHTML={{ __html: promotionData.content }} />
              </div>
              <div className="bbs-view-post-nav">
                <div className="prev-next-post">
                  <div className="prev-post">
                    <strong>이전글</strong>
                    <a href="#" className="prev-post-link">
                      <span className="prev-post-title">맞춤형 학업성취도 자율평가 연구결과표 안내자료</span>
                    </a>
                  </div>
                  <div className="next-post">
                    <strong>다음글</strong>
                    <a href="#" className="next-post-link">
                      <span className="next-post-title">2022년 맞춤형 학업성취도 자율평가 연구 권역별 설명회 개최</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 버튼 영역 */}
              <div className="bbs-veiw-actions">
                <button onClick={handleBackToList} className="btn btn-primary">
                  목록
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionView;
