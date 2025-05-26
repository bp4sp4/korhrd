"use client";

import React, { useState } from "react";
import "./clinic.css";
import { ChevronDown, FileText, User, Users } from "lucide-react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item-clinic${open ? " active" : ""}`}>
      <button
        className="faq-question-clinic"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          style={{
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </button>
      <div className="faq-answer-clinic">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const ClinicPage = () => {
  const resumeTemplates = [
    {
      jobType: "사회복지사용",
      features: "자격증, 경력, 봉사활동 중심 구성",
      downloads: [
        {
          format: "Word",
          icon: "fa-file-word",
          link: "/downloads/사회복지사용_자기소개서.hwp",
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
      icon: <User size={36} className="clinic-icon-clinic" />,
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
      icon: <Users size={36} className="clinic-icon-clinic" />,
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
      icon: (
        <div className="premium-icon">
          <FileText size={36} />
        </div>
      ),
      title: (
        <span>
          전문가 첨삭 서비스 <span className="premium-badge">유료서비스</span>
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
        "유료 첨삭 서비스는 전문가가 직접 이력서와 자기소개서를 검토하고, 구체적인 피드백과 개선 방향을 제시해 드립니다. 결제 후 1~3일 이내에 첨삭 결과를 받아보실 수 있으며, 자세한 내용은 서비스 신청 페이지에서 확인 가능합니다.",
    },
    {
      question: "클리닉 서비스 이용 시 개인정보는 안전하게 관리되나요?",
      answer:
        "네, 한평생교육원은 사용자님의 개인정보를 소중하게 생각하며, 관련 법령에 따라 안전하게 관리하고 있습니다. 수집된 정보는 서비스 제공 목적으로만 활용되며, 동의 없이는 제3자에게 제공되지 않습니다.",
    },
  ];

  return (
    <div>
      <section className="page-header-clinic">
        <div className="container-home">
          <h1 className="page-title-clinic">이력서/자소서 클리닉</h1>
          <p className="page-subtitle-clinic">
            직군별 맞춤형 이력서와 자기소개서 샘플, 작성 가이드를 제공하여 취업
            성공률을 높여드립니다.
          </p>
        </div>
      </section>

      <section className="section-home">
        <div className="container-home">
          <h2 className="section-title-clinic">직군별 이력서 양식</h2>
          <p className="section-subtitle-clinic">
            각 직군에 맞는 전문적인 이력서 양식을 다운로드하고 맞춤형 서류를
            작성하세요.
          </p>
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

      <section className="section-home">
        <div className="container-home">
          <h2 className="section-title-clinic">자기소개서 샘플</h2>
          <div className="clinic-grid-clinic">
            {coverLetterSamples.map((sample, idx) =>
              sample.isExpertService ? (
                <div
                  key={`expert-service-card-${idx}`}
                  className="premium-service-card"
                >
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
                  <button type="button" className="premium-btn">
                    유료 첨삭 신청하기
                  </button>
                </div>
              ) : (
                <div
                  key={
                    typeof sample.title === "string"
                      ? sample.title
                      : `cover-letter-card-${idx}`
                  }
                  className="clinic-card-clinic"
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
  );
};

export default ClinicPage;
