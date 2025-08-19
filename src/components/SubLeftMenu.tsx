'use client';
import React from 'react';
import Link from 'next/link';
import { getImagePath } from '../utils/imagePath';
import './SubLeftMenu.css';

interface SubLeftMenuProps {
	title: string;
	menuItems: {
		id: string;
		label: string;
		href: string;
		isActive?: boolean;
		path?: string;
	}[];
	backgroundImage?: string;
}

const SubLeftMenu: React.FC<SubLeftMenuProps> = ({ title, menuItems, backgroundImage = getImagePath('images/sub/sub_side_bg.svg') }) => {
	return (
		<div className="sub-sidebar">
			<div className="sub-sidebar-inner">
				<h3 style={{ backgroundImage: `url(${backgroundImage || getImagePath('images/sub/sub_side_bg.svg')})` }}>{title}</h3>
				<ul>
					{menuItems.map((item) => (
						<li key={item.id}>
							{item.path ? (
								<Link 
									href={item.path}
									className={`sidebar-link ${item.isActive ? 'active' : ''}`}
								>
									{item.label}
								</Link>
							) : (
								<a 
									href={item.href} 
									className={`sidebar-link ${item.isActive ? 'active' : ''}`}
								>
									{item.label}
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SubLeftMenu;
