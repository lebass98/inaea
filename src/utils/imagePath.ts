/**
 * Next.js public 폴더 기준으로 이미지 경로를 반환하는 유틸리티 함수
 */
export const getImagePath = (imagePath: string): string => {
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};
