import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NoticePage.css';

interface NoticeItem {
  id: number;
  title: string;
  hasAttachment: boolean;
  date: string;
  views: number;
}

const NoticePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchType, setSearchType] = useState('title_content');
  const [searchKeyword, setSearchKeyword] = useState('');

  // 샘플 데이터
  const notices: NoticeItem[] = [
    { id: 20, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내', hasAttachment: true, date: '2025-06-12', views: 156 },
    { id: 19, title: '2025학년도 맞춤형 학업성취도 자율평가 결과표 안내자료', hasAttachment: true, date: '2025-06-12', views: 142 },
    { id: 18, title: '2025학년도 맞춤형 학업성취도 자율평가 시행 일정 안내', hasAttachment: false, date: '2025-06-12', views: 98 },
    { id: 17, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 모집', hasAttachment: true, date: '2025-06-12', views: 203 },
    { id: 16, title: '2025학년도 맞춤형 학업성취도 자율평가 매뉴얼', hasAttachment: true, date: '2025-06-12', views: 87 },
    { id: 15, title: '2025학년도 맞춤형 학업성취도 자율평가 시스템 점검 안내', hasAttachment: false, date: '2025-06-12', views: 134 },
    { id: 14, title: '2025학년도 맞춤형 학업성취도 자율평가 문의사항 안내', hasAttachment: false, date: '2025-06-12', views: 76 },
    { id: 13, title: '2025학년도 맞춤형 학업성취도 자율평가 결과 발표', hasAttachment: true, date: '2025-06-12', views: 189 },
    { id: 12, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 방법', hasAttachment: true, date: '2025-06-12', views: 112 },
    { id: 11, title: '2025학년도 맞춤형 학업성취도 자율평가 일정 변경 안내', hasAttachment: false, date: '2025-06-12', views: 95 },
    { id: 10, title: '2025학년도 맞춤형 학업성취도 자율평가 FAQ', hasAttachment: false, date: '2025-06-12', views: 167 },
    { id: 9, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 확정', hasAttachment: true, date: '2025-06-12', views: 145 },
    { id: 8, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 기준', hasAttachment: true, date: '2025-06-12', views: 178 },
    { id: 7, title: '2025학년도 맞춤형 학업성취도 자율평가 시스템 오픈', hasAttachment: false, date: '2025-06-12', views: 223 },
    { id: 6, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 신청서', hasAttachment: true, date: '2025-06-12', views: 89 },
    { id: 5, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 자료', hasAttachment: true, date: '2025-06-12', views: 156 },
    { id: 4, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 방법', hasAttachment: true, date: '2025-06-12', views: 134 },
    { id: 3, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 선정', hasAttachment: false, date: '2025-06-12', views: 167 },
    { id: 2, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 도구', hasAttachment: true, date: '2025-06-12', views: 145 },
    { id: 1, title: '2025학년도 맞춤형 학업성취도 자율평가 최종 안내', hasAttachment: true, date: '2025-06-12', views: 198 }
  ];

  const totalItems = 74;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSearch = () => {
    console.log('검색:', searchType, searchKeyword);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTitleClick = (id: number) => {
    navigate(`/notice/view/${id}`);
  };

  const handleWriteClick = () => {
    navigate('/notice/write');
  };

  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <div className="visual-section">
        <div className="visual-content">
          <div className="visual-content-text">
            <h1>소통하기</h1>
            <ul className="bread-crumb">
              <li className="bread-crumb-home"><a href="/"><span>HOME</span></a></li>
              <li><span>소통하기</span></li>
              <li className="bread-crumb-active"><a href="/">공지사항</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sub-content">
        {/* 왼쪽 사이드바 */}
        <div className="sub-sidebar">
          <div className="sub-sidebar-inner">
            <h3>소통하기</h3>
            <ul>
              <li><a href="#news" className="sidebar-link active">공지사항</a></li>
              <li><a href="#data" className="sidebar-link">FAQ</a></li>
              <li><a href="#statistics" className="sidebar-link">문의하기</a></li>
            </ul>
          </div>
        </div>

        {/* 오른쪽 메인 컨텐츠 */}
        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>공지사항</h2>

            {/* <button onClick={handleWriteClick} className="write-button">
              글쓰기
            </button> */}
          </div>

          {/* 검색 영역 */}
          <div className="sub-content-main">
            <div className="search-section">
              <span className="total-count">총 <strong>{totalItems}</strong>건</span>
              <div className="search-type-wrap">
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="search-type"
                >
                  <option value="title_content">제목 + 내용</option>
                  <option value="title">제목</option>
                  <option value="content">내용</option>
                </select>
                <label className="input search-input">
                  <input
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </label>
                <button onClick={handleSearch} className="search-button">검색</button>
              </div>
            </div>

            {/* 공지사항 테이블 */}

            <div className="notice-table-container">
              <table className="notice-table">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>첨부</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice) => (
                    <tr key={notice.id}>
                      <td>{notice.id}</td>
                      <td className="title-cell">
                        <button
                          onClick={() => handleTitleClick(notice.id)}
                          className="title-button"
                        >
                          {notice.title}
                        </button>
                      </td>
                      <td>
                        {notice.hasAttachment && (
                          <span className="attachment-icon"><img src="/src/images/icons/icon_file-att.svg" alt="첨부파일" /></span>
                        )}
                      </td>
                      <td>{notice.date}</td>
                      <td>{notice.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`page-button ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
              <button className="page-button next">▶</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticePage;
