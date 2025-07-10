import React, { useState, useCallback, useContext } from 'react';
import { useSearchParams, useNavigate, replace } from 'react-router-dom';
import CommonContext from '../../global/contexts/CommonContext';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    actions: { setIsLogin, setLoggedMember },
  } = useContext(CommonContext);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const errors = {};
      let hasErrors = false;
      // 필수 항목 검증 S
      const requiredFields = {
        email: '이메일 입력하셈',
        password: '비밀번호 입력하셈',
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field]?.trim()) {
          errors[field] = message;
          hasErrors = true;
        }
      }
      // 필수 항목 검증 E
      setErrors(errors);
      if (hasErrors) {
        return; // 검증 실패시 다음 로직 처리 X
      }

      // 로그인 처리
      // 이 데이터는 서버에서 인증된 회원 정보를 가장
      const member = {
        seq: 1,
        email: 'user01@test.org',
        name: '상남자',
      };
      setIsLogin(true);
      setLoggedMember(member);

      // 양식 초기화
      setForm({});

      // 로그인 완료시 이동
      const redirectUrl = searchParams.get('redirectUrl') ?? '/';
      // navigate(redirectUrl, { replace: true });
    },
    [form, setIsLogin, setLoggedMember, searchParams],
  );

  return (
    <LoginForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default React.memo(LoginContainer);
