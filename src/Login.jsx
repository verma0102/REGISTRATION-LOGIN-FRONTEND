import { useState } from "react";
import { Button, Card, CardContent, Grid, TextField, Stack, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const storeMail = localStorage.getItem("email");
  const stopPassword = localStorage.getItem("password");
  const { login } = useAuth();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target["email"].value == storeMail &&
      e.target["password"].value == stopPassword
    ) {
      login("0123456789abcdefghijklmnopqrstuvwxyz");
      history("/");
    } else {
      if (e.target["email"].value !== storeMail) {
        setEmailError("Email is a incorrect");
      }
      if (e.target["password"].value !== stopPassword) {
        setPasswordError("password is incorrect");
      }
    }
  };
  return (
    <div className="content">
      <Card style={{ maxWidth: 300, margin: '0 auto', padding: '10px 5px' }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Typography sx={{ color: 'black' }} align="center">LOGIN IN</Typography>
              </Grid>

              <Grid xs={12} item  >
                <TextField name='email' type="email" label="Email" size="small" placeholder="Enter Your Email ID" variant="outlined" fullWidth required />
              </Grid>
              {emailError && <p>{emailError}</p>}
              <Grid xs={12} item>
                <TextField name='password' type="password" label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
              </Grid>
              <Stack direction='row-reverse' spacing={1} margin={'0 auto'} padding={'10px 13px '}>
                <Button type="submit" variant="contained" size="small">
                  Login
                </Button>
                {passwordError && <p>{passwordError}</p>}
                <Link to="/register">
                  <Button variant="contained" size="small" startIcon={<SendIcon />}>
                    Register
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  );
};
export default Login;







