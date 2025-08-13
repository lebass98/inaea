import React from 'react';
import './SubLeftMenu.css';

interface SubLeftMenuProps {
  title: string;
  menuItems: {
    id: string;
    label: string;
    href: string;
    isActive?: boolean;
  }[];
  backgroundImage?: string;
}

const SubLeftMenu: React.FC<SubLeftMenuProps> = ({ title, menuItems, backgroundImage = '/images/sub/sub_side_bg.svg' }) => {
  return (
    <div className="sub-sidebar">
      <div className="sub-sidebar-inner">
        <h3 style={{ backgroundImage: `url(${backgroundImage})` }}>{title}</h3>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                className={`sidebar-link ${item.isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubLeftMenu;
