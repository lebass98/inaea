import React from 'react';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';
import './Header.css';

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface UserInfo {
  name: string;
  role: 'parent' | 'student' | 'teacher';
}

export interface HeaderProps {
  navigationItems?: NavigationItem[];
  userInfo?: UserInfo;
  notificationCount?: number;
  onLogout?: () => void;
  onRoleChange?: (role: string) => void;
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  navigationItems = [
    { label: '평가소개', href: '/' },
    { label: '체험하기', href: '/' },
    { label: '정보마당', href: '/infocenter' },
    { label: '소통하기', href: '/notice' },
    { label: '마이페이지', href: '/notification' }
  ],
  userInfo = { name: '강부모님', role: 'parent' },
  notificationCount = 1,
  onLogout,
  onRoleChange,
  onNotificationClick,
  onMenuClick,
  className = ''
}) => {
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRoleChange?.(e.target.value);
  };

  const handleLogout = () => {
    onLogout?.();
  };

  const handleNotificationClick = () => {
    onNotificationClick?.();
  };

  const handleMenuClick = () => {
    onMenuClick?.();
  };

  const headerClasses = ['header', className].filter(Boolean).join(' ');
  
  return (
    <header className={headerClasses}>
      <div className="header-inner">
        {/* Logo Section */}
        <div className="header__logo">
          <Link href="/" className="logo-link">
            <img 
              src={getImagePath('images/common/inaea_top_logo.svg')} 
              alt="Inaea" 
              className="logo-image"
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="header__navigation">
          <ul className="nav-gnb">
            {navigationItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link 
                  href={item.href}
                  className={`nav-link ${item.isActive ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Controls */}
        <div className="header__controls">
          {/* User Info */}
          <div className="user-info">
            <span className="user-name">{userInfo.name}</span>
            <select 
              className="role-selector"
              value={userInfo.role}
              onChange={handleRoleChange}
            >
              <option value="parent">학부모</option>
              <option value="student">학생</option>
              <option value="teacher">교사</option>
            </select>
            <span className="separator">|</span>
            <button 
              className="logout-button"
              onClick={handleLogout}
              type="button"
            >
              로그아웃
            </button>
          </div>

          {/* Utility Controls */}
          <div className="utility-controls">
            <button 
              className="notification-button"
              onClick={handleNotificationClick}
              type="button"
              aria-label="알림"
            >
              <img 
                src={getImagePath('images/icons/icon_header_alram.svg')} 
                alt="알림" 
                className="notification-icon"
              />
              {notificationCount > 0 && (
                <span className="notification-badge">{notificationCount}</span>
              )}
            </button>
            
            <button 
              className="menu-button"
              onClick={handleMenuClick}
              type="button"
              aria-label="메뉴"
            >
              <img 
                src={getImagePath('images/icons/icon_header_ham.svg')} 
                alt="메뉴" 
                className="menu-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
