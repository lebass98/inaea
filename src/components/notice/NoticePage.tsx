'use client';
import React, { useState, useMemo } from 'react';
import { useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface NoticeItem {
  id: number;
  title: string;
  hasAttachment: boolean;
  date: string;
  views: number;
  thumbnail?: string; // 썸네일 이미지 필드 추가
}

const NoticePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchType, setSearchType] = useState('title_content');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '공지사항', href: '#news', isActive: true, path: '/notice' },
    { id: 'data', label: 'FAQ', href: '#data', isActive: false, path: '/faq' },
    { id: 'statistics', label: '문의하기', href: '#inquiry', isActive: false, path: '/inquiry' }
  ];
  // 비주얼 섹션 데이터
  const visualData = {
    title: '소통하기',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '소통하기' },
      { label: '공지사항', isActive: true }
    ]
  };

  // 샘플 데이터
  const notices: NoticeItem[] = [
    { id: 21, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내 2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 20, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내 2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 19, title: '2025학년도 맞춤형 학업성취도 자율평가 결과표 안내자료', hasAttachment: true, date: '2025-06-12', views: 142, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 18, title: '2025학년도 맞춤형 학업성취도 자율평가 시행 일정 안내', hasAttachment: false, date: '2025-06-12', views: 98, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 17, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 모집', hasAttachment: true, date: '2025-06-12', views: 203, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 16, title: '2025학년도 맞춤형 학업성취도 자율평가 매뉴얼', hasAttachment: true, date: '2025-06-12', views: 87, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 15, title: '2025학년도 맞춤형 학업성취도 자율평가 시스템 점검 안내', hasAttachment: false, date: '2025-06-12', views: 134, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 14, title: '2025학년도 맞춤형 학업성취도 자율평가 문의사항 안내', hasAttachment: false, date: '2025-06-12', views: 76, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 13, title: '2025학년도 맞춤형 학업성취도 자율평가 결과 발표', hasAttachment: true, date: '2025-06-12', views: 189, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 12, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 방법', hasAttachment: true, date: '2025-06-12', views: 112, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 11, title: '2025학년도 맞춤형 학업성취도 자율평가 일정 변경 안내', hasAttachment: false, date: '2025-06-12', views: 95, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 10, title: '2025학년도 맞춤형 학업성취도 자율평가 FAQ', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 9, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 확정', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 8, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 기준', hasAttachment: true, date: '2025-06-12', views: 178, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 7, title: '2025학년도 맞춤형 학업성취도 자율평가 시스템 오픈', hasAttachment: false, date: '2025-06-12', views: 223, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 6, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 신청서', hasAttachment: true, date: '2025-06-12', views: 89, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 5, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 자료', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 4, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 방법', hasAttachment: true, date: '2025-06-12', views: 134, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 3, title: '2025학년도 맞춤형 학업성취도 자율평가 참여 학교 선정', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 2, title: '2025학년도 맞춤형 학업성취도 자율평가 평가 도구', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: '/images/sub/bbs_thumb_01.png' },
    { id: 1, title: '2025학년도 맞춤형 학업성취도 자율평가 최종 안내', hasAttachment: true, date: '2025-06-12', views: 198, thumbnail: '/images/sub/bbs_thumb_01.png' }
  ];

  const totalItems = 74;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 현재 페이지에 해당하는 데이터만 필터링
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return notices.slice(startIndex, endIndex);
  }, [currentPage, notices]);

  const handleSearch = () => {
    console.log('검색:', searchType, searchKeyword);
    // 검색 시 첫 페이지로 이동
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지 변경 시 상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTitleClick = (id: number) => {
    navigate(`/notice/${id}`);
  };


  return (
    <div className="sub-page">
      {/* 상단 비주얼 이미지 */}
      <SubVisual
        title={visualData.title}
        breadcrumbs={visualData.breadcrumbs}
        backgroundImage={getImagePath('images/sub/sub_visual_4.png')}
      />

      <div className="sub-content">
        {/* 왼쪽 사이드바 */}
        <SubLeftMenu
          title="소통하기"
          menuItems={sidebarMenuItems}
          backgroundImage={getImagePath('images/sub/sub_side_bg_4.png')}
        />

        {/* 오른쪽 메인 컨텐츠 */}
        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>공지사항</h2>

            <button onClick={() => navigate('/notice/write')} className="write-button">
              글쓰기
            </button>
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
            <div className="view-mode-wrap">
              <div className="list-mode notice-table-container">
                <table className="notice-table">
                  <colgroup>
                    <col style={{ width: "8%" }} />
                    <col style={{ width: "50%" }} />
                    <col style={{ width: "8%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
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
                    {currentPageData.map((notice) => (
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
                            <span className="attachment-icon"><img src={getImagePath('images/icons/icon_file-att.svg')} alt="첨부파일" /></span>
                          )}
                        </td>
                        <td>{notice.date}</td>
                        <td>{notice.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
              <button
                className={`page-button prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <img src={getImagePath('images/icons/icon_page_prev.svg')} alt="이전" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`page-button ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
              <button
                className={`page-button next ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <img src={getImagePath('images/icons/icon_page_next.svg')} alt="다음" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticePage;
