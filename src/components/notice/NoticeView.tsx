import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface NoticeDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
  hasAttachment: boolean;
  attachments: string[];
}

const NoticeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 비주얼 섹션 데이터
  const visualData = {
    title: '소통하기',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '소통하기' },
      { label: '공지사항', isActive: true }
    ]
  };

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '공지사항', href: '#news', isActive: true, path: '/notice' },
    { id: 'data', label: 'FAQ', href: '#data', isActive: false, path: '/faq' },
    { id: 'statistics', label: '문의하기', href: '#inquiry', isActive: false, path: '/inquiry' }
  ];

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const noticeDetail: NoticeDetail = {
    id: parseInt(id || '1'),
    title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내',
    content: `
      <h3>2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내</h3>
      
      <p>안녕하세요. 2025학년도 맞춤형 학업성취도 자율평가 설명회를 개최하오니 많은 참여 부탁드립니다.</p>
      
      <h4>■ 설명회 개요</h4>
      <ul>
        <li><strong>일시:</strong> 2025년 6월 20일(금) 14:00~16:00</li>
        <li><strong>장소:</strong> 한국교육과정평가원 대강당</li>
        <li><strong>대상:</strong> 참여 희망 학교 관계자, 교육청 담당자</li>
        <li><strong>주제:</strong> 맞춤형 학업성취도 자율평가 운영 방안</li>
      </ul>
      <br />
      <p>
              <img src="/images/sub/bbs_cont_01.jpg" alt="설명회 이미지" />
      </p>
      <br />
      <h4>■ 주요 내용</h4>
      <ol>
        <li>2025학년도 평가 방향 및 정책 안내</li>
        <li>평가 도구 및 시스템 활용법</li>
        <li>평가 결과 분석 및 활용 방안</li>
        <li>질의응답 및 토론</li>
      </ol>
      
      <h4>■ 참가 신청</h4>
      <p>참가를 원하시는 분은 아래 링크를 통해 사전 신청해 주시기 바랍니다.</p>
      <p><a href="#" className="link-button">참가 신청하기</a></p>
      
      <h4>■ 문의사항</h4>
      <p>기타 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.</p>
      <ul>
        <li>전화: 02-1234-5678</li>
        <li>이메일: notice@kice.re.kr</li>
        <li>팩스: 02-1234-5679</li>
      </ul>
      
      <p>많은 관심과 참여 부탁드립니다.</p>
    `,
    author: '한국교육과정평가원',
    date: '2025-06-12 14:00',
    views: 156,
    hasAttachment: true,
    attachments: [
      '2025학년도_맞춤형_학업성취도_자율평가_설명회_안내문.pdf',
      '설명회_참가신청서.hwp',
      '설명회_프로그램.pdf'
    ]
  };

  const handleBackToList = () => {
    navigate('/notice');
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
            <h2>공지사항</h2>

            {/* <button onClick={handleWriteClick} className="write-button">
              글쓰기
            </button> */}
          </div>
          <div className="bbs-view-content">
            {/* 공지사항 상세 내용 */}
            <div className="bbs-view-detail">
              <div className="bbs-view-header">
                <div className="bbs-view-group-tit">
                  <span>평가 신청 &gt; 자율평가 시행 신청 일정 또는 교과/설문 변경</span>
                </div>
                <div className="bbs-veiw-title-section">
                  <h2>{noticeDetail.title}</h2>
                </div>
                <div className="bbs-veiw-meta">
                  <div className="meta-item">
                    <span className="meta-label">조회수</span>
                    <span className="meta-value">{noticeDetail.views}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">등록일시</span>
                    <span className="meta-value">{noticeDetail.date}</span>
                  </div>
                </div>
              </div>

              {/* 첨부파일 */}
              {noticeDetail.hasAttachment && (
                <div className="attachments-section">
                  <ul className="attachment-list">
                    {noticeDetail.attachments.map((file, index) => (
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
                <div dangerouslySetInnerHTML={{ __html: noticeDetail.content }} />
              </div>
              <div className="bbs-view-post-nav">
                <div className="prev-next-post">
                  <div className="prev-post">
                    <strong>이전글</strong>
                    <a href="#" className="prev-post-link">
                      <span className="prev-post-title">맞춤형 학업성취도 자율평가 평가결과표 안내자료</span>
                    </a>
                  </div>
                  <div className="next-post">
                    <strong>다음글</strong>
                    <a href="#" className="next-post-link">
                      <span className="next-post-title">2022년 맞춤형 학업성취도 자율평가 권역별 설명회 개최</span>
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

export default NoticeView;
