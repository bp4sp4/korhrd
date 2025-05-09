import "@/app/home.css";

const Footer = () => {
  return (
    <footer className="footer-home">
      <div className="footer-content-home">
        {/* 회사소개 */}
        <div>
          <div className="footer-logo-home">
            한평생<span>교육원</span>
          </div>
          <div className="footer-text-home">
            맞춤형 이력서 클리닉과 지역별 취업처 매칭을 통해<br></br> 더 나은
            직업 기회를 찾아보세요.
          </div>
          <div className="footer-social-home">
            <a href="#" className="social-link-home" aria-label="페이스북">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link-home" aria-label="트위터">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link-home" aria-label="인스타그램">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link-home" aria-label="유튜브">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* 바로가기 */}
        <div>
          <div className="footer-title-home" style={{ marginBottom: "1.5rem" }}>
            바로가기
          </div>
          <ul className="footer-links-home">
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <a href="/clinic">이력서/자소서 클리닉</a>
            </li>
            <li>
              <a href="/about">소개</a>
            </li>
            <li>
              <a href="/#contact-placeholder">문의하기</a>
            </li>
          </ul>
        </div>
        {/* 연락처 */}
        <div>
          <div className="footer-title-home" style={{ marginBottom: "1.5rem" }}>
            연락처
          </div>
          <ul className="footer-contact-home">
            <li>
              <i className="fas fa-map-marker-alt"></i> 서울시 강남구 테헤란로
              123
            </li>
            <li>
              <i className="fas fa-phone"></i> 02-123-4567
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@hanpyeong.kr
            </li>
            <li>
              <i className="fas fa-clock"></i> 평일 09:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-home">
        &copy; {new Date().getFullYear()} 한평생교육원. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
