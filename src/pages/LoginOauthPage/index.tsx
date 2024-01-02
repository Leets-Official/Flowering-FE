import axios from "axios";
import { useEffect } from "react";

const LoginOauthPage = () => {

    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code");
        const grant_type = "authorization_code";
        const CLIENT_ID = '2d614c05b308f92b587cd4c0006c669d';
        const REDIRECT_URI = 'http://localhost:5173/login/oauth';

        const tokenRequest = axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`, {
            headers: {
                "Content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        })
        console.log(tokenRequest);
    })

    return (
        <div>
            
        </div>
    );
};

export default LoginOauthPage;