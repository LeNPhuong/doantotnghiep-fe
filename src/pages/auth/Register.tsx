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
      <form className="md:max-w-[396px] max-w-[350px] w-full mx-auto md:mb-[49px] mb-[10px]">
        <FormAuth
          init={username}
          setInit={setUsername}
          h="58px"
          label="Họ và tên"
        />
        <FormAuth init={email} setInit={setEmail} h="58px" label="Email" />
        <FormAuth
          init={phone}
          setInit={setPhone}
          h="58px"
          label="Số điện thoại"
        />
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu"
        />
        <FormAuth
          init={agPass}
          setInit={setAgPass}
          h="58px"
          label="Nhập lại mật khẩu"
        />
        <div className="flex flex-row">
          <input type="checkbox" className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] mr-[10px]" />
          <p className="md:text-[18px] text-[14px] text-[rgba(0,0,0,0.5)] font-medium">
            Đồng ý điều khoản và chính sách
          </p>
        </div>
        <div className="flex w-full justify-center md:my-[30px] my-[5px] items-center">
          <button
            type="submit"
            className="w-full md:max-w-[232px] max-w-[180px] min-h-[40px] max-h-[40px] md:min-h-[58px] md:max-h-[58px] bg-[#004D40] md:text-[24px] text-[12px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <p className="md:text-[18px] text-[14px] text-center text-[#000]">
        Bạn đã có tài khoản !{' '}
        <Link
          to="/nguoi-dung/dang-nhap"
          className="text-[#FF0000] inline-block"
        >
          Đăng nhập
        </Link>
      </p>
    </LayoutAuth>
  );
};

export default Register;
