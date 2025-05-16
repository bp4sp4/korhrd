export type Job = {
  id: number;
  logo: string;
  company: string;
  location: string;
  position: string;
  salary: string;
  experience: string;
  tags: string[];
  deadline: string;
  dday: string;
};

export const jobList: Job[] = [
  {
    id: 1,
    logo: "/images/logo.jpeg",
    company: "서울시립복지재단",
    location: "서울 강남구",
    position: "사회복지사 (정규직)",
    salary: "3,000만원~3,500만원",
    experience: "경력 3년↑",
    tags: ["노인복지", "사례관리"],
    deadline: "2025.05.20",
    dday: "D-13",
  },
  {
    id: 2,
    logo: "/images/logo.jpeg",
    company: "꿈나무 어린이집",
    location: "경기 성남시",
    position: "보육교사 모집",
    salary: "2,800만원~",
    experience: "신입가능",
    tags: ["영아반", "국공립"],
    deadline: "2025.05.15",
    dday: "D-8",
  },
  {
    id: 3,
    logo: "/images/logo.jpeg",
    company: "강서구 평생교육재단",
    location: "서울 강서구",
    position: "한국어교원",
    salary: "3,000만원~",
    experience: "경력자만가능",
    tags: ["다문화", "교육"],
    deadline: "2025.05.30",
    dday: "D-25",
  },
  {
    id: 4,
    logo: "/images/logo.jpeg",
    company: "평생교육원화성",
    location: "경기도 화성시",
    position: "평생교육사",
    salary: "2,800만원~",
    experience: "신입가능",
    tags: ["성인교육", "주말근무"],
    deadline: "2025.05.18",
    dday: "D-11",
  },
  {
    id: 5,
    logo: "/images/logo.jpeg",
    company: "강서구 이제 화곡동",
    location: "서울 강서구",
    position: "사회복지사",
    salary: "2,800만원~",
    experience: "신입가능",
    tags: ["장애인복지", "현장실무"],
    deadline: "2025.05.09",
    dday: "D-2",
  },
  {
    id: 6,
    logo: "/images/logo.jpeg",
    company: "미래평생교육원",
    location: "서울 금천구",
    position: "사회복지사",
    salary: "3,500만원~",
    experience: "신입불가능",
    tags: ["국어", "수학"],
    deadline: "2025.05.29",
    dday: "D-21",
  },
];
