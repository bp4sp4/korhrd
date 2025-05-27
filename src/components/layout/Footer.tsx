import "@/app/home.css";

const Footer = () => {
  return (
    <footer className="footer-home bg-gradient-to-r from-blue-800 to-blue-400 text-white">
      <div className="footer-content-home max-w-[1200px] mx-auto flex flex-wrap justify-between py-10 px-4 gap-8">
        {/* 회사소개 */}
        <div>
          <div className="footer-logo-home text-2xl font-bold mb-2">
            한평생<span className="text-yellow-200">교육원</span>
          </div>
          <div className="footer-text-home mb-4 text-white/90">
            맞춤형 이력서 클리닉과 지역별 취업처 매칭을 통해
            <br />더 나은 직업 기회를 찾아보세요.
          </div>
          <div className="footer-social-home flex space-x-3 mt-2">
            <a
              href="#"
              className="social-link-home hover:text-yellow-200"
              aria-label="페이스북"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="social-link-home hover:text-yellow-200"
              aria-label="트위터"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="social-link-home hover:text-yellow-200"
              aria-label="인스타그램"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="social-link-home hover:text-yellow-200"
              aria-label="유튜브"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* 바로가기 */}
        <div>
          <div className="footer-title-home text-lg font-bold mb-4 text-yellow-200">
            바로가기
          </div>
          <ul className="footer-links-home space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-200">
                홈
              </a>
            </li>
            <li>
              <a href="/clinic" className="hover:text-yellow-200">
                이력서/자소서 클리닉
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-200">
                소개
              </a>
            </li>
            <li>
              <a href="/#contact-placeholder" className="hover:text-yellow-200">
                문의하기
              </a>
            </li>
          </ul>
        </div>
        {/* 연락처 */}
        <div>
          <div className="footer-title-home text-lg font-bold mb-4 text-yellow-200">
            연락처
          </div>
          <ul className="footer-contact-home space-y-2">
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i> 서울시 강남구
              테헤란로 123
            </li>
            <li>
              <i className="fas fa-phone mr-2"></i> 02-123-4567
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i> info@hanpyeong.kr
            </li>
            <li>
              <i className="fas fa-clock mr-2"></i> 평일 09:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-home text-center py-4 bg-blue-900/80 text-white/80 text-sm">
        &copy; {new Date().getFullYear()} 한평생교육원. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
