import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
import styled from 'styled-components'

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();

        const simulatedEmail = 'admin@example.com';
        const simulatedPassword = '123';
    
        if (email === simulatedEmail && password === simulatedPassword) {

          const simulatedToken = 'fake-jwt-token';
          localStorage.setItem('jwtToken', simulatedToken);
    
          navigate('/menu');
        } else {
          console.error('Login failed: Invalid email or password');
        }
      };
    
      return (
        <Container>
          <LoginForm onSubmit={handleLogin}>
            <Title>Login</Title>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
          </LoginForm>
        </Container>
      );
}

export default LoginScreen