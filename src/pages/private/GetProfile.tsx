// import React from 'react';
// import { useGetProfileQuery } from '../../service/profile';
// import { useAppDispatch } from '../../redux/store';
// import { clearProfile, setProfile } from '../../redux/user/UserSlice';

// const GetProfile: React.FC<object> = () => {
//   const { data, isError, isSuccess } = useGetProfileQuery();
//   const dispatch = useAppDispatch();

//   if (isSuccess) {
//     dispatch(setProfile(data));
//   } else if (isError) {
//     dispatch(clearProfile());
//   }

//   return <div></div>;
// };

// export default GetProfile;
