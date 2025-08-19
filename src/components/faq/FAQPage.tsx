'use client';
import React, { useState, useMemo } from 'react';
import { useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface FAQItem {
  id: number;
  title: string;
  hasAttachment: boolean;
  date: string;
  views: number;
  thumbnail?: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchType, setSearchType] = useState('title_content');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'news', label: '공지사항', href: '#news', isActive: false, path: '/notice' },
    { id: 'data', label: 'FAQ', href: '#data', isActive: true, path: '/faq' },
    { id: 'statistics', label: '문의하기', href: '#inquiry', isActive: false, path: '/inquiry' }
  ];

  // 비주얼 섹션 데이터
  const visualData = {
    title: '소통하기',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '소통하기' },
      { label: 'FAQ', isActive: true }
    ]
  };

  // FAQ 카테고리
  const categories = [
    { value: 'all', label: '전체' },
    { value: 'evaluation', label: '표집평가' },
    { value: 'system', label: '자율평가' }
  ];

  // 샘플 데이터
  const faqs: FAQItem[] = [
    { id: 21, title: '맞춤형 학업성취도 자율평가는 어떻게 신청하나요?', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 20, title: '평가 결과는 언제 확인할 수 있나요?', hasAttachment: false, date: '2025-06-12', views: 142, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 19, title: '시스템 접속이 안 될 때는 어떻게 해야 하나요?', hasAttachment: true, date: '2025-06-12', views: 98, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 18, title: '평가 문항은 어떻게 구성되어 있나요?', hasAttachment: false, date: '2025-06-12', views: 203, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 17, title: '참여 학교 선정 기준은 무엇인가요?', hasAttachment: true, date: '2025-06-12', views: 87, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 16, title: '평가 결과 분석 자료는 어떻게 받을 수 있나요?', hasAttachment: true, date: '2025-06-12', views: 134, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 15, title: '로그인 비밀번호를 잊어버렸어요', hasAttachment: false, date: '2025-06-12', views: 76, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 14, title: '평가 일정 변경은 언제까지 가능한가요?', hasAttachment: true, date: '2025-06-12', views: 189, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 13, title: '참가 신청서 제출 후 수정이 가능한가요?', hasAttachment: false, date: '2025-06-12', views: 112, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 12, title: '평가 도구 사용법을 배울 수 있나요?', hasAttachment: true, date: '2025-06-12', views: 95, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 11, title: '평가 기준은 어떻게 정해지나요?', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 10, title: '결과 발표는 어떤 방식으로 이루어지나요?', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 9, title: '시스템 점검 시간은 언제인가요?', hasAttachment: false, date: '2025-06-12', views: 178, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 8, title: '평가 참여 학교 확정은 언제 알 수 있나요?', hasAttachment: true, date: '2025-06-12', views: 223, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 7, title: '평가 매뉴얼은 어디서 다운로드 받나요?', hasAttachment: true, date: '2025-06-12', views: 89, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 6, title: '평가 참여 방법에 대한 상세 안내가 있나요?', hasAttachment: true, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 5, title: '설명회 자료는 어떻게 받을 수 있나요?', hasAttachment: true, date: '2025-06-12', views: 134, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 4, title: '평가 도구 사용 시 주의사항이 있나요?', hasAttachment: false, date: '2025-06-12', views: 167, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'system' },
    { id: 3, title: '참여 학교 선정 과정은 어떻게 되나요?', hasAttachment: true, date: '2025-06-12', views: 145, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 2, title: '평가 결과표 해석 방법을 알려주세요', hasAttachment: true, date: '2025-06-12', views: 198, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' },
    { id: 1, title: 'FAQ 외 추가 문의는 어디로 해야 하나요?', hasAttachment: false, date: '2025-06-12', views: 156, thumbnail: getImagePath('images/sub/bbs_thumb_01.png'), category: 'evaluation' }
  ];

  const itemsPerPage = 20;

  // 현재 탭에 따라 FAQ 데이터 필터링
  const filteredFaqs = useMemo(() => {
    if (activeTab === 'all') {
      return faqs;
    }
    return faqs.filter(faq => faq.category === activeTab);
  }, [faqs, activeTab]);

  // 현재 페이지에 해당하는 데이터만 필터링
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredFaqs.slice(startIndex, endIndex);
  }, [currentPage, filteredFaqs]);

  // 전체 아이템 수 업데이트
  const totalFilteredItems = filteredFaqs.length;
  const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);

  const handleSearch = () => {
    console.log('검색:', searchType, searchKeyword, activeTab);
    // 검색 시 첫 페이지로 이동
    setCurrentPage(1);
  };

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setCurrentPage(1); // 탭 변경 시 첫 페이지로 이동
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
    navigate(`/faq/view/${id}`);
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
            <h2>FAQ</h2>
          </div>

          {/* 검색 영역 */}
          <div className="sub-content-main">
            {/* 탭 메뉴 */}
            <div className="tab-menu">
              <ul>
                <li
                  className={activeTab === 'all' ? 'active' : ''}
                  onClick={() => handleTabClick('all')}
                >
                  전체
                </li>
                <li
                  className={activeTab === 'evaluation' ? 'active' : ''}
                  onClick={() => handleTabClick('evaluation')}
                >
                  표집평가
                </li>
                <li
                  className={activeTab === 'system' ? 'active' : ''}
                  onClick={() => handleTabClick('system')}
                >
                  자율평가
                </li>
              </ul>
            </div>
            <div className="search-section">
              <span className="total-count">총 <strong>{totalFilteredItems}</strong>건</span>
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


            {/* FAQ 테이블 */}
            <div className="view-mode-wrap">
              <div className="list-mode notice-table-container">
                <table className="notice-table">
                  <colgroup>
                    <col style={{ width: "7%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "35%" }} />
                    <col style={{ width: "8%" }} />
                    <col style={{ width: "11%" }} />
                    <col style={{ width: "8%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>분류</th>
                      <th>제목</th>
                      <th>첨부</th>
                      <th>작성일</th>
                      <th>조회수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((faq) => (
                      <tr key={faq.id}>
                        <td>{faq.id}</td>
                        <td><span className={faq.category}>{categories.find(cat => cat.value === faq.category)?.label}</span></td>
                        <td className="title-cell">
                          <button
                            onClick={() => handleTitleClick(faq.id)}
                            className="title-button"
                          >
                            {faq.title}
                          </button>
                        </td>
                        <td>
                          {faq.hasAttachment && (
                            <span className="attachment-icon"><img src={getImagePath('images/icons/icon_file-att.svg')} alt="첨부파일" /></span>
                          )}
                        </td>
                        <td>{faq.date}</td>
                        <td>{faq.views}</td>
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

export default FAQPage;
