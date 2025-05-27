"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

// 면접 질문/답변 데이터 (21.dev 예시)
const interviewTabs = [
  {
    id: "general",
    icon: <BookOpen className="h-5 w-5" />,
    label: "일반 질문",
    questions: [
      {
        id: "q1",
        question: "자신을 소개해 주세요.",
        answer:
          "저는 5년 경력의 프론트엔드 개발자로, 사용자 중심 UI/UX에 집중하여 작업합니다. React와 TypeScript를 주로 사용하며 최신 웹 기술 트렌드를 항상 학습하고 있습니다.",
      },
      {
        id: "q2",
        question: "지원 동기가 무엇인가요?",
        answer:
          "귀사의 혁신적인 제품과 사용자 중심 접근 방식에 깊은 인상을 받았습니다. 제 기술과 경험을 활용하여 귀사의 성장에 기여하고 싶습니다.",
      },
    ],
  },
  {
    id: "it",
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    label: "IT/개발",
    questions: [
      {
        id: "it1",
        question: "React의 주요 특징은 무엇인가요?",
        answer:
          "컴포넌트 기반 구조, Virtual DOM, 단방향 데이터 흐름 등이 있습니다.",
      },
      {
        id: "it2",
        question: "REST API란 무엇인가요?",
        answer:
          "HTTP 프로토콜을 기반으로 자원을 CRUD 방식으로 관리하는 API 설계 방식입니다.",
      },
    ],
  },
  {
    id: "design",
    icon: <BookOpen className="h-5 w-5 text-pink-500" />,
    label: "디자인",
    questions: [
      {
        id: "d1",
        question: "좋은 UI란 무엇이라고 생각하나요?",
        answer:
          "사용자가 직관적으로 사용할 수 있고, 일관성 있는 디자인이 좋은 UI라고 생각합니다.",
      },
      {
        id: "d2",
        question: "포트폴리오에서 가장 자신 있는 작업은?",
        answer:
          "모바일 앱 리디자인 프로젝트로, 사용자 피드백을 반영해 UX를 크게 개선한 경험이 있습니다.",
      },
    ],
  },
  {
    id: "marketing",
    icon: <BookOpen className="h-5 w-5 text-green-500" />,
    label: "마케팅",
    questions: [
      {
        id: "m1",
        question: "SNS 마케팅의 핵심은 무엇이라고 생각하나요?",
        answer:
          "타겟 고객 분석과 꾸준한 콘텐츠 관리, 데이터 기반 전략 수립이 중요하다고 생각합니다.",
      },
      {
        id: "m2",
        question: "성과 측정은 어떻게 하나요?",
        answer:
          "KPI(도달률, 전환율 등)와 Google Analytics 등 다양한 도구를 활용합니다.",
      },
    ],
  },
  {
    id: "education",
    icon: <BookOpen className="h-5 w-5 text-yellow-500" />,
    label: "교육",
    questions: [
      {
        id: "e1",
        question: "수업 준비 시 가장 중점을 두는 부분은?",
        answer:
          "학습자의 수준과 흥미를 고려한 맞춤형 자료 준비에 중점을 둡니다.",
      },
      {
        id: "e2",
        question: "학생 동기부여 방법은?",
        answer:
          "실생활과 연계된 예시, 칭찬과 피드백, 참여형 수업을 활용합니다.",
      },
    ],
  },
  {
    id: "medical",
    icon: <BookOpen className="h-5 w-5 text-red-500" />,
    label: "의료",
    questions: [
      {
        id: "med1",
        question: "환자와의 소통에서 가장 중요한 점은?",
        answer: "공감과 경청, 그리고 정확한 정보 전달이 중요합니다.",
      },
      {
        id: "med2",
        question: "응급상황 대처 경험을 말해보세요.",
        answer:
          "응급상황에서 침착하게 매뉴얼에 따라 신속히 대응한 경험이 있습니다.",
      },
    ],
  },
];

export function InterviewQuestionsTab() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center gap-4 text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          면접 질문 & 답변 가이드
        </h1>
        <p className="max-w-[700px] text-muted-foreground">
          다양한 유형의 면접 질문과 모범 답변을 준비하여 자신감 있게 면접에
          임하세요.
        </p>
      </div>
      <Tabs defaultValue={interviewTabs[0].id} className="w-full">
        <TabsList className="flex w-full flex-wrap justify-start gap-2 rounded-xl bg-muted/50 p-1 mb-8">
          {interviewTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {interviewTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tab.questions.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border border-border bg-background transition-all hover:shadow-md"
                >
                  <CardHeader className="bg-muted/30 pb-4">
                    <CardTitle className="text-lg font-medium leading-tight">
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default function InterviewQuestionsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <InterviewQuestionsTab />
    </div>
  );
}
