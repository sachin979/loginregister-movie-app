import { TextField, Button } from "@material-ui/core";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [passw, setPassw] = useState("");
  const loginBtn = () => {
    console.log("login");
    console.log(username);
    console.log(passw);
    var data = JSON.stringify({
      username: username,
      password: passw,
    });
    console.log(data);

    var config = {
      method: "post",
      url: "http://localhost:4000/users/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .post(config.url, data, { headers: config.headers })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/movies");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar />
      <TextField label="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
      <TextField
        label="Password"
        type="password"
        onChange={(e) => setPassw(e.target.value)}
      ></TextField>
      <Button onClick={loginBtn}>Login</Button>
    </div>
  );
}
