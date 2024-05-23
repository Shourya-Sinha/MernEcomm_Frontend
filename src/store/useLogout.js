// // useLogout.js
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logOut } from '../store/slice/auth';

// const useLogout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logout = () => {
//     dispatch(logOut());
//     window.localStorage.removeItem("user_id");
//     window.localStorage.removeItem("token");
//     navigate('/login');
//   };

//   return logout;
// };

// export default useLogout;
