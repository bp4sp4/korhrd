"use client";

import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  Search,
  Building,
  CheckCircle,
  Edit3,
  Send,
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Dummy data for job listings - replace with actual data later
const jobListings = [
  {
    id: 1,
    title: "사회복지사 (노인복지센터)",
    company: "행복드림 복지관",
    location: "서울시 강남구",
    workType: "정규직",
    salary: "월 300만원~",
    description:
      "어르신 대상 프로그램 기획 및 운영, 상담 업무. 사회복지사 2급 이상 필수.",
    tags: ["사회복지사 2급", "노인복지", "주5일", "정규직"],
    postedDate: "2025-05-01",
    hasApplication: true,
  },
  {
    id: 2,
    title: "보육교사 (오전반)",
    company: "햇살 어린이집",
    location: "경기도 수원시 영통구",
    workType: "시간제",
    salary: "시급 15,000원",
    description:
      "영유아 보육 및 교육 활동 지원. 보육교사 2급 자격증 소지자 우대.",
    tags: ["보육교사 2급", "영유아", "오전반", "시간제"],
    postedDate: "2025-04-28",
    hasApplication: false,
  },
  {
    id: 3,
    title: "평생교육사 (프로그램 개발)",
    company: "배움나눔 평생학습관",
    location: "부산시 해운대구",
    workType: "계약직",
    salary: "연봉 3,200만원",
    description:
      "성인 대상 교육 프로그램 개발 및 운영, 강사 관리. 평생교육사 2급 필수.",
    tags: ["평생교육사 2급", "프로그램개발", "성인교육", "계약직"],
    postedDate: "2025-05-05",
    hasApplication: true,
  },
  {
    id: 4,
    title: "한국어 교원 (온라인 강의)",
    company: "글로벌 한국어학당",
    location: "온라인/재택",
    workType: "프리랜서",
    salary: "협의",
    description:
      "외국인 대상 온라인 한국어 강의. 한국어 교원 2급 및 강의 경력자 우대.",
    tags: ["한국어 교원 2급", "온라인강의", "외국인대상", "재택근무"],
    postedDate: "2025-05-02",
    hasApplication: false,
  },
  {
    id: 5,
    title: "사회복지사 (아동센터)",
    company: "희망찬 아동센터",
    location: "서울시 노원구",
    workType: "정규직",
    salary: "월 280만원~",
    description:
      "아동 보호 및 교육 프로그램 진행. 사회복지사 2급 필수, 아동복지 경력 우대.",
    tags: ["사회복지사 2급", "아동복지", "주5일", "정규직"],
    postedDate: "2025-05-06",
    hasApplication: false,
  },
  {
    id: 6,
    title: "보육교사 (종일반)",
    company: "푸른하늘 어린이집",
    location: "경기도 용인시 수지구",
    workType: "정규직",
    salary: "월 270만원~",
    description: "유아 보육 및 교육과정 운영. 보육교사 2급 자격증 소지자.",
    tags: ["보육교사 2급", "유아반", "종일반", "정규직"],
    postedDate: "2025-05-03",
    hasApplication: true,
  },
];

const jobTypes = [
  "전체",
  "사회복지사 2급",
  "보육교사 2급",
  "평생교육사 2급",
  "한국어 교원 2급",
];
const workHoursTypes = ["전체", "전일제", "시간제", "파트타임", "기타"];

const allRegionsData: { [key: string]: string[] } = {
  전체: [],
  서울: [
    "전체",
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  경기: [
    "전체",
    "수원시 장안구",
    "수원시 권선구",
    "수원시 팔달구",
    "수원시 영통구",
    "성남시 수정구",
    "성남시 중원구",
    "성남시 분당구",
    "의정부시",
    "안양시 만안구",
    "안양시 동안구",
    "부천시",
    "광명시",
    "평택시",
    "동두천시",
    "안산시 상록구",
    "안산시 단원구",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "구리시",
    "남양주시",
    "오산시",
    "시흥시",
    "군포시",
    "의왕시",
    "하남시",
    "용인시 처인구",
    "용인시 기흥구",
    "용인시 수지구",
    "파주시",
    "이천시",
    "안성시",
    "김포시",
    "화성시",
    "광주시",
    "양주시",
    "포천시",
    "여주시",
    "연천군",
    "가평군",
    "양평군",
  ],
  인천: [
    "전체",
    "중구",
    "동구",
    "미추홀구",
    "연수구",
    "남동구",
    "부평구",
    "계양구",
    "서구",
    "강화군",
    "옹진군",
  ],
  부산: [
    "전체",
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "해운대구",
    "사하구",
    "금정구",
    "강서구",
    "연제구",
    "수영구",
    "사상구",
    "기장군",
  ],
  대구: [
    "전체",
    "중구",
    "동구",
    "서구",
    "남구",
    "북구",
    "수성구",
    "달서구",
    "달성군",
    "군위군",
  ],
  광주: ["전체", "동구", "서구", "남구", "북구", "광산구"],
  대전: ["전체", "동구", "중구", "서구", "유성구", "대덕구"],
  울산: ["전체", "중구", "남구", "동구", "북구", "울주군"],
  세종: ["전체"], // 세종은 단일 행정구역
  강원: [
    "전체",
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "태백시",
    "속초시",
    "삼척시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군",
  ],
  충북: [
    "전체",
    "청주시 상당구",
    "청주시 서원구",
    "청주시 흥덕구",
    "청주시 청원구",
    "충주시",
    "제천시",
    "보은군",
    "옥천군",
    "영동군",
    "증평군",
    "진천군",
    "괴산군",
    "음성군",
    "단양군",
  ],
  충남: [
    "전체",
    "천안시 동남구",
    "천안시 서북구",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "금산군",
    "부여군",
    "서천군",
    "청양군",
    "홍성군",
    "예산군",
    "태안군",
  ],
  전북: [
    "전체",
    "전주시 완산구",
    "전주시 덕진구",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
  ],
  전남: [
    "전체",
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군",
  ],
  경북: [
    "전체",
    "포항시 남구",
    "포항시 북구",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군",
    "예천군",
    "봉화군",
    "울진군",
    "울릉군",
  ],
  경남: [
    "전체",
    "창원시 의창구",
    "창원시 성산구",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 진해구",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "의령군",
    "함안군",
    "창녕군",
    "고성군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거창군",
    "합천군",
  ],
  제주: ["전체", "제주시", "서귀포시"],
  기타: [],
};

const mainRegions = Object.keys(allRegionsData);

const MatchingPage = () => {
  const [selectedMainRegion, setSelectedMainRegion] = useState(mainRegions[0]);
  const [selectedSubRegion, setSelectedSubRegion] = useState("전체");
  const [subRegionOptions, setSubRegionOptions] = useState<string[]>([]);

  const [selectedJobType, setSelectedJobType] = useState(jobTypes[0]);
  const [selectedWorkHours, setSelectedWorkHours] = useState(workHoursTypes[0]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (
      selectedMainRegion &&
      selectedMainRegion !== "전체" &&
      allRegionsData[selectedMainRegion] &&
      allRegionsData[selectedMainRegion].length > 0
    ) {
      setSubRegionOptions(allRegionsData[selectedMainRegion]);
    } else {
      setSubRegionOptions([]); // No sub-regions for "전체" or if data is empty
    }
    setSelectedSubRegion("전체"); // Reset sub-region when main region changes
  }, [selectedMainRegion]);

  const filteredJobs = jobListings.filter((job) => {
    let locationMatch = false;
    if (selectedMainRegion === "전체") {
      locationMatch = true; // No region filter
    } else {
      if (selectedSubRegion === "전체") {
        // Main region is selected, but sub-region is '전체' -> match any job within the main region
        locationMatch = job.location.startsWith(selectedMainRegion);
      } else {
        // Both main and sub-region are selected -> match exact sub-region
        locationMatch =
          job.location.includes(selectedSubRegion) &&
          job.location.startsWith(selectedMainRegion);
      }
    }

    const jobTypeMatch =
      selectedJobType === "전체" || job.tags.includes(selectedJobType);
    const workHoursMatch =
      selectedWorkHours === "전체" ||
      job.workType.includes(selectedWorkHours) ||
      (selectedWorkHours === "파트타임" && job.workType.includes("시간제"));
    const searchTermMatch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    return locationMatch && jobTypeMatch && workHoursMatch && searchTermMatch;
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 md:py-24 rounded-lg shadow-lg mb-12">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            지역별 취업처 매칭
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            희망 근무지역, 시간, 직무를 선택하고 맞춤형 일자리 정보를
            찾아보세요. 당신에게 맞는 최고의 기회가 기다리고 있습니다.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="mb-12 bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          채용 정보 검색
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-end">
          <div>
            <label
              htmlFor="main-region-select"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              희망 근무지역 (시/도)
            </label>
            <select
              id="main-region-select"
              value={selectedMainRegion}
              onChange={(e) => setSelectedMainRegion(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            >
              {mainRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="sub-region-select"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              상세 지역 (시/군/구)
            </label>
            <select
              id="sub-region-select"
              value={selectedSubRegion}
              onChange={(e) => setSelectedSubRegion(e.target.value)}
              disabled={
                selectedMainRegion === "전체" || subRegionOptions.length === 0
              }
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              {
                subRegionOptions.length > 0 ? (
                  subRegionOptions.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))
                ) : (
                  <option value="전체">전체</option>
                ) // Show '전체' if no sub-options
              }
            </select>
          </div>

          <div>
            <label
              htmlFor="job-type-select"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              희망 직무
            </label>
            <select
              id="job-type-select"
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="work-hours-select"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              희망 근무시간
            </label>
            <select
              id="work-hours-select"
              value={selectedWorkHours}
              onChange={(e) => setSelectedWorkHours(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            >
              {workHoursTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:col-span-2">
            <label
              htmlFor="search-term"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              키워드 검색
            </label>
            <div className="relative">
              <input
                type="text"
                id="search-term"
                placeholder="기업명, 공고 제목, 기술 스택 등"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={22}
              />
            </div>
          </div>
          <div className="lg:col-span-3 flex justify-center items-end">
            <button
              onClick={() => {
                /* Filtering is live, this button can be for explicit search action if backend is used */
              }}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-lg text-xl shadow-md hover:shadow-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Search size={24} className="inline mr-2" /> 검색하기
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          검색 결과{" "}
          <span className="text-blue-600">({filteredJobs.length}건)</span>
        </h2>
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-200"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 rounded-lg mr-4 border border-gray-200 bg-gray-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                      <Building size={36} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200 mb-1">
                        <Link href={`/matching/${job.id}`}>{job.title}</Link>{" "}
                        {/* Placeholder link */}
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg font-medium">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-600 text-base mb-5">
                    <div className="flex items-center">
                      <MapPin
                        size={20}
                        className="mr-3 text-gray-500 flex-shrink-0"
                      />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock
                        size={20}
                        className="mr-3 text-gray-500 flex-shrink-0"
                      />
                      <span>{job.workType}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase
                        size={20}
                        className="mr-3 text-gray-500 flex-shrink-0"
                      />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-5 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-500">
                    게시일: {job.postedDate}
                  </p>
                  {job.hasApplication ? (
                    <Link
                      href={`/matching/apply?jobId=${job.id}&hasApp=true`}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <CheckCircle size={20} className="mr-2" /> 지원하기 (기존
                      정보 활용)
                    </Link>
                  ) : (
                    <Link
                      href={`/matching/apply?jobId=${job.id}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <Edit3 size={20} className="mr-2" /> 신청서 작성 및 지원
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Search size={64} className="mx-auto text-gray-400 mb-6" />
            <p className="text-xl text-gray-600 font-medium">
              검색 결과가 없습니다.
            </p>
            <p className="text-gray-500 mt-2">
              다른 검색 조건을 시도해 보세요.
            </p>
          </div>
        )}
      </section>

      {/* Application Form Page (Conceptual Link) */}
      <section className="my-16 p-8 bg-blue-50 rounded-lg shadow-inner text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          새로운 기회를 찾고 계신가요?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          간편하게 지원서를 작성하고 맞춤형 일자리를 추천받으세요. 이력서가 이미
          있다면 더욱 빠르게 지원할 수 있습니다.
        </p>
        <Link
          href="/matching/apply"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg text-xl shadow-md hover:shadow-lg transition-colors duration-300 transform hover:scale-105"
        >
          <Send size={22} className="inline mr-3" /> 지원서 작성 시작하기
        </Link>
      </section>
    </>
  );
};

export default MatchingPage;
