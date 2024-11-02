import React, { useState } from 'react';
import FormAuth from '../../components/other/FormAuth';
import LayoutAuth from '../../layout/LayoutAuth';
import { Link } from 'react-router-dom';

const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <LayoutAuth label="Đăng nhập">
      <form className="md:max-w-[396px] max-w-[350px] w-full mx-auto">
        <FormAuth init={email} setInit={setEmail} h="58px" label="Email" />
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu"
        />
        <div className="flex w-full justify-center md:my-[30px] my-[15px]">
          <button
            type="submit"
            className="w-full md:max-w-[232px] max-w-[180px] min-h-[40px] max-h-[40px] md:min-h-[58px] md:max-h-[58px] bg-[#004D40] md:text-[24px] text-[12px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đăng nhập
          </button>
        </div>
      </form>
      <p className="md:text-[18px] text-[14px] text-center text-[#000]">
        Bạn chưa có tài khoản ?{' '}
        <Link to="/nguoi-dung/dang-ky" className="text-[#FF0000] inline-block">
          Đăng ký
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Login;
