import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '1234',
    password2: '1234',
  })

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);

    if(isFormValid()){

    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      console.log('Name is required')
      return false;
    }else if ( !validator.isEmail( email ) ){
      console.log('email is not valid');
      return false;
    }else if( password !== password2 || password.length < 5){
      console.log('Password should be at least 5 characters and match each other');
      return false
    }

    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">
          Hola mundo
        </div>
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
