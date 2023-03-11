import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="091f469c-be28-46df-bd07-5f28d2908cca"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("passWord")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} // custom chat feed
    />
  );
};

export default App;
