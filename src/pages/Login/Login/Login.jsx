import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Login")
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(`logged in : ${loggedUser.email}`)
            navigate(from, {replace: true})
            // form.reset();
        })
        .catch(e => console.log(e))
    }
  return (
    <Container className="mx-auto w-25">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin} method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text className="text-secondary">Don't have an Account?
          <Link to="/register">Register</Link>
        </Form.Text>
        <br></br>
        <Form.Text className="text-success">
        </Form.Text>
        <br></br>
        <Form.Text className="text-danger">
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
