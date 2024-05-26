import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "../../components/header";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const SigninSignup = () => {
  const switchertabs = useRef<HTMLButtonElement>(null);
  const signUpTab = useRef<HTMLFormElement>(null);
  const signinTab = useRef<HTMLFormElement>(null);
  const [isHide, setisHide] = useState<boolean>(true);
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    phoneNumber: "",
  });
  const SignInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const SignUpfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const switchTabs = (e: MouseEvent<HTMLParagraphElement>, name: string) => {
    if (name === "signIn") {
      switchertabs.current?.classList.add("shiftToNeutral");
      switchertabs.current?.classList.remove("shiftToRight");

      signUpTab.current?.classList.remove("shiftToNeutralForm");
      signinTab.current?.classList.remove("shiftToLeft");
    }
    if (name === "signUp") {
      switchertabs.current?.classList.add("shiftToRight");
      switchertabs.current?.classList.remove("shiftToNeutralForm");
      signUpTab.current?.classList.add("shiftToNeutralForm");
      signinTab.current?.classList.add("shiftToLeft");
    }
  };

  const signInFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signInInfo);
  };
  const signUpFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signUpInfo);
  };

  return (
    <div className="main-container">
      <Header />
      <div className="signIn-signUp-container">
        <main className="signIn-signUp-box">
          <div className="toggle-container">
            <div>
              <div className="toggle-tab">
                <p onClick={(e) => switchTabs(e, "signIn")}>SIGN IN</p>
                <p onClick={(e) => switchTabs(e, "signUp")}>SIGN UP</p>
              </div>
              <button ref={switchertabs}></button>
            </div>
          </div>
          <form
            className="signinform"
            ref={signinTab}
            onSubmit={signInFormHandler}
          >
            <h1>Welcome Back</h1>
            <div className="signin-email">
              <MdEmail />
              <input
                type="text"
                placeholder="email"
                required={true}
                name="email"
                onChange={SignInfoHandler}
              />
            </div>
            <div className="signin-password">
              <RiLockPasswordFill />
              <input
                type={isHide ? "password" : "text"}
                placeholder="password"
                required={true}
                name="password"
                onChange={SignInfoHandler}
              />
              {isHide ? (
                <div onClick={() => setisHide(false)}>
                  <BsFillEyeSlashFill />
                </div>
              ) : (
                <div onClick={() => setisHide(true)}>
                  <BsFillEyeFill />
                </div>
              )}
            </div>
            <div className="forget">
              <Link to={"/password/forget"}>FORGET PASSWORD</Link>
            </div>
            <button type="submit">
              Sign In <IoIosLogIn />
            </button>
          </form>
          <form
            className="signUpform"
            ref={signUpTab}
            onSubmit={signUpFormHandler}
          >
            <h1>Welcome to Sign Up</h1>
            <div className="signUp-email">
              <MdEmail />
              <input
                type="text"
                placeholder="Email"
                required={true}
                name="email"
                onChange={SignUpfoHandler}
              />
            </div>
            <div className="signUp-password">
              <RiLockPasswordFill />
              <input
                type={isHide ? "password" : "text"}
                placeholder="Password"
                required={true}
                name="password"
                onChange={SignUpfoHandler}
              />
              {isHide ? (
                <div onClick={() => setisHide(false)}>
                  <BsFillEyeSlashFill />
                </div>
              ) : (
                <div onClick={() => setisHide(true)}>
                  <BsFillEyeFill />
                </div>
              )}
            </div>
            <div className="signUp-phone">
              <MdPhoneInTalk />
              <input
                type="text"
                minLength={10}
                maxLength={10}
                placeholder="Phone Number"
                required={true}
                name="phoneNumber"
                onChange={SignUpfoHandler}
              />
            </div>
            <button type="submit">
              Sign Up <FiUserPlus />
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SigninSignup;
