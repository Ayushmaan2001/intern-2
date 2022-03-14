import "../scss/Login.css";
import { useRef } from "react";
import axios from "axios";

function Login({ change }) {
  const email = useRef();
  const password = useRef();

  const Login = () => {
    axios
      .post("http://localhost:5000/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        if (
          res.data[0].Email_Address === email.current.value &&
          res.data[0].Password === password.current.value
        ) {
          alert("Success");
        } else {
          alert(res.data);
        }
      })
      .catch((err) => {
        alert('Not Found');
      });
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          change(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={password}
          />
        </div>
        <label className="form-check-label mb-2" htmlFor="exampleCheck1">
          <a href='/forgetpassword'>
            Forget Password
          </a>
        </label>
        <button type="submit" className="btn btn-primary" onClick={Login}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
