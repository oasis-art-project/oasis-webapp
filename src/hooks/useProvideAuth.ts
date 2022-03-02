/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useState } from 'react';
import axios from 'axios';
import { API_URL } from './constants';
import { wrapParams } from '../helpers';
import jwt_decode from 'jwt-decode';

const Auth = {
  signin(cb: any, data: any) {
    axios.post(`${API_URL}/login`, wrapParams(data)).then((result: any) => {
      cb(result);
    });
  },
  signout(cb: any) {
    setTimeout(cb, 100);
  },
};

const getUser = () => {
  const userString: string | null = localStorage.getItem('activeUser');
  if (!userString) return null;
  return JSON.parse(userString);
};

function useProvideAuth() {
  const [user, setUser] = useState(getUser());
  const [loginFetch, setLoginFetch] = useState<boolean>(false);

  const signin = (cb: any) => {
    return (data: any) => {
      setLoginFetch(true);
      Auth.signin((result: any) => {
        const decodedToken: any = jwt_decode(result.data.token);
        localStorage.setItem('activeUser', JSON.stringify(decodedToken));
        setUser(decodedToken);
        setLoginFetch(false);
        cb();
      }, data);
    };
  };

  const signout = (cb: any) => {
    return Auth.signout(() => {
      setUser(null);
      setLoginFetch(false);
      localStorage.removeItem('activeUser');
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
    loginFetch,
  };
}

export default useProvideAuth;
