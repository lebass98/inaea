import React, { useState } from 'react';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';
import './NotificationPage.css';

interface NotificationItem {
  id: number;
  type: 'notice' | 'inquiry' | 'faq' | 'evaluation';
  title: string;
  time: string;
  content: string;
  date?: string;
}

const NotificationPage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const todayNotifications: NotificationItem[] = [
    {
      id: 1,
      type: 'notice',
      title: '공지사항',
      time: '오후 15:05',
      content: '새로운 게시글이 있습니다.\n[시행 후 영역별/역량별 성취율에 비해서 성취수준이 낮게 나온 것 같은데 제목 말줄임표…………] [2025/02/12]'
    },
    {
      id: 2,
      type: 'inquiry',
      title: '문의하기',
      time: '오전 08:05',
      content: '문의하기 답변이 등록되었습니다.'
    },
    {
      id: 3,
      type: 'faq',
      title: 'FAQ',
      time: '오전 12:55',
      content: '수정된 게시글이 있습니다.\n[시행 후 영역별/역량별 성취율에 비해서 성취수준이 낮게 나온 것 같은데 제목 말줄임표…………][2025/02/12]'
    },
    {
      id: 4,
      type: 'evaluation',
      title: '평가결과',
      time: '오전 09:12',
      content: '평가결과가 등록되었습니다.\n[2005년][자율평가][맞춤형 학업성취도 자율평가(초6)(2005-자율-본1]'
    }
  ];

  const previousNotifications: NotificationItem[] = [
    {
      id: 5,
      type: 'notice',
      title: '공지사항',
      time: '7월5일',
      content: '새로운 게시글이 있습니다.\n[시행 후 영역별/역량별 성취율에 비해서 성취수준이 낮게 나온 것 같은데 제목 말줄임표…………] [2025/02/12]'
    },
    {
      id: 6,
      type: 'inquiry',
      title: '문의하기',
      time: '7월1일',
      content: '문의하기 답변이 등록되었습니다.'
    },
    {
      id: 7,
      type: 'faq',
      title: 'FAQ',
      time: '3월21일',
      content: '수정된 게시글이 있습니다.\n[시행 후 영역별/역량별 성취율에 비해서 성취수준이 낮게 나온 것 같은데 제목 말줄임표…………][2025/02/12]'
    },
    {
      id: 8,
      type: 'evaluation',
      title: '평가결과',
      time: '1월15일',
      content: '평가결과가 등록되었습니다.\n[2005년][자율평가][맞춤형 학업성취도 자율평가(초6)(2005-자율-본1]'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'notice':
        return '🔔';
      case 'inquiry':
        return '💬';
      case 'faq':
        return '❓';
      case 'evaluation':
        return '📋';
      default:
        return '📢';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'notice':
        return '#62ABFF';
      case 'inquiry':
        return '#62ABFF';
      case 'faq':
        return '#4CAF50';
      case 'evaluation':
        return '#9C27B0';
      default:
        return '#62ABFF';
    }
  };

  const handleSelectionMode = () => {
    setIsSelectionMode(true);
    setSelectedItems([]);
  };

  const handleCancel = () => {
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    // 선택 모드 강제 활성화
    if (!isSelectionMode) setIsSelectionMode(true);
    const allNotificationIds = [...todayNotifications, ...previousNotifications].map(item => item.id);
    if (selectedItems.length === allNotificationIds.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allNotificationIds);
    }
  };

  const handleDeleteSelected = () => {
    console.log('삭제할 항목:', selectedItems);
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  const handleDeleteAll = () => {
    console.log('전체 삭제');
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  const handleItemClick = (id: number) => {
    if (isSelectionMode) {
      setSelectedItems(prev => 
        prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    } else {
      console.log('알림 상세:', id);
    }
  };

  const renderNotificationItem = (item: NotificationItem) => {
    const isSelected = selectedItems.includes(item.id);
    const iconContent = isSelectionMode ? (isSelected ? '✓' : '') : getNotificationIcon(item.type);
    const iconStyle: React.CSSProperties = isSelectionMode
      ? { backgroundColor: isSelected ? '#62ABFF' : '#fff', borderColor: isSelected ? '#62ABFF' : '#CFE3FF' }
      : { backgroundColor: getNotificationColor(item.type) };

    return (
      <div 
        key={item.id}
        className={`notification-item ${isSelected ? 'selected' : ''}`}
        onClick={() => handleItemClick(item.id)}
      >
        <div className="notification-icon" style={iconStyle}>
          {iconContent}
        </div>
        <div className="notification-content">
          <div className="notification-header">
            <span className="notification-title">{item.title}</span>
            <span className="notification-time">{item.time}</span>
          </div>
          <div className="notification-text">
            {item.content.split('\n').map((line, index) => (
              <div key={index} className="notification-line">{line}</div>
            ))}
          </div>
        </div>
        <div className="notification-arrow">→</div>
      </div>
    );
  };

  return (
    <div className="sub-page">
      <SubVisual
        title="마이페이지"
        breadcrumbs={[
          { label: 'HOME', href: '/', isHome: true },
          { label: '마이페이지' },
          { label: '알림', isActive: true },
        ]}
        backgroundImage={getImagePath('images/sub/sub_visual_3.png')}
      />

      <div className="sub-content">
        <SubLeftMenu
          title="마이페이지"
          menuItems={[
            { id: 'mypage-noti', label: '알림', href: '#notification', isActive: true, path: '/notification' },
            { id: 'mypage-inquiry', label: '문의하기', href: '#inquiry', path: '/inquiry' },
          ]}
          backgroundImage={getImagePath('images/sub/sub_side_bg_3.png')}
        />

        <div className="sub-content-wrap">
          <div className="sub-content-header">
            <h2>알림</h2>
          </div>

          <div className="sub-content-main">
            <div className={`notification-page ${isSelectionMode ? 'selection-mode' : ''}`}>
              <div className="notification-section">
                <div className="section-header">
                  <h2>오늘 받은 알림</h2>
                  {!isSelectionMode ? (
                    <div className="default-buttons">
                      <button className="btn-select" onClick={handleSelectionMode}>
                        삭제
                      </button>
                      {/* <button className="btn-select-all" onClick={handleSelectAll}>
                        전체 선택
                      </button> */}
                    </div>
                  ) : (
                    <div className="action-buttons">
                      <button className="btn-delete-selected" onClick={handleDeleteSelected}>
                        선택 삭제
                      </button>
                      <button className="btn-delete-all" onClick={handleDeleteAll}>
                        전체 삭제
                      </button>
                      <button className="btn-cancel" onClick={handleCancel}>
                        취소
                      </button>
                    </div>
                  )}
                </div>
                <div className="notification-list">
                  {todayNotifications.map(renderNotificationItem)}
                </div>
              </div>

              <div className="notification-section">
                <div className="section-header">
                  <h2>이전 알림</h2>
                </div>
                <div className="notification-list">
                  {previousNotifications.map(renderNotificationItem)}
                </div>
              </div>

              <div className="pagination">
                <button className="page-btn prev">←</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <span className="page-ellipsis">...</span>
                <button className="page-btn next">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
