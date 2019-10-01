import React, { useState, useEffect } from 'react';
import withContext from '../../components/hoc/withContext';

const SignUp = ({ action, history }) => {
  const [field, setField] = useState({});
  
  const onFormSubmit = (e) => {
    e.preventDefault();

    action.authAction.signup(field)
      .then(user => console.log(user))
      .catch(e => alert(e.message));
  };

  const onFullNameChange = (e) => {
    const val = e.target.value;
    setField({ ...field, fullname: val });
  };

  const onEmailChange = (e) => {
    const val = e.target.value;
    setField({ ...field, email: val });
  };

  const onPasswordChange = (e) => {
    const val = e.target.value;
    setField({ ...field, password: val });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onFormSubmit}> 
        <input type="text" placeholder="Full Name" onChange={onFullNameChange}/>
        <input type="email" placeholder="Email" onChange={onEmailChange}/>
        <input type="password" placeholder="Password" onChange={onPasswordChange}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withContext()(SignUp);