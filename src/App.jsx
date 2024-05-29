import React, { useState } from "react";
import axios from "axios";

import { Card } from "./component/card/Card";
import { Title } from "./component/title/Title";
import { Input } from "./component/input/Input";
import { Button } from "./component/button/Button";

// eslint-disable-next-line no-useless-escape
const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);

const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

export const App = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!REG_EXP_EMAIL.test(login) || !REG_EXP_PASSWORD.test(password)) {
      setAlert(true);
      return;
    }

    try {
      //write the link
      const response = await axios.post("", {
        login: login,
        password: password
      });

      console.log("Allowed methods:", response.headers.allow);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <Title title={"Login"} />

      {alert && (
        <h4 className="alert" style={{ color: "red" }}>
          Invalid login or password
        </h4>
      )}

      <form onSubmit={handleLogin}>
        <Input
          type={"email"}
          value={login}
          setValue={setLogin}
          placeholder={"Enter login"}
        />
        <Input
          type={"password"}
          value={password}
          setValue={setPassword}
          placeholder={"Enter password"}
        />

        <Button text={"Login"} />
      </form>
    </Card>
  );
};
