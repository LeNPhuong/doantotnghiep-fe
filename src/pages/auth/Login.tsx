import React, { useState } from 'react';
import FormAuth from '../../components/other/FormAuth';
import LayoutAuth from '../../layout/LayoutAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../service/user';
import { IFLogin } from '../../types/User';
import { LoadingModal } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { setProfile, setToken } from '../../redux/user/UserSlice';
import { useGetProfileMutation } from '../../service/profile';

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [login, { isLoading }] = useLoginUserMutation();
  const [profile, { isLoading: ProfileLoad }] = useGetProfileMutation();

  function resetValue() {
    setEmail('');
    setPassword('');
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: IFLogin = {
      email,
      password,
    };

    let checkFill: boolean = false;

    for (const key in data) {
      if (data[key as keyof IFLogin].length === 0) {
        alert('Vui lòng điền đầy đủ thông tin của ' + key);
        checkFill = true;
        break;
      }
    }

    if (checkFill) {
      return;
    }

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
      })
      .catch(() => {
        alert('Tài khoản bị vô hiệu hoá hoặc thông tin bị sai');
        return location.reload();
      });
  }

  return (
    <LayoutAuth label="Đăng nhập">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="md:max-w-[396px] max-w-[350px] w-full mx-auto"
      >
        <FormAuth type="email" init={email} setInit={setEmail} label="Email" />
        <FormAuth
          type="password"
          init={password}
          setInit={setPassword}
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
        <Link
          to="/nguoi-dung/quen-mat-khau"
          className="text-[#FF0000] inline-block"
        >
          Quên mật khẩu ?
        </Link>
      </p>
      <p className="md:text-[18px] text-[14px] text-center text-[#000]">
        Bạn chưa có tài khoản ?{' '}
        <Link to="/nguoi-dung/dang-ky" className="text-[#FF0000] inline-block">
          Đăng ký
        </Link>
      </p>
      {isLoading && <LoadingModal />}
      {ProfileLoad && <LoadingModal />}
    </LayoutAuth>
  );
};

export default Login;
