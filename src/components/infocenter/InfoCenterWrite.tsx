'use client';
import React, { useState } from 'react';
import { useNavigate } from '../../utils/useRouter';
import { getImagePath } from '../../utils/imagePath';
import SubVisual from '../SubVisual';
import SubLeftMenu from '../SubLeftMenu';
import '../../assets/css/board.css';
import './InfoCenterWrite.css';

const InfoCenterWrite: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isImportant: false
  });
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments(prev => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 폼 검증
    if (!formData.title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }
    
    if (!formData.content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    // 실제로는 API 호출하여 저장
    console.log('공지사항 저장:', formData, attachments);
    
    // 저장 후 목록으로 이동
    alert('소통하기 글이 저장되었습니다.');
    navigate('/infocenter');
  };

  const handleCancel = () => {
    if (window.confirm('작성 중인 내용이 있습니다. 정말로 취소하시겠습니까?')) {
      navigate('/infocenter');
    }
  };

  return (
    <div className="notice-write">
      {/* 상단 비주얼 이미지 */}
      <SubVisual 
        title="소통하기 작성"
        breadcrumbs={[
          { label: 'HOME', href: '/', isHome: true },
          { label: '소통하기' },
          { label: '글쓰기', isActive: true }
        ]}
        backgroundImage={getImagePath('images/sub/sub_visual_4_1.svg')}
      />

      <div className="notice-write-content">
        <form onSubmit={handleSubmit} className="write-form">
          {/* 중요도 */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isImportant"
                checked={formData.isImportant}
                onChange={handleInputChange}
              />
              <span className="checkmark"></span>
              중요 소통하기
            </label>
          </div>

          {/* 제목 */}
          <div className="form-group">
            <label htmlFor="title">제목 <span className="required">*</span></label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-control"
              placeholder="소통하기 제목을 입력하세요"
              maxLength={200}
            />
            <div className="char-count">{formData.title.length}/200</div>
          </div>

          {/* 내용 */}
          <div className="form-group">
            <label htmlFor="content">내용 <span className="required">*</span></label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="form-control"
              rows={15}
              placeholder="소통하기 내용을 입력하세요"
            />
          </div>

          {/* 첨부파일 */}
          <div className="form-group">
            <label htmlFor="attachments">첨부파일</label>
            <input
              type="file"
              id="attachments"
              multiple
              onChange={handleFileChange}
              className="file-input"
              accept=".pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.txt,.zip"
            />
            <div className="file-help">
              지원 형식: PDF, DOC, DOCX, HWP, XLS, XLSX, PPT, PPTX, TXT, ZIP (최대 10개, 개당 10MB)
            </div>
            
            {/* 첨부파일 목록 */}
            {attachments.length > 0 && (
              <div className="attachment-list">
                <h4>첨부된 파일</h4>
                {attachments.map((file, index) => (
                  <div key={index} className="attachment-item">
                    <span className="file-icon">📎</span>
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="remove-file-btn"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 버튼 영역 */}
          <div className="form-actions">
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              취소
            </button>
            <div className="action-buttons">
              <button type="button" className="btn btn-outline">
                임시저장
              </button>
              <button type="submit" className="btn btn-primary">
                등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoCenterWrite;
