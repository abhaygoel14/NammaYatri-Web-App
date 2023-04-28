import React from 'react'
import {useState} from 'react'
import {
    Box, Button, Typography,Drawer,
    InputBase,
    InputLabel,
    Stack,
    Divider
  } from "@mui/material";
import LoginForm from './LoginForm';
import CloseIcon from '@mui/icons-material/Close';


type SignUpDetailsType = {
    name: string;
    whatsapp: string;
    email: string;
  };
  
  
  type ChildProps = {
    signup: SignUpDetailsType;
    showmodal:boolean;
    setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
    SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
    setsignup:React.Dispatch<React.SetStateAction<SignUpDetailsType>>;
  };

function MobileSignUp({signup,setsignup,showmodal,SetOtp,setshowmodal}:ChildProps) {
      const [mobileloginclicked, setmobileloginclicked] = useState(false);
    const inputstyle = {
        border: ".3px solid #a9abb2",
        padding: ".2rem .5rem",
        marginTop: ".5rem",
        width: "100%",
      };

      const handleSignUp = (name: string) => (e: any) => {
        setsignup({ ...signup, [name]: e.target.value });
      };
      const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(signup);
      };
  return (
    <>
          <Drawer  open={showmodal}  anchor="bottom">
           
          <form onSubmit={(e) => handlesubmit(e)}>
            {mobileloginclicked ? (
              <LoginForm SetOtp={SetOtp} SetShowModal={setshowmodal}/>
            ) : (
              <Stack p={6} pb={1} display="flex" direction="column" spacing={2}>
                <Stack display="flex" direction="row" justifyContent="space-between">
                  <Typography variant='h5' style={{fontWeight:"700"}}>SignUp</Typography>
                 <CloseIcon onClick={()=>setshowmodal(!showmodal)} style={{cursor:"pointer"}}/>
                </Stack>
             
                <Divider style={{marginTop:"8px"}}/> 
                <Box>
                  <InputLabel>Name</InputLabel>
                  <InputBase
                    
                    onChange={handleSignUp("name")}
                    value={signup.name}
                    style={inputstyle}
                    placeholder="Enter Your Name"
                  ></InputBase>
                </Box>

                <Box>
                  <InputLabel>WhatsApp</InputLabel>
                  <InputBase
                    onChange={handleSignUp("whatsapp")}
                    value={signup.whatsapp}
                    style={inputstyle}
                    placeholder="Enter WhatsApp Number"
                  ></InputBase>
                </Box>

                <Box>
                  <InputLabel>Email</InputLabel>
                  <InputBase
                    type='email'
                    onChange={handleSignUp("email")}
                    value={signup.email}
                    style={inputstyle}
                    placeholder="Enter Your Email"
                  ></InputBase>
                </Box>
                <Button
                  type="submit"
                  style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                  variant="contained"
                >
                  SignUp
                </Button>
              </Stack>
            )}
          </form>
          <Box display="flex" justifyContent="center" gap={0.5} mt={2}>
            <Typography
              variant="body2"
              style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)" }}
            >
              {mobileloginclicked ? "New Customer?" : "Already an User? Just"}{" "}
            </Typography>
            <Typography
              onClick={() => setmobileloginclicked(!mobileloginclicked)}
              variant="body2"
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "rgba(0, 0, 0, 0.6)",
                cursor: "pointer",
              }}
            >
              {mobileloginclicked ? "Sign Up" : "Login"}{" "}
            </Typography>
          </Box>
        </Drawer>
    </>
  )
}

export default MobileSignUp