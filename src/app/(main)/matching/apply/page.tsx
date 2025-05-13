"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  Briefcase,
  User,
  Mail,
  Phone,
  FileText,
  CheckSquare,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const ApplicationFormContent = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const hasExistingApp = searchParams.get("hasApp") === "true";

  const [formData, setFormData] = useState({
    name: "김철수", // Pre-fill for demo
    email: "chulsoo.kim@example.com", // Pre-fill for demo
    phone: "010-1234-5678", // Pre-fill for demo
    resumeFile: null as File | null,
    coverLetter: "",
    agreedToTerms: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (hasExistingApp) {
      // In a real app, fetch existing application data here
      console.log(
        "User has existing application data for a similar job. Pre-filling form (simulated)."
      );
      setFormData((prev) => ({
        ...prev,
        coverLetter:
          "기존 지원서 내용을 바탕으로 일부 자동 작성되었습니다. (예시)",
      }));
    }
  }, [hasExistingApp]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setSubmissionStatus("submitting");
    console.log("Submitting application:", { jobId, ...formData });
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Based on dummy logic, let's assume success
    setSubmissionStatus("success");
  };

  if (submissionStatus === "success") {
    return (
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl mx-auto my-12 text-center">
        <CheckSquare size={64} className="mx-auto mb-6 text-green-500" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          지원서 제출 완료!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          소중한 지원서가 성공적으로 제출되었습니다.{" "}
          {jobId ? `(채용공고 ID: ${jobId})` : ""}
          <br />
          검토 후 빠른 시일 내에 연락드리겠습니다.
        </p>
        <Link
          href="/matching"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          다른 채용공고 보기
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl max-w-3xl mx-auto my-10">
      <div className="text-center mb-10">
        <Briefcase size={48} className="mx-auto mb-4 text-blue-600" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          취업 지원서 작성
        </h1>
        {jobId && (
          <p className="text-lg text-gray-600 mt-2">채용공고 ID: {jobId}</p>
        )}
        {hasExistingApp && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
            <p className="text-blue-700">
              <CheckSquare size={20} className="inline mr-2" />
              기존 지원 정보를 활용하여 일부 항목이 자동으로 채워졌습니다.
              내용을 확인하고 수정해주세요.
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-2 border-b-2 border-blue-500 flex items-center">
            <User size={28} className="mr-3 text-blue-600" /> 기본 정보
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                이름
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                이메일
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                연락처
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 pb-2 border-b-2 border-purple-500 flex items-center">
            <FileText size={28} className="mr-3 text-purple-600" /> 첨부 파일
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="resumeFile"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                이력서 (PDF, DOCX, HWP)
              </label>
              <input
                type="file"
                name="resumeFile"
                id="resumeFile"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.hwp"
                className="w-full text-lg text-gray-700 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-lg file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-200 border border-gray-300 rounded-lg p-1"
              />
              {formData.resumeFile && (
                <p className="text-sm text-green-600 mt-1">
                  선택된 파일: {formData.resumeFile.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                자기소개 (선택)
              </label>
              <textarea
                name="coverLetter"
                id="coverLetter"
                rows={6}
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="자신을 어필할 수 있는 내용을 자유롭게 작성해주세요."
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agreedToTerms"
              id="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
              required
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-3 accent-blue-600"
            />
            <label htmlFor="agreedToTerms" className="text-base text-gray-700">
              <span className="font-medium">개인정보 수집 및 이용</span>에
              동의합니다. (필수)
              <p className="text-sm text-gray-500 mt-1">
                수집된 개인정보는 채용 절차 진행 목적으로만 사용되며, 관련
                법령에 따라 안전하게 보관 및 파기됩니다.
              </p>
            </label>
          </div>
        </div>

        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={submissionStatus === "submitting"}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Send size={22} className="inline mr-3" />
            {submissionStatus === "submitting"
              ? "제출 중..."
              : "지원서 최종 제출하기"}
          </button>
        </div>
        {submissionStatus === "error" && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md flex items-center">
            <AlertTriangle size={24} className="text-red-500 mr-3" />
            <p className="text-red-700 font-medium">
              오류: 지원서 제출에 실패했습니다. 잠시 후 다시 시도해주세요.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

const LoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          지원서 페이지 로딩 중...
        </h2>
        <p className="text-gray-500 mt-2">잠시만 기다려주세요.</p>
      </div>
    </div>
  );
};

const ApplicationFormPage = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <ApplicationFormContent />
    </Suspense>
  );
};

export default ApplicationFormPage;
