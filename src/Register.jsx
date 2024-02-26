import { Button, Grid, TextField, Card, CardContent, Typography, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target["password"].value !== e.target["conformPassword"].value) {
      setPasswordError("password do not match");
    }
    else {
      localStorage.setItem("username", e.target["name"].value);
      localStorage.setItem("email", e.target["email"].value);
      localStorage.setItem("password", e.target["password"].value);
      setAlert("Register is  successfully");
      history("/login");
    }
  };
  return (
    <div className="content">
      <Card style={{ maxWidth: 300, margin: '0 auto', padding: '10px 5px' }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Typography sx={{ color: 'black' }} align="center">REGISTRATION FORM</Typography>
              </Grid>
              <Grid xs={12} item >
                <TextField name='name' type="name" label="Name" size="small" placeholder="Enter Your UserName" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item  >
                <TextField name='email' type="email" label="Email" size="small" placeholder="Enter Your Email ID" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField name='password' type="password" label="Password" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField name='conformPassword' type="conformPassword" label="conformPassword" size="small" placeholder="Enter Your Password" variant="outlined" fullWidth required />
              </Grid>
              {passwordError && <p>{passwordError}</p>}
              <Stack direction='row-reverse' spacing={3} margin={'0 auto'} padding={'10px 5px '}>
                <Link to="/login">
                  <Button variant="contained" size="small" endIcon={<SendIcon />}>Login</Button>
                </Link>
                <Button variant="contained" size="small" type="submit">submit</Button>
              </Stack>
            </Grid>
          </form>
          <p>{alert}</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default Register;
