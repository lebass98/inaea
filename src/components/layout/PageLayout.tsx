import React from 'react';
import { Header, Footer, Sidebar } from './index';
import { HeaderProps, FooterProps, SidebarProps } from './index';
import './PageLayout.css';

export interface PageLayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  sidebarProps?: SidebarProps;
  showHeader?: boolean;
  showFooter?: boolean;
  showSidebar?: boolean;
  sidebarPosition?: 'left' | 'right';
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  headerProps,
  footerProps,
  sidebarProps,
  showHeader = true,
  showFooter = true,
  showSidebar = false,
  sidebarPosition = 'left',
  className = ''
}) => {
  const baseClass = 'page-layout';
  const layoutClasses = [baseClass, className].filter(Boolean).join(' ');

  const renderSidebar = () => {
    if (!showSidebar || !sidebarProps) return null;

    return (
      <Sidebar 
        {...sidebarProps}
        className={`page-sidebar page-sidebar--${sidebarPosition}`}
      />
    );
  };

  return (
    <div className={layoutClasses}>
      {/* Header */}
      {showHeader && (
        <Header {...headerProps} className="page-header" />
      )}

      {/* Main Content Area */}
      <div className="page-main">
        {/* Left Sidebar */}
        {showSidebar && sidebarPosition === 'left' && renderSidebar()}

        {/* Main Content */}
        <main className="page-content">
          {children}
        </main>

        {/* Right Sidebar */}
        {showSidebar && sidebarPosition === 'right' && renderSidebar()}
      </div>

      {/* Footer */}
      {showFooter && (
        <Footer {...footerProps} className="page-footer" />
      )}
    </div>
  );
};

export default PageLayout;
