import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import classes from "./AuthForm.module.css";
import { useRef, useState } from "react";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const AuthForm = (props) => {
    console.log('key', apiKey)
  const [isLogin, setIsLogin] = useState(true);
  console.log('state=>', isLogin)
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (isLogin) {
    } else {
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const data = await res.json()
          console.log(data)
          alert(data.error.message)
        }

        const data = await res.json()
        console.log(data)

      } catch (error) {
        console.log(error.message);
      }
    }

    emailRef.current.value = ''
    passwordRef.current.value = ''
  };
  return (
    <Container className="mt-3">
      <h3>{isLogin ? "Login" : "Signup"}</h3>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3" controlId="formEmail" required>
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            placeholder="Email"
            ref={emailRef}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formPassword" required>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Password"
            ref={passwordRef}
          ></FormControl>
        </FormGroup>
        {isLogin ? (
          <Button type="submit">Login</Button>
        ) : (
          <Button type="submit">Signup</Button>
        )}
      </Form>
      <button
        className={classes["button-in-disguise"]}
        onClick={() => setIsLogin((prevState) => !prevState)}
      >
        Don't have an account? Signup
      </button>
    </Container>
  );
};

export default AuthForm;
