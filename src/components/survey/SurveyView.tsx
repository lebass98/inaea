'use client';
import React from 'react';
import { useParams, useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';


interface SurveyItem {
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

const SurveyView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '보도자료', href: '#news', isActive: false, path: '/infocenter' },
    { id: 'data', label: '연구자료', href: '#data', isActive: false, path: '/research' },
    { id: 'statistics', label: '설문자료', href: '#statistics', isActive: true, path: '/survey' },
    { id: 'promotion', label: '홍보자료', href: '#promotion', isActive: false, path: '/promotion' }
  ];

  // 비주얼 섹션 데이터
  const visualData = {
    title: '정보마당',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '정보마당' },
      { label: '설문자료', isActive: true  }
    ]
  };

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const surveyData: SurveyItem = {
    id: parseInt(id || '1'),
    title: '2025학년도 맞춤형 학업성취도 자율평가 설문조사 결과',
    content: `
      <h3>설문조사 개요</h3>
      <p>본 설문조사는 2025학년도 맞춤형 학업성취도 자율평가 시스템의 효과성과 개선점을 파악하기 위해 실시되었습니다.</p>
      
      <h3>설문조사 대상</h3>
      <ul>
        <li>참여 학교 교사: 1,200명</li>
        <li>참여 학교 학부모: 2,500명</li>
        <li>참여 학교 학생: 5,000명</li>
        <li>교육청 관계자: 150명</li>
      </ul>
      
      <h3>주요 설문 항목</h3>
      <ol>
        <li>평가 시스템 사용성 및 편의성</li>
        <li>평가 결과의 정확성 및 신뢰성</li>
        <li>평가 도구의 적절성</li>
        <li>전반적인 만족도</li>
        <li>개선이 필요한 영역</li>
      </ol>
      
      <h3>설문조사 결과 요약</h3>
      <p>전체 응답자 중 85%가 맞춤형 학업성취도 자율평가 시스템에 대해 긍정적인 평가를 보였으며, 특히 평가 결과의 정확성과 신뢰성에 대한 만족도가 높게 나타났습니다.</p>
      
      <h3>주요 개선 제안사항</h3>
      <ul>
        <li>평가 도구의 사용자 인터페이스 개선</li>
        <li>모바일 환경 지원 강화</li>
        <li>평가 결과 리포트 형태 다양화</li>
        <li>사용자 교육 자료 보강</li>
      </ul>
      
      <h3>향후 계획</h3>
      <p>본 설문조사 결과를 바탕으로 2026학년도 맞춤형 학업성취도 자율평가 시스템을 개선하여 더욱 사용자 친화적이고 효과적인 평가 시스템을 구축할 예정입니다.</p>
    `,
    hasAttachment: true,
    date: '2025-06-12',
    views: 156,
    author: '교육평가연구팀',
    category: 'survey',
    attachments: [
      '2025학년도_맞춤형_학업성취도_자율평가_설문조사_결과보고서.pdf',
      '설문조사_원본데이터.xlsx',
      '설문조사_분석_차트.pdf'
    ]
  };

  const handleBackToList = () => {
    navigate('/survey');
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
            <h2>설문자료</h2>
          </div>

          <div className="bbs-view-content">
            {/* 게시글 상세보기 */}
            <div className="bbs-view-detail">
              <div className="bbs-view-header">
                <div className="bbs-view-group-tit">
                  <span>정보마당 &gt; 설문자료</span>
                </div>
                <div className="bbs-veiw-title-section">
                  <h2>{surveyData.title}</h2>
                </div>
                <div className="bbs-veiw-meta">
                  <span className="meta-item">
                    <span className="meta-label">작성일</span>
                    <span className="meta-value">{surveyData.date}</span>
                  </span>
                  <span className="meta-item">
                    <span className="meta-label">작성자</span>
                    <span className="meta-value">{surveyData.author}</span>
                  </span>
                  <span className="meta-item">
                    <span className="meta-label">조회수</span>
                    <span className="meta-value">{surveyData.views}</span>
                  </span>
                </div>
              </div>


              {/* 첨부파일 */}
              {surveyData.hasAttachment && surveyData.attachments && (
                <div className="attachment-section">
                  <ul className="attachment-list">
                    {surveyData.attachments.map((file, index) => (
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
                <div dangerouslySetInnerHTML={{ __html: surveyData.content }} />
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

export default SurveyView;
