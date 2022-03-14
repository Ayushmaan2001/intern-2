import axios from 'axios';
import {useRef} from 'react';
import {useNavigate} from 'react-router-dom'

function Newpassword({change,Email}) {
    const pass = useRef();
    const newpass = useRef();
    // console.log(Email)
    const navigate = useNavigate();

    const changepassword = () => {
        if(pass.current.value === newpass.current.value)
        {
            axios.post("http://localhost:5000/forgetpassword",{
                pass:newpass.current.value,
                email:Email
            }).then((result) => {
                alert(result.data)
                navigate('/');
            }).catch((err) => {
                alert(err);
            });
        }
        else{
            console.log('2')
        }
    }

  return (
    <>
      <form onSubmit={(event) => {change(event)}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            New Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            ref={pass}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={newpass}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={changepassword}>
          Update Password
        </button>
      </form>
    </>
  );
}

export default Newpassword;
