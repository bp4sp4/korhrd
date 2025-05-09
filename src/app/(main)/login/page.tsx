"use client";
// Login.tsx
import React, { useState, FormEvent } from "react";
import "./login.css";

// 로그인 폼 상태를 위한 인터페이스 정의
interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

const Login: React.FC = () => {
  // 상태 관리
  const [formState, setFormState] = useState<LoginState>({
    email: "",
    password: "",
    isLoading: false,
    error: null,
  });

  // 입력 필드 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // 폼 제출 처리
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // 기본 유효성 검사
    if (!formState.email || !formState.password) {
      setFormState({
        ...formState,
        error: "이메일과 비밀번호를 모두 입력해주세요.",
      });
      return;
    }

    // 로딩 상태 설정
    setFormState({
      ...formState,
      isLoading: true,
      error: null,
    });

    try {
      // API 호출 시뮬레이션 (실제 구현 시 API 호출로 대체)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 로그인 성공 처리
      console.log("로그인 성공", formState.email);
      // 실제 구현 시 리다이렉션 또는 상태 관리
    } catch (error) {
      // 로그인 실패 처리
      setFormState({
        ...formState,
        error: "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.",
      });
    } finally {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>

        {formState.error && (
          <div className="error-message">{formState.error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              disabled={formState.isLoading}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              disabled={formState.isLoading}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="login-button"
              disabled={formState.isLoading}
            >
              {formState.isLoading ? "로그인 중..." : "로그인"}
            </button>
          </div>

          <div className="form-links">
            <a href="/forgot-password">비밀번호를 잊으셨나요?</a>
            <a href="/signup">회원가입</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
