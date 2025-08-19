import React from 'react';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';
import './Sidebar.css';

export interface SidebarMenuItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
  children?: SidebarMenuItem[];
}

export interface SidebarProps {
  title: string;
  menuItems: SidebarMenuItem[];
  backgroundImage?: string;
  variant?: 'default' | 'compact' | 'expanded';
  showIcons?: boolean;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  onMenuItemClick?: (item: SidebarMenuItem) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  title,
  menuItems,
  backgroundImage = getImagePath('images/sub/sub_side_bg.svg'),
  variant = 'default',
  showIcons = false,
  collapsible = false,
  defaultCollapsed = false,
  onMenuItemClick,
  className = ''
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const handleToggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleMenuItemClick = (item: SidebarMenuItem) => {
    onMenuItemClick?.(item);
  };

  const renderMenuItem = (item: SidebarMenuItem) => {
    const isActive = item.isActive;
    const hasChildren = item.children && item.children.length > 0;

    const menuItemContent = (
      <>
        {showIcons && item.icon && (
          <span className="sidebar-item__icon">{item.icon}</span>
        )}
        <span className="sidebar-item__label">{item.label}</span>
        {item.badge && (
          <span className="sidebar-item__badge">{item.badge}</span>
        )}
        {hasChildren && (
          <span className="sidebar-item__arrow">▼</span>
        )}
      </>
    );

    if (hasChildren) {
      return (
        <div key={item.id} className="sidebar-item sidebar-item--has-children">
          <div className="sidebar-item__header">
            {menuItemContent}
          </div>
          <ul className="sidebar-item__children">
            {item.children!.map(child => renderMenuItem(child))}
          </ul>
        </div>
      );
    }

    return (
      <li key={item.id} className="sidebar-item">
        <Link 
          href={item.href}
          className={`sidebar-item__link ${isActive ? 'sidebar-item__link--active' : ''}`}
          onClick={() => handleMenuItemClick(item)}
        >
          {menuItemContent}
        </Link>
      </li>
    );
  };

  const baseClass = 'sidebar';
  const variantClass = `sidebar--${variant}`;
  const collapsedClass = isCollapsed ? 'sidebar--collapsed' : '';
  
  const sidebarClasses = [
    baseClass,
    variantClass,
    collapsedClass,
    className
  ].filter(Boolean).join(' ');

  const finalSidebarClasses = [sidebarClasses, className].filter(Boolean).join(' ');
  
  return (
    <aside className={finalSidebarClasses}>
      <div className="sidebar-inner">
        {/* Header */}
        <div 
          className="sidebar__header"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            cursor: collapsible ? 'pointer' : 'default'
          }}
          onClick={handleToggleCollapse}
        >
          <h3 className="sidebar__title">{title}</h3>
          {collapsible && (
            <button 
              className="sidebar__toggle"
              onClick={handleToggleCollapse}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? '▶' : '◀'}
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="sidebar__navigation">
          <ul className="sidebar__menu">
            {menuItems.map(renderMenuItem)}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
