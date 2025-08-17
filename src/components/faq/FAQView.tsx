import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface FAQDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
  hasAttachment: boolean;
  attachments: string[];
  category: string;
}

const FAQView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 비주얼 섹션 데이터
  const visualData = {
    title: '소통하기',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '소통하기' },
      { label: 'FAQ', isActive: true }
    ]
  };

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '공지사항', href: '#news', isActive: false, path: '/notice' },
    { id: 'data', label: 'FAQ', href: '#data', isActive: true, path: '/faq' },
    { id: 'statistics', label: '문의하기', href: '#inquiry', isActive: false, path: '/inquiry' }
  ];

  // FAQ 카테고리
  const categories = [
    { value: 'evaluation', label: '평가 관련' },
    { value: 'system', label: '시스템 사용' },
    { value: 'application', label: '신청/접수' },
    { value: 'result', label: '결과 조회' },
    { value: 'etc', label: '기타' }
  ];

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const faqDetail: FAQDetail = {
    id: parseInt(id || '1'),
    title: '맞춤형 학업성취도 자율평가는 어떻게 신청하나요?',
    content: `
      <h3>맞춤형 학업성취도 자율평가 신청 방법</h3>
      
      <p>맞춤형 학업성취도 자율평가에 참여하고 싶으신 학교는 아래 절차를 따라 신청해 주시기 바랍니다.</p>
      
      <h4>■ 신청 자격</h4>
      <ul>
        <li><strong>초등학교:</strong> 3학년 이상</li>
        <li><strong>중학교:</strong> 1~3학년</li>
        <li><strong>고등학교:</strong> 1~2학년</li>
        <li><strong>특수학교:</strong> 해당 학년</li>
      </ul>
      
      <h4>■ 신청 절차</h4>
      <ol>
        <li><strong>1단계:</strong> 참여 희망 의사 조사 (매년 3월)</li>
        <li><strong>2단계:</strong> 참여 학교 선정 및 통보 (4월)</li>
        <li><strong>3단계:</strong> 신청서 제출 (5월)</li>
        <li><strong>4단계:</strong> 참여 학교 확정 (6월)</li>
      </ol>
      
      <h4>■ 신청서 제출 방법</h4>
      <p>아래 링크를 통해 온라인으로 신청서를 제출하실 수 있습니다.</p>
      <p><a href="#" className="link-button">신청서 제출하기</a></p>
      
      <h4>■ 필요 서류</h4>
      <ul>
        <li>참여 신청서 (온라인 작성)</li>
        <li>학교장 동의서 (서명 후 스캔)</li>
        <li>담당교사 지정서</li>
        <li>기타 필요 서류</li>
      </ul>
      
      <h4>■ 문의사항</h4>
      <p>신청 과정에서 궁금한 점이 있으시면 아래 연락처로 문의해 주시기 바랍니다.</p>
      <ul>
        <li>전화: 02-1234-5678</li>
        <li>이메일: faq@kice.re.kr</li>
        <li>팩스: 02-1234-5679</li>
      </ul>
      
      <p>많은 관심과 참여 부탁드립니다.</p>
    `,
    author: '한국교육과정평가원',
    date: '2025-06-12 14:00',
    views: 156,
    hasAttachment: true,
    attachments: [
      '맞춤형_학업성취도_자율평가_신청_가이드.pdf',
      '참여_신청서_양식.hwp',
      '학교장_동의서_양식.pdf'
    ],
    category: 'application'
  };

  const handleBackToList = () => {
    navigate('/faq');
  };



  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <SubVisual
        title={visualData.title}
        breadcrumbs={visualData.breadcrumbs}
        backgroundImage="/images/sub/sub_visual_4.svg"
      />

      <div className="sub-content">
        {/* 왼쪽 사이드바 */}
        <SubLeftMenu
          title="소통하기"
          menuItems={sidebarMenuItems}
          backgroundImage="/images/sub/sub_side_bg_4.svg"
        />

        {/* 오른쪽 메인 컨텐츠 */}
        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>FAQ</h2>
          </div>
          <div className="bbs-view-content">
            {/* FAQ 상세 내용 */}
            <div className="bbs-view-detail">
              <div className="bbs-view-header">
                <div className="bbs-view-group-tit">
                  <span>FAQ &gt; {categories.find(cat => cat.value === faqDetail.category)?.label}</span>
                </div>
                <div className="bbs-veiw-title-section">
                  <h2>{faqDetail.title}</h2>
                </div>
                <div className="bbs-veiw-meta">
                  <div className="meta-item">
                    <span className="meta-label">구분</span>
                    <span className="meta-value">{categories.find(cat => cat.value === faqDetail.category)?.label}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">조회수</span>
                    <span className="meta-value">{faqDetail.views}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">등록일시</span>
                    <span className="meta-value">{faqDetail.date}</span>
                  </div>
                </div>
              </div>

              {/* 첨부파일 */}
              {faqDetail.hasAttachment && (
                <div className="attachments-section">
                  <ul className="attachment-list">
                    {faqDetail.attachments.map((file, index) => (
                      <li key={index}>
                        <span className="attachment-item">
                          <em className="attachment-icon"><img src="/images/icons/icon_file-att.svg" alt="첨부파일" /></em>
                          <a href="#" className="attachment-link">{file}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQ 내용 */}
              <div className="bbs-veiw-content-editor">
                <div dangerouslySetInnerHTML={{ __html: faqDetail.content }} />
              </div>
              
              <div className="bbs-view-post-nav">
                <div className="prev-next-post">
                  <div className="prev-post">
                    <strong>이전글</strong>
                    <a href="#" className="prev-post-link">
                      <span className="prev-post-title">평가 결과는 언제 확인할 수 있나요?</span>
                    </a>
                  </div>
                  <div className="next-post">
                    <strong>다음글</strong>
                    <a href="#" className="next-post-link">
                      <span className="next-post-title">시스템 접속이 안 될 때는 어떻게 해야 하나요?</span>
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

export default FAQView;
