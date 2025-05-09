"use client";
import React, { useState } from "react";
import { interviewTabs } from "@/data/interviewQuestions";
import "./interview.css";

export default function InterviewTabs() {
  const [activeTab, setActiveTab] = useState(interviewTabs[0].key);

  const currentTab = interviewTabs.find((tab) => tab.key === activeTab);

  return (
    <div>
      {/* 탭 영역 */}
      <div className="interview-tab-bar">
        {interviewTabs.map((tab) => (
          <button
            key={tab.key}
            className={`interview-tab${
              activeTab === tab.key ? " selected" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <img
              src={tab.image}
              alt={tab.label}
              style={{ width: 60, height: 60, borderRadius: "50%" }}
            />
            <div style={{ marginTop: "0.5rem" }}>{tab.label}</div>
          </button>
        ))}
      </div>

      {/* 질문/답변 카드 */}
      <div className="interview-qa-grid">
        {currentTab?.questions.map((item, idx) => (
          <div key={idx} className="interview-qa-card">
            <div className="interview-q">{item.q}</div>
            <div className="interview-a">{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
