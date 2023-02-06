import { Container } from "@mui/system"

function Login() {
    return (
        < Container >
            <head>
                <title>Login</title> 
            </head>
            <LoginContainer>
                <Logo/>

            </LoginContainer>
        </Container>
    )
 }

export default Login
const container = styled.div``;
const LoginContainer = styled.div``;
const Logo = styled.img``;
