import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface ResearchDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
  hasAttachment: boolean;
  attachments: string[];
}

const ResearchView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 비주얼 섹션 데이터
  const visualData = {
    title: '정보마당',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '정보마당' },
      { label: '연구자료', isActive: true }
    ]
  };

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '보도자료', href: '#news', isActive: false, path: '/infocenter' },
    { id: 'data', label: '연구자료', href: '#data', isActive: true, path: '/research' },
    { id: 'statistics', label: '설문자료', href: '#statistics', isActive: false, path: '/survey' },
    { id: 'promotion', label: '홍보자료', href: '#promotion', isActive: false, path: '/promotion' }
  ];

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const researchDetail: ResearchDetail = {
    id: parseInt(id || '1'),
    title: '2025학년도 맞춤형 학업성취도 자율평가 연구 보고서',
    content: `
      <h3>2025학년도 맞춤형 학업성취도 자율평가 연구 보고서</h3>
      
      <p>본 보고서는 2025학년도 맞춤형 학업성취도 자율평가에 대한 연구 결과를 담고 있습니다.</p>
      
      <h4>■ 연구 개요</h4>
      <ul>
        <li><strong>연구기간:</strong> 2025년 1월 ~ 6월</li>
        <li><strong>연구기관:</strong> 한국교육과정평가원</li>
        <li><strong>연구책임자:</strong> 교육평가연구팀</li>
        <li><strong>연구주제:</strong> 맞춤형 학업성취도 자율평가 운영 방안 연구</li>
      </ul>
      <br />
      <p>
        <img src="/images/sub/bbs_cont_01.jpg" alt="연구 이미지" />
      </p>
      <br />
      <h4>■ 주요 연구 내용</h4>
      <ol>
        <li>맞춤형 평가 시스템 설계 및 개발</li>
        <li>평가 도구의 타당성 및 신뢰성 검증</li>
        <li>평가 결과 분석 및 활용 방안 연구</li>
        <li>학교별 맞춤형 평가 운영 가이드라인 개발</li>
      </ol>
      
      <h4>■ 연구 결과</h4>
      <p>본 연구를 통해 다음과 같은 결과를 도출하였습니다:</p>
      <ul>
        <li>맞춤형 평가 시스템의 효과적인 운영 방안</li>
        <li>평가 결과의 신뢰성 향상 방안</li>
        <li>학교별 특성을 반영한 평가 도구 개발</li>
        <li>평가 결과의 교육적 활용 방안</li>
      </ul>
      
      <h4>■ 향후 연구 계획</h4>
      <p>이번 연구 결과를 바탕으로 다음과 같은 후속 연구를 진행할 예정입니다:</p>
      <ol>
        <li>평가 시스템의 지속적인 개선 및 발전</li>
        <li>다양한 평가 방법론 연구</li>
        <li>국제 비교 연구 및 협력</li>
        <li>평가 전문가 양성 프로그램 개발</li>
      </ol>
      
      <h4>■ 문의사항</h4>
      <p>본 연구에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.</p>
      <ul>
        <li>전화: 02-1234-5678</li>
        <li>이메일: research@kice.re.kr</li>
        <li>팩스: 02-1234-5679</li>
      </ul>
      
      <p>많은 관심과 지지 부탁드립니다.</p>
    `,
    author: '한국교육과정평가원',
    date: '2025-06-12 14:00',
    views: 234,
    hasAttachment: true,
    attachments: [
      '2025학년도_맞춤형_학업성취도_자율평가_연구보고서.pdf',
      '연구_부록_자료.zip'
    ]
  };

  const handleBackToList = () => {
    navigate('/research');
  };

  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <SubVisual
        title={visualData.title}
        breadcrumbs={visualData.breadcrumbs}
        backgroundImage="/images/sub/sub_visual_3.svg"
      />

      <div className="sub-content">
        {/* 왼쪽 사이드바 */}
        <SubLeftMenu
          title="정보마당"
          menuItems={sidebarMenuItems}
          backgroundImage="/images/sub/sub_side_bg_3.svg"
        />

        {/* 오른쪽 메인 컨텐츠 */}
        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>연구자료</h2>
          </div>
          
          <div className="bbs-view-content">
            {/* 공지사항 상세 내용 */}
            <div className="bbs-view-detail">
              <div className="bbs-view-header">
                <div className="bbs-view-group-tit">
                  <span>정보마당 &gt; 연구자료</span>
                </div>
                <div className="bbs-veiw-title-section">
                  <h2>{researchDetail.title}</h2>
                </div>
                <div className="bbs-veiw-meta">
                  <div className="meta-item">
                    <span className="meta-label">조회수</span>
                    <span className="meta-value">{researchDetail.views}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">등록일시</span>
                    <span className="meta-value">{researchDetail.date}</span>
                  </div>
                </div>
              </div>

              {/* 첨부파일 */}
              {researchDetail.hasAttachment && (
                <div className="attachments-section">
                  <ul className="attachment-list">
                    {researchDetail.attachments.map((file, index) => (
                      <li>
                        <span key={index} className="attachment-item">
                          <em className="attachment-icon"><img src="/images/icons/icon_file-att.svg" alt="첨부파일" /></em>
                          <a href="#" className="attachment-link">{file}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 공지사항 내용 */}
              <div className="bbs-veiw-content-editor">
                <div dangerouslySetInnerHTML={{ __html: researchDetail.content }} />
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

export default ResearchView;
