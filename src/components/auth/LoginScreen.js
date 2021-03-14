import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "romerodev001@gmail.com",
    password: "123456",
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch( startLoginEmailPassword(email, password) );  
    }
 }

 const isValidForm = () => {
   if (!validator.isEmail(email)) {
     dispatch( setError("email is not valid") );
     return false;
   }else if(password.lenght === 0){
    dispatch( setError("Password is empty") );
    return false;
   }

   dispatch( removeError() );

   return true;
 }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn-block btn btn-primary" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div
            className="google-btn"
            onClick={ handleGoogleLogin }
            >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link className="link" to="/auth/register">
            Create new account
          </Link>
        </div>
      </form>
    </>
  );
}
