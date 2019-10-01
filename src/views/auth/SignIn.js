import React, { useState } from 'react';
import withContext from 'components/hoc/withContext';

const SignIn = ({ action, history }) => {
  const [field, setField] = useState({});
  
  const onFormSubmit = (e) => {
    e.preventDefault();

    action.authAction.signin(field)
      .then(user => console.log(user))
      .catch(e => alert(e.message));
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
      <h1>Sign In</h1>
      <form onSubmit={onFormSubmit}> 
        <input type="email" placeholder="Email" onChange={onEmailChange}/>
        <input type="password" placeholder="Password" onChange={onPasswordChange}/>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default withContext()(SignIn);