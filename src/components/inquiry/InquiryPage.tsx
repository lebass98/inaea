'use client';
import React, { useState } from 'react';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';

interface InquiryForm {
  category1: string;
  category2: string;
  title: string;
  content: string;
  attachments: File[];
}

const InquiryPage: React.FC = () => {
  const [formData, setFormData] = useState<InquiryForm>({
    category1: '평가신청',
    category2: '자율평가 시행 신청 일정 또는 교과/설문 변경',
    title: '',
    content: '',
    attachments: []
  });

  // 사이드바 메뉴 데이터
  const sidebarMenuItems = [
    { id: 'notice', label: '공지사항', href: '#notice', isActive: false, path: '/notice' },
    { id: 'faq', label: 'FAQ', href: '#faq', isActive: false, path: '/faq' },
    { id: 'inquiry', label: '문의하기', href: '#inquiry', isActive: true, path: '/inquiry' }
  ];

  // 비주얼 섹션 데이터
  const visualData = {
    title: '소통하기',
    breadcrumbs: [
      { label: 'HOME', href: '/', isHome: true },
      { label: '소통하기' },
      { label: '문의하기', isActive: true }
    ]
  };

  // 카테고리 옵션
  const category1Options = [
    { value: '평가신청', label: '평가신청' },
    { value: '시스템문의', label: '시스템문의' },
    { value: '기타문의', label: '기타문의' }
  ];

  const category2Options = {
    '평가신청': [
      '자율평가 시행 신청 일정 또는 교과/설문 변경',
      '평가 참여 학교 신청',
      '평가 도구 신청',
      '평가 결과 분석 신청'
    ],
    '시스템문의': [
      '로그인/회원가입 문의',
      '시스템 사용법 문의',
      '기술적 오류 문의',
      '접속 문제 문의'
    ],
    '기타문의': [
      '정책 관련 문의',
      '일반 문의',
      '제안사항',
      '기타'
    ]
  };

  const handleCategory1Change = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category1: value,
      category2: category2Options[value as keyof typeof category2Options][0]
    }));
  };

  const handleCategory2Change = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category2: value
    }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      title: e.target.value
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      content: e.target.value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (formData.attachments.length + files.length > 3) {
      alert('최대 3개까지만 첨부할 수 있습니다.');
      return;
    }
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleFileRemove = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('문의하기 제출:', formData);
    // 실제로는 API 호출 로직 구현
    alert('문의가 성공적으로 등록되었습니다.');
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
            <h2>문의하기</h2>
          </div>

          <div className="sub-content-main">
            <form onSubmit={handleSubmit} className="inquiry-form">
              {/* 분류 섹션 */}
              <div className="form-section">
                <label className="form-label">
                  분류 <span className="required">*</span>
                </label>
                <div className="category-selects">
                  <select
                    value={formData.category1}
                    onChange={(e) => handleCategory1Change(e.target.value)}
                    className="category-select wid-30p"
                  >
                    {category1Options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.category2}
                    onChange={(e) => handleCategory2Change(e.target.value)}
                    className="category-select flex-1"
                  >
                    {category2Options[formData.category1 as keyof typeof category2Options]?.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 제목 섹션 */}
              <div className="form-section">
                <label className="form-label">
                  제목 <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="제목을 입력해 주세요."
                  className="form-input"
                  required
                />
              </div>

              {/* 내용 섹션 */}
              <div className="form-section">
                <label className="form-label">
                  내용 <span className="required">*</span>
                </label>
                <div className="content-editor">
                  {/* <div className="editor-toolbar">
                  </div> */}
                  <textarea
                    value={formData.content}
                    onChange={handleContentChange}
                    placeholder="내용을 입력해 주세요."
                    className="content-textarea"
                    rows={15}
                    required
                  />
                </div>
              </div>

              {/* 첨부파일 섹션 */}
              <div className="form-section">
                <label className="form-label">
                  첨부파일 <span className="required">*</span> (최대 3개, 용량 10MB)
                </label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="file-input"
                    accept=".pdf,.doc,.docx,.hwp,.xls,.xlsx,.jpg,.jpeg,.png"
                  />
                  <div className="upload-placeholder">
                    <div className="upload-icon">☁️</div>
                    <div className="upload-text">Upload file</div>
                  </div>
                </div>

                {/* 첨부된 파일 목록 */}
                {formData.attachments.length > 0 && (
                  <div className="attachments-section">
                    <ul className="attachment-list">
                      {formData.attachments.map((file, index) => (
                        <li>
                          <span key={index} className="attachment-item">
                            <em className="attachment-icon"><img src={getImagePath('images/icons/icon_file-att.svg')} alt="첨부파일" /></em>
                            <span className="attachment-link">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => handleFileRemove(index)}
                              className="file-remove"
                            >
                              <img src={getImagePath('images/icons/icon_att_close.svg')} alt="첨부파일 삭제" />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 하단 안내 및 버튼 */}
              <div className="form-footer">
                <div className="form-notice">
                  *내가 등록한 글과 답변 내용은 '<a href="#" style={{textDecoration: 'underline', color: '#111'}}>MY페이지</a> &gt; <a href="#" style={{textDecoration: 'underline', color: '#111'}}>나의 문의</a>'메뉴에서 보실 수 있습니다.
                </div>
                <button type="submit" className="submit-btn">
                  저장하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
