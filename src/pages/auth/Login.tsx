import React, { useState } from 'react';
import FormAuth from '../../components/other/FormAuth';
import LayoutAuth from '../../layout/LayoutAuth';
import { Link } from 'react-router-dom';

const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <LayoutAuth label="Đăng nhập">
      <form className="max-w-[396px] w-full mx-auto">
        <FormAuth init={email} setInit={setEmail} h="58px" label="Email" />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu"
        />
        <div className="flex w-full justify-center my-[30px]">
          <button
            type="submit"
            className="w-full max-w-[232px] min-h-[58px] max-h-[58px] bg-[#004D40] text-[24px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đăng nhập
          </button>
        </div>
      </form>
      <p className="text-[18px] text-center text-[#000]">
        Bạn chưa có tài khoản ?{' '}
        <Link to="/nguoi-dung/dang-ky" className="text-[#FF0000] inline-block">
          Đăng ký
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Login;
