import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const {msgError} = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456',
  })

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2);
    console.log('Formulario Completo');

    if(isFormValid()){ }
  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(
        setError('Name is required')
      );
      return false;
    }else if ( !validator.isEmail( email ) ){
       dispatch(
         setError('email is not valid')
      );
      return false;
    }else if( password !== password2 || password.length < 5){
      dispatch(
        setError('Password should be at least 5 characters and match each other')
      );
      return false;
    }

    dispatch(
      removeError()
    );

    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />
        <button className="mb-5 btn-block btn btn-primary" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already registered ?
        </Link>
      </form>
    </>
  );
}
