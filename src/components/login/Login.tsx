import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BluredContainer = styled.div`
  filter: blur(4px);
`;

function Login() {
  return (
    <>
      <BluredContainer className="bg-login-background h-screen w-screen bg-cover"></BluredContainer>
      <div className="absolute left-0 top-0 h-screen w-screen flex justify-center items-center">
        <div className="bg-white w-96">
        <Link to="/">home</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
