import React, { useState } from 'react';
import ItemsComment from './ItemsComment';
import { FiSend } from 'react-icons/fi';
import { useAppSelector } from '../../redux/store';
import { IFComment } from '../../types/IFProducts';
import { useAddCommentProductMutation } from '../../service/profile';
import { LoadingModal } from '../../components';

const BoxComment: React.FC<{ id: number; datacomment: IFComment[] }> = ({
  datacomment,
  id,
}) => {
  const [commentString, setCommentString] = useState<string>('');
  const [create, { isLoading }] = useAddCommentProductMutation();
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);

  function handleComment() {
    if (commentString.length === 0) {
      return alert('Vui lòng nhập bình luận');
    }

    create({ id: id, data: { rating: 1, comment: commentString } })
      .unwrap()
      .then(() => {
        alert('Thêm bình luận thành công');
        location.reload();
      })
      .catch(() => {
        alert('Thêm bình luận thất bại');
      });
  }

  return (
    <div className="w-full p-[20px] shadow-[0_0_4px_rgba(0,0,0,0.25)]">
      <h1 className="text-[24px] font-medium">Đánh giá sản phẩm</h1>
      <div className="flex flex-col w-full mt-[10px] px-[10px]">
        {datacomment &&
          datacomment.map((e) => <ItemsComment key={e.id} data={e} />)}
        {datacomment && datacomment.length === 0 && (
          <p className="text-center py-[50px] text-[20px]">
            Hiện chưa có bình luận nào
          </p>
        )}
      </div>
      {token && user ? (
        <div className="w-full mx-auto my-[10px] flex flex-row gap-[20px]">
          <input
            type="text"
            className="w-full outline-none rounded-full text-[16px] px-[15px] py-[7px]"
            placeholder="Để lại bình luận của bạn"
            value={commentString}
            onChange={(e) => setCommentString(e.target.value)}
          />
          <button
            onClick={handleComment}
            className="bg-[#DDF16E] text-[#014C3E] text-[25px] px-[15px] rounded-[10px] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          >
            <FiSend />
          </button>
        </div>
      ) : (
        <div className="text-[22px] text-center text-red-500 font-medium">
          Vui lòng đăng nhập để bình luận!
        </div>
      )}
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default BoxComment;
