import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "./../service/firebase";
import "../assets/css/loginbutton.css";

const LoginButton = () => {
  const [user] = useAuthState(auth);

  const handleLoginClick = () => {
    if (!user) {
      auth.signInWithPopup(provider);
    } else {
      auth.signOut();
    }
  };

  return (
    <button className="button" onClick={handleLoginClick}>
      {user ? "Sign out" : "Log in"}
    </button>
  );
};

export default LoginButton;
