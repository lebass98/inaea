'use client';
import React, { useState, useMemo } from 'react';
import { useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface InfoCenterItem {
  id: number;
  title: string;
  hasAttachment: boolean;
  date: string;
  views: number;
  thumbnail?: string;
  category: string;
}

const InfoCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchType, setSearchType] = useState('title_content');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [viewMode, setViewMode] = useState<'list' | 'gallery'>('list'); // 뷰 모드 상태 추가
  
  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '보도자료', href: '#news', isActive: true, path: '/infocenter' },
    { id: 'data', label: '연구자료', href: '#data', isActive: false, path: '/research' },
    { id: 'statistics', label: '설문자료', href: '#statistics', isActive: false, path: '/survey' },
    { id: 'promotion', label: '홍보자료', href: '#promotion', isActive: false, path: '/promotion' }
  ];
  
  // 비주얼 섹션 데이터
  const visualData = {
    title: '정보마당',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '정보마당' },
      { label: '보도자료', isActive: true }
    ]
  };



  // 샘플 데이터
  const infoCenterItems: InfoCenterItem[] = [
    { id: 21, title: '2025학년도 맞춤형 학업성취도 자율평가 설명회 개최 안내', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'news' },
    { id: 20, title: '맞춤형 학업성취도 자율평가 연구 결과 보고서', hasAttachment: true, date: '2025-06-12', views: 142, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 19, title: '2025학년도 평가 참여 학교 설문 조사 결과', hasAttachment: false, date: '2025-06-12', views: 98, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 18, title: '맞춤형 학업성취도 자율평가 홍보 포스터', hasAttachment: true, date: '2025-06-12', views: 203, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'promotion' },
    { id: 17, title: '평가 시스템 개선 연구 보고서', hasAttachment: true, date: '2025-06-12', views: 87, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 16, title: '학부모 만족도 설문 조사 결과', hasAttachment: true, date: '2025-06-12', views: 134, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 15, title: '맞춤형 평가 정책 보도자료', hasAttachment: false, date: '2025-06-12', views: 76, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'news' },
    { id: 14, title: '평가 도구 개발 연구 논문', hasAttachment: true, date: '2025-06-12', views: 189, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 13, title: '교사 인식 조사 설문 결과', hasAttachment: false, date: '2025-06-12', views: 112, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 12, title: '평가 시스템 소개 브로셔', hasAttachment: true, date: '2025-06-12', views: 95, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'promotion' },
    { id: 11, title: '학업성취도 평가 정책 보도자료', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'news' },
    { id: 10, title: '평가 결과 분석 연구 보고서', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 9, title: '학생 만족도 설문 조사', hasAttachment: false, date: '2025-06-12', views: 178, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 8, title: '평가 시스템 사용 가이드', hasAttachment: true, date: '2025-06-12', views: 223, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'promotion' },
    { id: 7, title: '자율평가 운영 가이드라인', hasAttachment: true, date: '2025-06-12', views: 89, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 6, title: '학교별 평가 참여 현황', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 5, title: '평가 시스템 개선 안내', hasAttachment: true, date: '2025-06-12', views: 134, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'news' },
    { id: 4, title: '평가 도구 활용 연구', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'research' },
    { id: 3, title: '평가 참여 학교 현황', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'survey' },
    { id: 2, title: '평가 시스템 소개 자료', hasAttachment: true, date: '2025-06-12', views: 198, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'promotion' },
    { id: 1, title: '맞춤형 평가 정책 소개', hasAttachment: false, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'news' }
  ];

  const totalItems = 74;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 현재 페이지에 해당하는 데이터만 필터링
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return infoCenterItems.slice(startIndex, endIndex);
  }, [currentPage, infoCenterItems]);

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
    navigate(`/infocenter/view/${id}`);
  };

  // 뷰 모드 변경 함수
  const toggleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'gallery' : 'list');
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
            <h2>보도자료</h2>
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
                {/* 현재 모드에 따라 다른 버튼 표시 */}
                {viewMode === 'list' ? (
                  <button onClick={toggleViewMode} className="gal-view-mode-btn">
                    <img src={getImagePath('images/common/bbs_gal_btn.svg')} alt="갤러리 보기" />
                  </button>
                ) : (
                  <button onClick={toggleViewMode} className="list-view-mode-btn">
                    <img src={getImagePath('images/common/bbs_list_btn.svg')} alt="리스트 보기" />
                  </button>
                )}
              </div>
            </div>

            {/* 정보마당 테이블 */}
            <div className="view-mode-wrap">
                  {/* 갤러리 모드 */}
                  {viewMode === 'gallery' && (
                <div className="gallery-mode">
                  <div className="gallery-mode-inner">
                    <div className="gallery-grid">
                      {currentPageData.map((notice) => (
                        <div key={notice.id} className="gallery-item"
                          onClick={() => handleTitleClick(notice.id)}>
                          <div className="gallery-item-content">
                            {/* 썸네일 이미지 */}
                            {notice.thumbnail && (
                              <div className="gallery-thumbnail">
                                <img src={notice.thumbnail} alt="썸네일" />
                              </div>
                            )}
                            <div className="gallery-txt-info">
                              <h3 className="gallery-title">{notice.title}</h3>
                              <div className="gallery-meta">
                                <span className="gallery-date">{notice.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* 리스트 모드 */}
              {viewMode === 'list' && (
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
                    {currentPageData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="title-cell">
                          <button
                            onClick={() => handleTitleClick(item.id)}
                            className="title-button"
                          >
                            {item.title}
                          </button>
                        </td>
                        <td>
                          {item.hasAttachment && (
                            <span className="attachment-icon"><img src={getImagePath('images/icons/icon_file-att.svg')} alt="첨부파일" /></span>
                          )}
                        </td>
                        <td>{item.date}</td>
                        <td>{item.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              )}
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

export default InfoCenterPage;
