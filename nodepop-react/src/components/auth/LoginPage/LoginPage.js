import { useState } from "react";
import Button from "../../common/button";

function LoginPage() {
  const [value, setValue] = useState({ username: "", password: "" });

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <div className='LoginPage'>
      <h1 className='loginPage-title'> Log in to Node Pop </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={value.username}
          onChange={handleChange}
        ></input>
        <input
          type='password'
          name='password'
          value={value.password}
          onChange={handleChange}
        ></input>
        <input
          type='checkbox'
          onChange={event => console.log(event.target.checked)}
        ></input>
        <input
          type='file'
          onChange={event => console.log(event.target.files)}
        ></input>
        <Button
          type='submit'
          variant='primary'
          disabled={!value.username || !value.password}
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
