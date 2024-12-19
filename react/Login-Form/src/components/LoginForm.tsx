import { FormEvent, useState } from "react";
import { BiCartDownload } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(username, password);
    alert(username + " " + password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon-container">
          <BiCartDownload size={75} />
        </div>
        <form onSubmit={handelSubmit} autoComplete="off" className="login-form">
          <div className="input-group">
            <div className="input-wrapper">
              <FaRegUser size={25} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                placeholder="USERNAME"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <RiLockPasswordLine size={25} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="PASSWORD"
                autoComplete="off"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
