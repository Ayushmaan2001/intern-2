import "../scss/forgetPassword.css";
import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';
import axios from "axios";

function ForgetPassword({change,setEmail}) {
  const email = useRef()
  const navigate = useNavigate();
  
  const forget = () => {
    axios.post("http://localhost:5000/email",{
      email:email.current.value
    }).then((result) => {
      if(result.data[0].Email_Address === email.current.value)
      {
        setEmail(email.current.value);
      navigate('/newpassword')
      }
    }).catch((err) => {
      alert('Email not found')
    });
  }
  return (
    <>
      <form onSubmit={(e) => {change(e)}}>
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
        <button type="submit" className="btn btn-primary" onClick={forget}>
          Next
        </button>
      </form>
    </>
  );
}

export default ForgetPassword;
