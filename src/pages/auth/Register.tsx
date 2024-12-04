import React, { useState } from 'react';
import LayoutAuth from '../../layout/LayoutAuth';
import FormAuth from '../../components/other/FormAuth';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingModal } from '../../components';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '../../service/user';
import { IFRegister } from '../../types/User';
import { useAppDispatch } from '../../redux/store';
import { setProfile, setToken } from '../../redux/user/UserSlice';
import { useGetProfileMutation } from '../../service/profile';

const Register: React.FC<object> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [agPass, setAgPass] = useState<string>('');
  const [check, setCheck] = useState(false);

  const [register, { isLoading: loadRegister }] = useRegisterUserMutation();
  const [login, { isLoading: loadLogin }] = useLoginUserMutation();
  const [profile, { isLoading: ProfileLoad }] = useGetProfileMutation();

  function resetValue() {
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setAgPass('');
    setCheck(false);
  }

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: IFRegister = {
      name,
      email,
      phone,
      password,
      c_password: agPass,
    };

    let checkFill: boolean = false;

    for (const key in data) {
      if (data[key as keyof IFRegister].length === 0) {
        alert('Vui lòng điền đầy đủ thông tin của ' + key);
        checkFill = true;
        break;
      }
    }

    if (checkFill) {
      return;
    }

    if (!check) {
      return alert('Vui lòng đồng ý điều khoản và chính sách');
    }

    register(data)
      .unwrap()
      .then((data) => {
        if (data.success === true) {
          login({ email: email, password: password })
            .unwrap()
            .then((data) => {
              if (data.success) {
                dispatch(setToken(data.data.access_token));
                profile()
                  .unwrap()
                  .then((e) => {
                    dispatch(setProfile(e));
                    resetValue();
                    navigate('/home');
                  });
              } else if (data.success === false) {
                return alert('Vui lòng kiểm tra lại thông tin');
              }
            });
        } else if (data.success === false) {
          return alert('Vui lòng kiểm tra lại thông tin');
        }
      })
      .catch((data) => {
        if (data.data.data.email) {
          return alert(data.data.data.email[0]);
        }
        if (data.data.data.phone) {
          return alert(data.data.data.phone[0]);
        }
        if (data.data.data.password) {
          return alert(data.data.data.password[0]);
        }
      });
  }

  return (
    <LayoutAuth label="Đăng ký">
      <form
        onSubmit={(e) => handleRegister(e)}
        className="md:max-w-[396px] max-w-[350px] w-full mx-auto md:mb-[49px] mb-[10px]"
      >
        <FormAuth type="text" init={name} setInit={setName} label="Họ và tên" />
        <FormAuth type="email" init={email} setInit={setEmail} label="Email" />
        <FormAuth
          type="text"
          init={phone}
          setInit={setPhone}
          label="Số điện thoại"
        />
        <FormAuth
          type="password"
          init={password}
          setInit={setPassword}
          label="Mật khẩu"
        />
        <p className='mb-[15px] text-red-500'>Mật khẩu phải có 6 ký tự gồm số, chữ, ký tự đặc biệt</p>
        <FormAuth
          type="password"
          init={agPass}
          setInit={setAgPass}
          label="Nhập lại mật khẩu"
        />
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] mr-[10px]"
            checked={check}
            onChange={() => setCheck((e) => !e)}
          />
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
      {loadRegister && <LoadingModal />}
      {loadLogin && <LoadingModal />}
      {ProfileLoad && <LoadingModal />}
    </LayoutAuth>
  );
};

export default Register;
