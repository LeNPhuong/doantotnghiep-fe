import React, { useState } from 'react';
import LayoutAuth from '../../../layout/LayoutAuth';
import { FormAuth, LoadingModal } from '../../../components';
import {
  useAuthenOtpMutation,
  useForgotChangeMutation,
} from '../../../service/user';
import { useNavigate } from 'react-router-dom';

const ChangeSucces: React.FC<{}> = () => {
  const forgot_email = JSON.parse(localStorage.getItem('forgot_password')!);
  const navigate = useNavigate();

  if (!forgot_email) {
    alert('Không đủ quyền hạn');
  }

  const [code, setCode] = useState<string>('');
  const [news, setNews] = useState<string>('');
  const [again, setAgain] = useState<string>('');

  const [checkOTP, { isLoading: checkLoad }] = useAuthenOtpMutation();
  const [reset, { isLoading: resetLoad }] = useForgotChangeMutation();

  function handleChangePassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (code.length === 0 || news.length === 0 || again.length === 0) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      const dataOTP = { email: forgot_email.email, otp: code };
      checkOTP(dataOTP)
        .unwrap()
        .then((data) => {
          if (data.success) {
            const newPass = { otp: code, password: news, c_password: again };
            reset(newPass)
              .unwrap()
              .then((data) => {
                if (data.success) {
                  alert('Thay đổi thành công');
                  return navigate('/nguoi-dung/dang-nhap');
                }
              })
              .catch(() => {
                return alert('Vui lòng kiểm tra lại mật khẩu');
              });
          }
        })
        .catch(() => {
          alert(
            'Mã xác nhận nhập sai hoặc hoặc thời gian đã hết vui lòng nhập lại mã xác nhận',
          );
          return navigate('/nguoi-dung/quen-mat-khau');
        });

      // checkOTP();
    }
  }

  return (
    <LayoutAuth label="Đổi mật khẩu">
      <form
        onSubmit={handleChangePassword}
        className="md:max-w-[396px] max-w-[350px] w-full mx-auto"
      >
        <FormAuth
          type="password"
          init={code}
          setInit={setCode}
          label="Nhập mã xác nhận"
        />
        <FormAuth
          type="password"
          init={news}
          setInit={setNews}
          label="Mật khẩu mới"
        />
        <FormAuth
          type="password"
          init={again}
          setInit={setAgain}
          label="Nhập lại mật khẩu mới"
        />
        <div className="space-y-4 mx-2">
          <p className="md:text-[18px] text-[14px] text-[#1BA085]">
            * Mật khẩu phải trên 8 ký tự
          </p>
          <p className="md:text-[18px] text-[14px] text-[#1BA085]">
            * Mật khẩu phải phải có chữ và số
          </p>
        </div>
        <div className="flex w-full justify-center my-[30px]">
          <button
            type="submit"
            className="w-full md:max-w-[232px] max-w-[180px] max-h-[40px] md:min-h-[58px] md:max-h-[58px] bg-[#004D40] md:text-[24px] text-[12px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đổi mật khẩu
          </button>
        </div>
      </form>
      {checkLoad && <LoadingModal />}
      {resetLoad && <LoadingModal />}
    </LayoutAuth>
  );
};

export default ChangeSucces;
