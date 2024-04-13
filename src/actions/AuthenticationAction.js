import { AUTH_FAILED, AUTH_START, AUTH_SUCCESS, SESSION_DESTROY } from "./Types";
import users from '../dummy/users.json';

const fetchLoginRequest = () => {
  return {
    type: AUTH_START
  };
};

const fetchLoginSuccess = (res) => {
  return {
    type: AUTH_SUCCESS,
    payload: res
  };
};

const fetchLoginFailed = (err) => {
  return {
    type: AUTH_FAILED,
    payload: err
  };
};

const sessionDestroy= ()=>{
    return{
        type: SESSION_DESTROY
    }
}

export const signIn = ({ username, password, navigate }) => {
    return async (dispatch) => {
      dispatch(fetchLoginRequest()); // Menandakan permintaan login telah dimulai
  
      // Mencari pengguna berdasarkan username
      const user = users.find(user => user.username === username);
  
      if (user) {
        // Jika username ditemukan, periksa apakah password sesuai
        if (user.password === password) {
          dispatch(fetchLoginSuccess(user)); // Login berhasil
          console.log(user);
          localStorage.setItem('isLogged', true);
          localStorage.setItem('avatar',user.avatar)
          localStorage.setItem('fullname',user.fullname)
          localStorage.setItem('username',user.username)
          // Navigasi ke halaman dashboard
          navigate('/dashboard');
        } else {
          alert('Password salah');
          dispatch(fetchLoginFailed("Password salah")); // Password salah
        }
      } else {
        alert('Username tidak ditemukan');
        dispatch(fetchLoginFailed("Username tidak ditemukan")); // Username tidak ditemukan
      }
    };
  };

  export  const signOut = ({navigate}) =>{
    return async (dispatch)=>{
        dispatch(sessionDestroy())
        localStorage.removeItem("isLogged");
        localStorage.removeItem("avatar");
        localStorage.removeItem("fullname");
        localStorage.removeItem("username");
        navigate('/');
    }
  }