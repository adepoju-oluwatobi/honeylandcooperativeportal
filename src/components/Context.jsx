import React, { createContext, useState, useEffect } from "react";
import { server } from "../server";
import axios from "axios";
import {server_cooperative_login} from "../server"

export const coperativeUserContext = createContext({});

function CreatedContext({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [user_dash, setUser_dash] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userInfo, setUserInfo] = useState({})
  async function getUser() {
    try {
      if (!user) {
        const user = await axios.get(`${server}/profile`);
        setUser(user.data?.users);
        setReady(true);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

const document_cookies = window.localStorage.getItem("user_token");
var config = {
  headers: {
    Authorization: `Bearer ${document_cookies}`,
  },
};

async function user_details() {
  if (!user_dash) {
    try {
      const response = await axios.get(
        `${server_cooperative_login}/stay_logged_in`,
        config
      );
      const { user, userID, decoded } = response.data;

      setUser_dash(response.data.decoded?.user);
      setUserID(response.data.decoded?.userID);
      setUserInfo(decoded?.userInfo.data);
      setReady(true);

      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }
}


useEffect(() => {
  user_details();
}, []);

  return (
    <coperativeUserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        user_dash,
        setUser_dash,
        userID,
        setUserID,
        userInfo,
        setUserInfo,
        ready,
        setReady
      }}
    >
      {children}
    </coperativeUserContext.Provider>
  );
}

export default CreatedContext;
