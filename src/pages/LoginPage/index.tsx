import loginImage from '@/assets/kakao_login_medium_wide.png';

const LoginPage = () => {

  const LoginAssign = () => {
    const REDIRECT_URI = 'http://localhost:5173/login/oauth';
    const CLIENT_ID = '2d614c05b308f92b587cd4c0006c669d';

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <div>
      <img
        src={loginImage}
        onClick={LoginAssign}
      />
    </div>
  );
};


export default LoginPage
