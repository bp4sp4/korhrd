"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import "./clinic.css"; // Styles for this page
import { ChevronDown, FileText, User, Users, Award } from "lucide-react";
import "@/app/(main)/clinic/clinic.css";
import { AnimatedList } from "@/components/magicui/animated-list";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="faq-item-clinic active">
    <div className="faq-question-clinic">
      <span>{question}</span>
    </div>
    <div className="faq-answer-clinic">
      <p>{answer}</p>
    </div>
  </div>
);

const ClinicPage = () => {
  const resumeTemplates = [
    {
      jobType: "사회복지사용",
      features: "자격증, 경력, 봉사활동 중심 구성",
      downloads: [
        {
          format: "Word",
          icon: "fa-file-word",
          link: "/downloads/resume_template.docx",
          className: "btn-word-clinic",
        },
        {
          format: "한글",
          icon: "fa-file-alt",
          link: "/downloads/resume_template.hwp",
          className: "btn-hwp-clinic",
        }, // Assuming HWP is also needed
        {
          format: "PDF",
          icon: "fa-file-pdf",
          link: "/downloads/resume_template.pdf",
          className: "btn-pdf-clinic",
        },
      ],
    },
    {
      jobType: "보육교사",
      features: "자격증, 교육 경력, 특기 중심 구성",
      downloads: [
        {
          format: "Word",
          icon: "fa-file-word",
          link: "/downloads/resume_template.docx",
          className: "btn-word-clinic",
        },
        {
          format: "한글",
          icon: "fa-file-alt",
          link: "/downloads/resume_template.hwp",
          className: "btn-hwp-clinic",
        },
        {
          format: "PDF",
          icon: "fa-file-pdf",
          link: "/downloads/resume_template.pdf",
          className: "btn-pdf-clinic",
        },
      ],
    },
    {
      jobType: "평생교육사",
      features: "교육 프로그램 개발, 강의 경력 중심 구성",
      downloads: [
        {
          format: "Word",
          icon: "fa-file-word",
          link: "/downloads/resume_template.docx",
          className: "btn-word-clinic",
        },
        {
          format: "한글",
          icon: "fa-file-alt",
          link: "/downloads/resume_template.hwp",
          className: "btn-hwp-clinic",
        },
        {
          format: "PDF",
          icon: "fa-file-pdf",
          link: "/downloads/resume_template.pdf",
          className: "btn-pdf-clinic",
        },
      ],
    },
    {
      jobType: "한국어 교원",
      features: "어학 능력, 교육 경력, 해외 경험 중심 구성",
      downloads: [
        {
          format: "Word",
          icon: "fa-file-word",
          link: "/downloads/resume_template.docx",
          className: "btn-word-clinic",
        },
        {
          format: "한글",
          icon: "fa-file-alt",
          link: "/downloads/resume_template.hwp",
          className: "btn-hwp-clinic",
        },
        {
          format: "PDF",
          icon: "fa-file-pdf",
          link: "/downloads/resume_template.pdf",
          className: "btn-pdf-clinic",
        },
      ],
    },
  ];

  const coverLetterSamples = [
    {
      icon: <User size={36} className="clinic-icon-clinic" />, // Lucide icon
      title: "경력자용 자기소개서",
      description: "기존 경력을 효과적으로 어필하는 자기소개서 예시입니다.",
      points: [
        "주요 경력 중심 구성",
        "직무 관련 성과 강조",
        "10년 이상 경력자용",
        "5년 미만 경력자용",
      ],
      downloadLink: "/downloads/cover_letter_sample_experienced.docx",
    },
    {
      icon: <Users size={36} className="clinic-icon-clinic" />, // Lucide icon
      title: "무경력자용 자기소개서",
      description: "교육과 자격증, 잠재력을 어필하는 자기소개서 예시입니다.",
      points: [
        "전공 및 교육 중심 구성",
        "봉사활동 및 인턴십 강조",
        "신입 지원자용",
        "경력 전환자용",
      ],
      downloadLink: "/downloads/cover_letter_sample_entry.docx",
    },
    {
      // 전문가 첨삭 서비스 카드 (세 번째 칸)
      icon: (
        <div className="premium-icon" style={{ marginBottom: 0 }}>
          <FileText size={36} />
        </div>
      ),
      title: (
        <span>
          전문가 첨삭 서비스{" "}
          <span
            className="premium-badge"
            style={{
              position: "static",
              marginLeft: "0.5em",
              fontSize: "0.95em",
              verticalAlign: "middle",
            }}
          >
            유료서비스
          </span>
        </span>
      ),
      description: (
        <span>
          이력서, 자기소개서, 경력기술서까지!
          <br />
          취업 전문 컨설턴트의 1:1 맞춤 첨삭으로
          <br />
          <span className="premium-desc-highlight">
            서류 합격률을 높이세요.
          </span>
        </span>
      ),
      points: [
        <span key="benefit1">
          <span className="premium-benefit-icon">💡</span>직무 역량 및 강점 어필
          전략
        </span>,
        <span key="benefit2">
          <span className="premium-benefit-icon">🔗</span>가독성 및 논리적 흐름
          개선
        </span>,
        <span key="benefit3">
          <span className="premium-benefit-icon">📝</span>맞춤법 및 문법 교정
        </span>,
      ],
      downloadLink: undefined, // 버튼 대신 결제 버튼
      isExpertService: true,
    },
  ];

  const faqs = [
    {
      question: "공백 기간은 이력서에 어떻게 적어야 하나요?",
      answer:
        "공백 기간은 솔직하게 작성하되, 해당 기간 동안 자기계발이나 교육 등의 활동을 했다면 이를 포함시키는 것이 좋습니다. 긴 공백 기간이 있다면 간략히 그 이유를 설명하고, 그 기간 동안 습득한 기술이나 경험에 초점을 맞추는 것이 효과적입니다.",
    },
    {
      question: "자격증은 어떤 순서로 적어야 할까요?",
      answer:
        "지원하는 직무와 관련된 자격증을 우선적으로 배치하고, 취득일 순서대로 나열하는 것이 일반적입니다. 국가공인 자격증을 먼저 기재하는 것도 좋은 방법입니다.",
    },
    {
      question: "이력서 사진은 꼭 부착해야 하나요?",
      answer:
        "최근에는 직무 중심 채용이 늘면서 사진을 요구하지 않는 기업도 많습니다. 하지만, 여전히 사진을 요구하는 곳도 있으므로 채용 공고를 꼼꼼히 확인하는 것이 중요합니다. 부착한다면 단정하고 깔끔한 인상을 주는 증명사진을 사용하는 것이 좋습니다.",
    },
    {
      question: "자기소개서 성장 과정은 어떻게 작성해야 할까요?",
      answer:
        "단순한 성장 배경 나열보다는 직무와 관련된 경험이나 가치관 형성에 영향을 준 사건을 중심으로 작성하는 것이 좋습니다. 이를 통해 직무에 대한 관심과 준비 과정을 보여줄 수 있습니다.",
    },
    {
      question: "유료 첨삭 서비스는 어떻게 진행되나요?",
      answer:
        "유료 첨삭 서비스는 전문가가 직접 이력서와 자기소개서를 검토하고, 구체적인 피드백과 개선 방향을 제시해 드립니다. 결제 후 1~3일 이내에 첨삭 결과를 받아보실 수 있으며, 자세한 내용은 서비스 신청 페이지에서 확인 가능합니다. (현재 토스 결제 연동 준비 중입니다.)",
    },
    {
      question: "클리닉 서비스 이용 시 개인정보는 안전하게 관리되나요?",
      answer:
        "네, 한평생교육원은 사용자님의 개인정보를 소중하게 생각하며, 관련 법령에 따라 안전하게 관리하고 있습니다. 수집된 정보는 서비스 제공 목적으로만 활용되며, 동의 없이는 제3자에게 제공되지 않습니다.",
    },
  ];

  const handleTossPayment = useCallback(() => {
    // 1. tosspayments SDK가 window에 있는지 확인
    if (typeof window === "undefined" || !(window as any).TossPayments) {
      alert("TossPayments SDK 로드 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    // 2. 결제 정보 세팅 (테스트용)
    const tossPayments = new (window as any).TossPayments(
      process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!
    );

    tossPayments.requestPayment("카드", {
      amount: 1000,
      orderId: "orderId-" + Date.now(),
      orderName: "유료 첨삭 서비스",
      customerName: "테스트고객",
      successUrl: window.location.origin + "/payment/success",
      failUrl: window.location.origin + "/payment/fail",
    });
  }, []);

  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // 2초 후에 로고 애니메이션 시작
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Ensure Font Awesome is loaded if still used for some icons not replaced by Lucide
    const faScript = document.querySelector("script[src*='fontawesome']");
    if (!faScript) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {showLogo && (
        <div className={`logo-animation ${!showLogo ? "shrink" : ""}`}>
          한평생교육원
        </div>
      )}
      <div>
        <section className="page-header-clinic">
          <div className="container-home">
            {" "}
            <h1 className="page-title-clinic">이력서/자소서 클리닉</h1>
            <p className="page-subtitle-clinic">
              직군별 맞춤형 이력서와 자기소개서 샘플, 작성 가이드를 제공하여
              취업 성공률을 높여드립니다.
            </p>
          </div>
        </section>
        {/* Resume Templates Section */}
        <section className="section-home">
          {" "}
          <div className="container-home">
            <div className="d-flex">
              <h2 className="section-title-clinic">직군별 이력서 양식</h2>
              <p className="section-subtitle-clinic">
                각 직군에 맞는 전문적인 이력서 양식을 다운로드하고 맞춤형 서류를
                작성하세요.
              </p>
            </div>
            <table className="resume-table-clinic">
              <thead>
                <tr>
                  <th>직군</th>
                  <th>특징</th>
                  <th>다운로드</th>
                </tr>
              </thead>
              <tbody>
                {resumeTemplates.map((template) => (
                  <tr key={template.jobType}>
                    <td>{template.jobType}</td>
                    <td>{template.features}</td>
                    <td>
                      {template.downloads.map((dl) => (
                        <a
                          key={dl.format}
                          href={dl.link}
                          className={`download-btn-clinic ${dl.className}`}
                          download
                        >
                          <i className={`fas ${dl.icon}`}></i> {dl.format}
                        </a>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Cover Letter Samples + 유료 서비스 (side card) */}
        <section className="section-home coverletter-expert-grid">
          <div className="coverletter-sample-list">
            <h2 className="section-title-clinic">자기소개서 샘플</h2>
            <div className="clinic-grid-clinic">
              {coverLetterSamples.map((sample, idx) =>
                sample.isExpertService ? (
                  <div
                    key={`expert-service-card-${idx}`}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="premium-service-card">
                      <div className="premium-badge">유료서비스</div>
                      <div className="premium-icon">
                        <FileText size={48} />
                      </div>
                      <div className="premium-title">전문가 첨삭 서비스</div>
                      <div className="premium-desc">
                        이력서, 자기소개서, 경력기술서까지!
                        <br />
                        취업 전문 컨설턴트의 1:1 맞춤 첨삭으로
                        <br />
                        <span className="premium-desc-highlight">
                          서류 합격률을 높이세요.
                        </span>
                      </div>
                      <div className="premium-benefit-list">
                        <div className="premium-benefit-item">
                          <span className="premium-benefit-icon">💡</span>
                          <span>직무 역량 및 강점 어필 전략</span>
                        </div>
                        <div className="premium-benefit-item">
                          <span className="premium-benefit-icon">🔗</span>
                          <span>가독성 및 논리적 흐름 개선</span>
                        </div>
                        <div className="premium-benefit-item">
                          <span className="premium-benefit-icon">📝</span>
                          <span>맞춤법 및 문법 교정</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="premium-btn"
                        onClick={handleTossPayment}
                      >
                        유료 첨삭 신청하기 (테스트 결제)
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    key={
                      typeof sample.title === "string"
                        ? sample.title
                        : `cover-letter-card-${idx}`
                    }
                    className="clinic-card-clinic card-home"
                  >
                    {sample.icon}
                    <h3 className="clinic-title-clinic">{sample.title}</h3>
                    <p>{sample.description}</p>
                    <ul className="clinic-list-clinic">
                      {sample.points.map((point, i) => (
                        <li key={`point-${idx}-${i}`}>
                          {typeof point === "string" ? (
                            <>
                              <i className="fas fa-check"></i> {point}
                            </>
                          ) : (
                            point
                          )}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={sample.downloadLink}
                      className="btn-home btn-primary-home"
                      download
                    >
                      샘플 다운로드
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="section-home guidelines-clinic">
          <div className="container-home">
            <h2 className="section-title-clinic">
              이력서 & 자기소개서 작성 가이드북
            </h2>
            <div className="guideline-content-clinic">
              <div className="guideline-section-clinic">
                <h3 className="guideline-title-clinic">
                  효과적인 이력서 작성 방법
                </h3>
                <p className="guideline-text-clinic">
                  이력서는 자신을 어필하는 첫 번째 도구입니다. 다음 가이드라인을
                  참고하여 효과적인 이력서를 작성하세요.
                </p>
                <ul className="guideline-list-clinic">
                  <li>간결하고 명확한 문장으로 작성하세요.</li>
                  <li>성과와 업적은 구체적인 숫자와 데이터로 표현하세요.</li>
                  <li>직무와 관련된 핵심 역량을 강조하세요.</li>
                  <li>최신 정보부터 역순으로 작성하세요.</li>
                  <li>오탈자와 문법 오류가 없는지 꼼꼼히 확인하세요.</li>
                </ul>
                <div className="tip-box-clinic">
                  <div className="tip-title-clinic">유용한 팁</div>
                  <p className="tip-text-clinic">
                    이력서를 제출하기 전에 반드시 해당 기관이나 회사의
                    요구사항을 확인하세요. 양식이나 제출 방법이 다를 수
                    있습니다.
                  </p>
                </div>
              </div>

              <div className="guideline-section-clinic">
                <h3 className="guideline-title-clinic">
                  자기소개서 작성 체크리스트
                </h3>
                <p className="guideline-text-clinic">
                  자기소개서는 이력서에서 드러나지 않는 자신의 역량과 성격을
                  보여주는 중요한 문서입니다.
                </p>
                <ul className="guideline-list-clinic">
                  <li>지원하는 직무나 기관에 대한 이해를 보여주세요.</li>
                  <li>
                    자신만의 강점과 특징을 구체적인 사례와 함께 작성하세요.
                  </li>
                  <li>
                    추상적인 표현보다 구체적인 경험을 중심으로 작성하세요.
                  </li>
                  <li>성공 경험뿐만 아니라 실패를 극복한 경험도 포함하세요.</li>
                  <li>지원 동기와 미래 계획을 명확히 제시하세요.</li>
                </ul>
                <div className="tip-box-clinic">
                  <div className="tip-title-clinic">유용한 팁</div>
                  <p className="tip-text-clinic">
                    자기소개서는 단순한 이력 나열이 아닌, 그 속에서 자신의
                    가치관과 역량이 드러나도록 작성하는 것이 중요합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="section-home faq-clinic">
          <div className="container-home">
            <h2 className="section-title-clinic">자주 묻는 질문</h2>
            <div className="faq-grid-clinic">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClinicPage;
