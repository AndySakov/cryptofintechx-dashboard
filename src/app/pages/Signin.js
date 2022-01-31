import { Link } from "react-router-dom";
import { login } from "../redux/features/authSlice";
import { flashMessage } from "../redux/features/messageSlice";
import axios from "../axiosInstance";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FlashMessages from "../components/FlashMessages";
// import { useSearchParams } from "react-router";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();

  const onSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    event.stopPropagation();
    const userData = {
      email: form.email.value,
      password: form.password.value,
    };
    axios
      .post("/user/auth", userData)
      .then((response) => {
        const data = response.data;
        dispatch(
          login({
            user: data.data.user,
            userToken: response.headers["X-Auth"],
          })
        );
        dispatch(
          flashMessage({
            message: data.res.message,
            type: "success",
          })
        );
        // const rdr = searchParams.get("rdr")
        // if (rdr === "") {
        //   history.push("/home");
        // } else {
        //   history.push(rdr);
        // }
        history.push("/home");
      })
      .catch((err) => {
        if (err.response) {
          const data = err.response.data;
          window.location.reload(true);
          dispatch(flashMessage({ message: data.message, type: "danger" }));
        } else {
          // Have some kind of error reporting here
          dispatch(
            flashMessage({
              message:
                "Something went wrong signing you in, please try again later.",
              type: "danger",
            })
          );
        }
      });
  };

  return (
    <div>
      <div className="az-signin-wrapper">
        <FlashMessages />
        <div className="az-card-signin">
          <h1 className="az-logo">
            Crypto<span>fintech</span>x
          </h1>
          <div className="az-signin-header">
            <h2>Welcome back!</h2>
            <h4>Please sign in to continue</h4>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              {/* form-group */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>
              {/* form-group */}
              <button className="btn btn-az-primary btn-block">Sign In</button>
            </form>
          </div>
          {/* az-signin-header */}
          <div className="az-signin-footer">
            <p>
              <a href="#/">Forgot password?</a>
            </p>
            <p>
              Don't have an account? <Link to="/signup">Create an Account</Link>
            </p>
          </div>
          {/* az-signin-footer */}
        </div>
        {/* az-card-signin */}
      </div>
      {/* az-signin-wrapper */}
    </div>
  );
};

export default Signin;
