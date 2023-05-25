import Header from "./Header";
import nysl_logo from "./../assets/images/nysl_logo.png";
import "./../assets/css/template.css";
import LoginButton from "./LoginButton";

const Template = ({ title, children }) => {
  return (
    <>
      <Header />
      <div className="subheader">
        <img
          className="logo"
          src={nysl_logo}
          alt="northside youth soccer league logo"
        />
        <h2 className="title">{title}</h2>
      </div>
      <div className="content">
        <div>{children}</div>
      </div>
      <LoginButton />
    </>
  );
};

export default Template;
