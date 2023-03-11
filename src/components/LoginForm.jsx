import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "091f469c-be28-46df-bd07-5f28d2908cca",
      "User-Name": userName,
      "User-Secret": passWord,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("userName", userName);
      localStorage.setItem("passWord", passWord);
      window.location.reload();
    } catch (error) {
      setError("Oops, incorrect crendentials.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            className="input"
            placeholder="Passwork"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <h2 className="error" style={{ color: "#fff" }}>
              {error}
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
