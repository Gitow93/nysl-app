import Header from "./Header";
import "./../assets/css/template.css";
import LoginButton from "./LoginButton";

const Template = ({ title, children }) => {
  return (
    <>
      <Header />
      <div className="subheader">
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
