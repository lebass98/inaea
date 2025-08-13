import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubVisual from '../SubVisual';
import './NoticeView.css';

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
    title: '정보마당',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '정보마당' },
      { label: '보도자료', isActive: true }
    ]
  };

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
    date: '2025-06-12',
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

  const handleEdit = () => {
    navigate(`/notice/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      // 삭제 로직 구현
      console.log('공지사항 삭제:', id);
      navigate('/notice');
    }
  };

  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <SubVisual 
        title={visualData.title}
        breadcrumbs={visualData.breadcrumbs}
      />

      <div className="bbs-view-content">
        {/* 공지사항 상세 내용 */}
        <div className="notice-detail">
          <div className="notice-header">
            <div className="notice-title-section">
              <h2>{noticeDetail.title}</h2>
            </div>
            <div className="notice-meta">
              <div className="meta-item">
                <span className="meta-label">작성자:</span>
                <span className="meta-value">{noticeDetail.author}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">작성일:</span>
                <span className="meta-value">{noticeDetail.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">조회수:</span>
                <span className="meta-value">{noticeDetail.views}</span>
              </div>
            </div>
          </div>

          {/* 첨부파일 */}
          {noticeDetail.hasAttachment && (
            <div className="attachments-section">
              <h4>첨부파일</h4>
              <div className="attachment-list">
                {noticeDetail.attachments.map((file, index) => (
                  <div key={index} className="attachment-item">
                    <span className="attachment-icon">📎</span>
                    <a href="#" className="attachment-link">{file}</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 공지사항 내용 */}
          <div className="notice-content">
            <div dangerouslySetInnerHTML={{ __html: noticeDetail.content }} />
          </div>

          {/* 버튼 영역 */}
          <div className="notice-actions">
            <button onClick={handleBackToList} className="btn btn-secondary">
              목록으로
            </button>
            <div className="action-buttons">
              <button onClick={handleEdit} className="btn btn-primary">
                수정
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeView;
