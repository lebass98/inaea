import React from 'react';
import Link from 'next/link';
import { getImagePath } from '../../utils/imagePath';
import './Footer.css';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  socialLinks?: FooterLink[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  sections = [
    {
      title: '평가소개',
      links: [
        { label: '평가소개', href: '/' },
        { label: '체험하기', href: '/' }
      ]
    },
    {
      title: '정보마당',
      links: [
        { label: '정보마당', href: '/infocenter' },
        { label: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: '소통하기',
      links: [
        { label: '공지사항', href: '/notice' },
        { label: '문의하기', href: '/inquiry' }
      ]
    }
  ],
  copyright = '© 2024 Inaea. All rights reserved.',
  socialLinks = [],
  className = ''
}) => {
  const renderLink = (link: FooterLink) => {
    if (link.external) {
      return (
        <a 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          {link.label}
        </a>
      );
    }
    
    return (
      <Link href={link.href} className="footer-link">
        {link.label}
      </Link>
    );
  };

  const footerClasses = ['footer', className].filter(Boolean).join(' ');
  
  return (
    <footer className={footerClasses}>
      <div className="footer-inner">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Logo Section */}
          <div className="footer__logo">
            <Link href="/" className="footer-logo-link">
              <img 
                src={getImagePath('images/common/footer-logo_inaea.svg')} 
                alt="Inaea" 
                className="footer-logo-image"
              />
            </Link>
          </div>

          {/* Footer Sections */}
          <div className="footer__sections">
            {sections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="footer-section__title">{section.title}</h3>
                <ul className="footer-section__links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="footer-section__item">
                      {renderLink(link)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="footer__social">
              <h4 className="footer-social__title">Follow Us</h4>
              <div className="footer-social__links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social__link"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>{copyright}</p>
          </div>
          
          <div className="footer__partners">
            <img 
              src={getImagePath('images/common/footer-logo_edu.svg')} 
              alt="교육부" 
              className="partner-logo"
            />
            <img 
              src={getImagePath('images/common/footer-logo_kice.svg')} 
              alt="한국교육과정평가원" 
              className="partner-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
