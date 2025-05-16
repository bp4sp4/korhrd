"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import { User, TrendingUp, Handshake } from "lucide-react";
import BannerSlider from "@/components/home/swiper";
import CountUp from "@/components/home/CountUp";
import { jobList, Job } from "@/data/jobList";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [moveLogo, setMoveLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // 로고 애니메이션 효과
  useEffect(() => {
    // 0.5초 후에 로고 표시
    const showTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // 2초 후에 로고 이동
    const moveTimer = setTimeout(() => {
      setMoveLogo(true);
    }, 2000);

    // 3초 후에 콘텐츠 표시
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(moveTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animated]);

  const testimonials = [
    {
      text: "경력성장의 이력서 클리닉 서비스를 통해 10년간의 경력 공백에도 불구하고 원하던 직장에 취업할 수 있었습니다. 전문가의 조언이 정말 큰 도움이 되었습니다.",
      author: "김미영",
      position: "사회복지사, 45세",
    },
    {
      text: "직장을 옮기고 싶었지만 자신감이 없었는데, 경력성장의 맞춤형 컨설팅 덕분에 더 좋은 조건의 회사로 이직할 수 있었습니다. 특히 면접 준비 과정이 큰 도움이 되었습니다.",
      author: "박준호",
      position: "교육 컨설턴트, 52세",
    },
    {
      text: "지역별 취업처 매칭 서비스로 집 근처에 있는 좋은 일자리를 찾을 수 있었습니다. 이제 출퇴근 시간도 줄고 업무 만족도도 높아졌어요!",
      author: "이수진",
      position: "평생교육사, 47세",
    },
  ];

  const stats = [
    { number: 98, suffix: "%", text: "취업 성공률" },
    { number: 300, suffix: "+", text: "취업 성공 사례" },
    { number: 100, suffix: "+", text: "협력 기관" },
    { number: 6, suffix: "년", text: "경력 컨설팅 노하우" },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTestimonial((c) => (c + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed z-50 transition-all duration-1000 ${
          !showLogo
            ? "hidden"
            : moveLogo
            ? "top-4 left-44 text-xl"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="한평생교육원 로고"
            width={40}
            height={40}
            className={`transition-all duration-1000 ${
              moveLogo ? "w-[30px] h-[30px]" : "w-[40px] h-[40px]"
            }`}
          />
          <span className="font-bold text-blue-600">한평생교육원</span>
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="section-home" id="job-section-home">
          <div className="container-home">
            <BannerSlider />
            <div className="recommended-jobs-home">
              <div className="section-header-home">
                <h2 className="section-title-alt-home font-bold">
                  지역별 취업처 매칭 추천 기관
                </h2>
                <Link href="/matching" className="view-all-home">
                  전체보기 <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              <div className="job-cards-home">
                {jobList.map((job) => (
                  <div className="job-card-home" key={job.id}>
                    <div className="job-logo-home">
                      <img
                        src={job.logo}
                        alt="회사 로고"
                        className="logo-img-home"
                      />{" "}
                      <div className="company-info-home">
                        <h3 className="font-bold">{job.company}</h3>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <div className="job-details-home">
                      <div className="job-position-home">{job.position}</div>
                      <div className="job-meta-home">
                        <span>
                          <i className="fas fa-won-sign"></i> {job.salary}
                        </span>{" "}
                        <span>
                          <i className="fas fa-briefcase"></i> {job.experience}
                        </span>
                      </div>
                      <div className="job-tags-home">
                        {job.tags.map((tag) => (
                          <div className="job-tag-home" key={tag}>
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="job-deadline-home">
                        마감일 : {job.deadline}
                      </div>
                    </div>
                    <div
                      className={`d-day-home ${
                        parseInt(job.dday.replace("D-", "")) <= 10
                          ? "urgent"
                          : parseInt(job.dday.replace("D-", "")) <= 20
                          ? "warning"
                          : parseInt(job.dday.replace("D-", "")) <= 30
                          ? "normal"
                          : "far"
                      }`}
                    >
                      {job.dday}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section-home features-home">
          <div className="container-home">
            <h2 className="section-title-home font-bold">
              한평생교육원의 특별한 장점
            </h2>
            <div className="features-grid-home">
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <User size={36} />
                </div>
                <h3 className="feature-title-home">전문가의 맞춤 가이드</h3>
                <p className="feature-text-home-desc">
                  10년 이상의 채용 경험을 가진 전문가들이 맞춤형 서비스를
                  제공합니다.
                </p>
              </div>
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <TrendingUp size={36} />
                </div>
                <h3 className="feature-title-home">최신 취업 트렌드 반영</h3>
                <p className="feature-text-home-desc">
                  급변하는 취업 시장의 트렌드를 실시간으로 반영한 최신 자료를
                  제공합니다.
                </p>
              </div>
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <Handshake size={36} />
                </div>
                <h3 className="feature-title-home">맞춤형 진로 상담</h3>
                <p className="feature-text-home-desc">
                  개인의 강점과 경력에 맞는 맞춤형 진로 상담으로 최적의 방향을
                  제시합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-home" ref={statsRef}>
          <div className="container-home">
            <h2 className="stats-title-home">한평생교육원이 만들어낸 성과</h2>
            <div className="stats-grid-home">
              {stats.map((stat, index) => (
                <div className="stat-item-home" key={index}>
                  <div className="stat-number-home">
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix}
                      shouldAnimate={animated}
                    />
                  </div>
                  <div className="stat-text-home-desc">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-home testimonials-home">
          <div className="container-home">
            <h2 className="section-title-home font-bold">성공 사례</h2>
            <div className="testimonial-slider-home">
              <BlurFade key={currentTestimonial} direction="up" duration={0.7}>
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto text-center">
                  <div className="text-2xl text-blue-700 font-semibold mb-4">
                    “{testimonials[currentTestimonial].text}”
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="font-bold">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section className="section-home partners-home">
          <div className="container-home">
            <h2 className="section-title-home font-bold">협력 기관</h2>
            <div className="partners-grid-home">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="partner-item-home">
                  <img
                    src={`https://via.placeholder.com/130x70.png?text=기관${num}`}
                    alt={`협력기관 로고 ${num}`}
                    className="partner-img-home"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
