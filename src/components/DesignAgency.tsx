"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Zap,
  Palette,
  Code,
  LineChart,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ParallaxProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br">
        <main className="flex-1">
          {/* Hero Section (이미지 제거, 텍스트만) */}
          <section className="w-full py-24 md:py-36 bg-gradient-to-b from-white via-blue-50 to-[#e6f0fa] relative overflow-hidden">
            <div className="container px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
              <span className="inline-block rounded-full bg-[#b3d8fd] text-[#2563eb] px-4 py-1 text-sm font-semibold shadow-sm">
                한평생교육원 취업/진로 컨설팅
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[2] tracking-tight">
                당신의 <span className="text-[#2563eb]">새로운 시작</span>,
                <br />
                <span className="text-[#4f8cff]">한평생교육원</span>과 함께!
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                맞춤형 이력서/자소서 클리닉, 지역별 취업처 매칭, 실전 면접
                컨설팅까지!
                <br />
                경력단절, 중장년, 경력전환 모두 환영합니다.
              </p>
              <div className="flex gap-3 justify-center mt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-[#4f8cff] text-white shadow hover:bg-[#2563eb] transition"
                >
                  무료 상담 신청하기
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-[#4f8cff] text-[#2563eb] bg-white shadow hover:bg-[#e6f0fa]"
                >
                  서비스 소개 보기
                </Button>
              </div>
            </div>
          </section>

          {/* Client Logos */}
          <section id="clients" className="w-full py-12 md:py-16 lg:py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
            >
              <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                  >
                    Trusted by
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  >
                    협력 기관
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  >
                    We've had the pleasure of working with some amazing
                    companies
                  </motion.p>
                </div>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto grid grid-cols-2 items-center gap-3 py-8 md:grid-cols-3 lg:grid-cols-6"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <div className="rounded-3xl border p-6 bg-background/80 hover:shadow-md transition-all">
                      <Image
                        src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=80&width=160"
                        alt={`Client Logo ${i + 1}`}
                        width={160}
                        height={80}
                        className="grayscale transition-all hover:grayscale-0"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="w-full py-20 bg-white relative overflow-hidden"
          >
            <div className="container px-4 md:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full text-[#2563eb] px-4 py-1 text-sm font-semibold shadow-sm">
                  주요 서비스
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                  한눈에 보는 한평생교육원 서비스
                </h2>
                <p className="text-gray-700 text-lg">
                  취업 준비부터 성공까지, 모든 과정을 전문가가 함께합니다.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Sparkles className="h-10 w-10 text-[#4f8cff]" />,
                    title: "이력서/자소서 클리닉",
                    description:
                      "전문가의 1:1 첨삭과 맞춤 피드백으로 합격률을 높여드립니다.",
                  },
                  {
                    icon: <ArrowUpRight className="h-10 w-10 text-[#4f8cff]" />,
                    title: "취업처 매칭 서비스",
                    description:
                      "지역별, 경력별 맞춤 취업처를 빠르게 연결해드립니다.",
                  },
                  {
                    icon: <ChevronRight className="h-10 w-10 text-[#4f8cff]" />,
                    title: "실전 면접 컨설팅",
                    description:
                      "실제 면접관 출신 전문가가 실전 면접을 코칭합니다.",
                  },
                  {
                    icon: <Mail className="h-10 w-10 text-[#4f8cff]" />,
                    title: "진로/경력 상담",
                    description:
                      "경력단절, 경력전환 등 다양한 상황에 맞는 진로 상담 제공.",
                  },
                  {
                    icon: <MapPin className="h-10 w-10 text-[#4f8cff]" />,
                    title: "지역별 취업 정보",
                    description: "내 주변, 내 지역의 최신 취업 정보를 한눈에!",
                  },
                  {
                    icon: <Phone className="h-10 w-10 text-[#4f8cff]" />,
                    title: "무료 전화상담",
                    description: "궁금한 점은 언제든 전화로 문의하세요.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="rounded-3xl  shadow-lg p-8 flex flex-col items-center text-center hover:shadow-blue-200 transition"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio/Work Bento Grid */}
          <section
            id="work"
            className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
          >
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
                  계열사
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  한평생교육그룹
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  웹/모바일 서비스 둘 다 한눈에!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* PC(웹) 이미지 2장 */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/web1.png"
                      alt="웹 서비스 1"
                      width={800}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-6 py-3">
                      <h3 className="text-lg font-bold">한평생 직업훈련</h3>
                      <p className="text-sm text-muted-foreground">
                        직업훈련 전문 교육 플랫폼
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/web2.png"
                      alt="웹 서비스 2"
                      width={800}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-6 py-3">
                      <h3 className="text-lg font-bold">한평생 HRD</h3>
                      <p className="text-sm text-muted-foreground">
                        기업 맞춤형 HRD 서비스
                      </p>
                    </div>
                  </div>
                </div>
                {/* 모바일 이미지 2장 */}
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/mobile1.png"
                      alt="모바일 서비스 1"
                      width={400}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-6 py-3">
                      <h3 className="text-lg font-bold">한평생 모바일러닝</h3>
                      <p className="text-sm text-muted-foreground">
                        언제 어디서나 모바일 학습
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/mobile2.png"
                      alt="모바일 서비스 2"
                      width={400}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-6 py-3">
                      <h3 className="text-lg font-bold">한평생 커뮤니티</h3>
                      <p className="text-sm text-muted-foreground">
                        교육생 소통 커뮤니티
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About/Team Section */}
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="container px-4 md:px-6 border border-muted rounded-3xl"
            >
              <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4 p-6"
                >
                  <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Founded in 2015, our design studio has grown from a small
                    team of passionate designers to a full-service creative
                    agency. We believe in the power of design to transform
                    businesses and create meaningful connections with audiences.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Our approach combines strategic thinking, creative
                    excellence, and technical expertise to deliver solutions
                    that not only look beautiful but also drive results.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button variant="outline" size="lg" className="rounded-3xl">
                      Our Process
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-3xl">
                      Join Our Team
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
                    <Image
                      src="https://raw.githubusercontent.com/designali-in/designali/2a5d38f658ab24084e3260cdba2259fdc44ae2cd/apps/www/public/placeholder.svg?height=1080&width=1920"
                      alt="Team Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Testimonials */}
          <section className="w-full py-20 bg-gradient-to-b from-white via-[#e6f0fa] to-[#b3d8fd] relative overflow-hidden">
            <div className="container px-4 md:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block rounded-full bg-[#b3d8fd] text-[#2563eb] px-4 py-1 text-sm font-semibold shadow-sm">
                  성공 사례
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                  실제로 취업에 성공한 분들의 이야기
                </h2>
                <p className="text-gray-700 text-lg">
                  한평생교육원의 컨설팅을 통해 새로운 기회를 얻은 분들의 생생한
                  후기입니다.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    quote:
                      "10년 경력단절 후 재취업에 성공했습니다. 전문가의 1:1 첨삭과 면접 코칭이 큰 힘이 되었어요!",
                    author: "김미영",
                    company: "사회복지사, 45세",
                  },
                  {
                    quote:
                      "지역별 취업처 매칭 서비스로 집 근처 좋은 일자리를 찾았습니다. 출퇴근이 편해졌어요!",
                    author: "이수진",
                    company: "평생교육사, 47세",
                  },
                  {
                    quote:
                      "면접 컨설팅 덕분에 자신감이 생겨 더 좋은 조건의 회사로 이직했습니다.",
                    author: "박준호",
                    company: "교육 컨설턴트, 52세",
                  },
                  {
                    quote:
                      "경력전환 상담을 통해 새로운 진로를 찾고, 만족스러운 직장에 취업했습니다.",
                    author: "정은지",
                    company: "행정직, 39세",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white shadow-lg p-8 flex flex-col gap-4 hover:shadow-blue-200 transition"
                  >
                    <blockquote className="text-lg font-medium leading-relaxed text-gray-900">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-12 w-12 rounded-full bg-[#e6f0fa] flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </ParallaxProvider>
  );
}
