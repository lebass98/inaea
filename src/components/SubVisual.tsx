import React from 'react';
import { getImagePath } from '../utils/imagePath';
import './SubVisual.css';

interface SubVisualProps {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
    isHome?: boolean;
    isActive?: boolean;
  }[];
  backgroundImage?: string;
}

const SubVisual: React.FC<SubVisualProps> = ({ 
  title, 
  breadcrumbs, 
  backgroundImage = getImagePath('images/sub/sub_visual_4_1.svg')
}) => {
  return (
    <div className="visual-section">
      <div 
        className="visual-content"
        style={{ backgroundImage: `url(${backgroundImage || getImagePath('images/sub/sub_visual_4_1.svg')})` }}
      >
        <div className="visual-content-text">
          <h1>{title}</h1>
          <ul className="bread-crumb">
            {breadcrumbs.map((crumb, index) => (
              <li 
                key={index} 
                className={crumb.isHome ? 'bread-crumb-home' : crumb.isActive ? 'bread-crumb-active' : ''}
              >
                {crumb.href ? (
                  <a href={crumb.href}>
                    <span>{crumb.label}</span>
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubVisual;
