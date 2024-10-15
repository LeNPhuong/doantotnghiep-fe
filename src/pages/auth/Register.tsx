import React, { useState } from 'react';
import LayoutAuth from '../../layout/LayoutAuth';
import FormAuth from '../../components/other/FormAuth';
import { Link } from 'react-router-dom';

const Register: React.FC<{}> = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agPass, setAgPass] = useState<string>('');

  return (
    <LayoutAuth label="Đăng ký">
      <form className="max-w-[396px] w-full mx-auto mb-[49px]">
        <FormAuth
          init={username}
          setInit={setUsername}
          h="58px"
          label="Họ và tên"
        />
        <div className="mt-[16px]"></div>
        <FormAuth init={email} setInit={setEmail} h="58px" label="Email" />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={phone}
          setInit={setPhone}
          h="58px"
          label="Số điện thoại"
        />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu"
        />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={agPass}
          setInit={setAgPass}
          h="58px"
          label="Nhập lại mật khẩu"
        />
        <div className="mt-[16px]"></div>
        <div className="flex flex-row">
          <input type="checkbox" className="w-[20px] h-[20px] mr-[10px]" />
          <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-medium">
            Đồng ý điều khoản và chính sách
          </p>
        </div>
        <div className="mb-[5px]"></div>
        <div className="flex w-full justify-center my-[30px] items-center">
          <button
            type="submit"
            className="w-full max-w-[232px] min-h-[58px] max-h-[58px] bg-[#004D40] text-[24px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <p className="text-[18px] text-center text-[#000]">
        Bạn đã có tài khoản !{' '}
        <Link to="/nguoi-dung/dang-nhap" className="text-[#FF0000] inline-block">
          Đăng nhập
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Register;
