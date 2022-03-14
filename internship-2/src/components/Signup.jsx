import "../scss/Signup.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ change }) {
  const first = useRef();
  const last = useRef();
  const pass = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const Register = () => {
    axios
      .post("http://localhost:5000/register", {
        email: email.current.value,
        password: pass.current.value,
        first_name: first.current.value,
        last_name: last.current.value,
      })
      .then((res) => {
        alert("Successfully Register now you can login");
        navigate('/')
      }).catch((err) => {
        alert("Try Again");
      })

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
            aria-describedby="emailHelp"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" ref={first} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" ref={last} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" ref={pass} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={Register}>
          Signup
        </button>
      </form>
    </>
  );
}

export default SignUp;
