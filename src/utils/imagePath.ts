/**
 * 환경에 따라 적절한 이미지 경로를 반환하는 유틸리티 함수
 * 개발 환경: /images/...
 * 빌드 환경: ./images/...
 */
export const getImagePath = (imagePath: string): string => {
  // 개발 환경인지 확인 (import.meta.env.DEV는 Vite에서 제공하는 환경 변수)
  if (import.meta.env.DEV) {
    // 개발 환경에서는 절대 경로 사용
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  } else {
    // 빌드 환경에서는 상대 경로 사용
    return imagePath.startsWith('./') ? imagePath : `./${imagePath}`;
  }
};
