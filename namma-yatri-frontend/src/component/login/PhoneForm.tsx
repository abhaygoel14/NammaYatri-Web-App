import useIsLargeView from "@/utils/useIsLarge";
import {
  Box,
  InputBase,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  InputLabel,
  Stack,
  Button,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";

const textColor = `opacity: 1;
color: rgb(244 244 246 / var(opacity));`;

interface FormProps {
  showmodal: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PhoneForm(props: FormProps) {
  const isLarge = useIsLargeView({ breakpoint: 786 });
  const [SignUpdetails, setSignUpdetails] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [loginclicked, setloginclicked] = useState(false);

  const inputstyle = {
    border: ".3px solid #a9abb2",
    padding: ".2rem .5rem",
    marginTop: ".5rem",
    width: "100%",
  };
  const handleSignUp = (name: string) => (e: any) => {
    setSignUpdetails({ ...SignUpdetails, [name]: e.target.value });
  };

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(SignUpdetails);
  };
  return (
    <>
      <Dialog
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: isLarge ? "70%" : "60%",
              maxWidth: "500px",
            },
          },
        }}
        open={props.showmodal}
        onClose={() => props.setshowmodal((prevstate) => !prevstate)}
      >
        <DialogTitle>{loginclicked ? "Login" : "Sign Up"}</DialogTitle>

        <DialogContent>
          <form onSubmit={(e) => handlesubmit(e)}>
            {loginclicked ? (
              <LoginForm />
            ) : (
              <Stack display="flex" direction="column" spacing={2}>
                <Box>
                  <InputLabel>Name</InputLabel>
                  <InputBase
                    onChange={handleSignUp("name")}
                    value={SignUpdetails.name}
                    style={inputstyle}
                    placeholder="Enter Your Name"
                  ></InputBase>
                </Box>

                <Box>
                  <InputLabel>WhatsApp</InputLabel>
                  <InputBase
                    onChange={handleSignUp("whatsapp")}
                    value={SignUpdetails.whatsapp}
                    style={inputstyle}
                    placeholder="Enter WhatsApp Number"
                  ></InputBase>
                </Box>

                <Box>
                  <InputLabel>Email</InputLabel>
                  <InputBase
                    onChange={handleSignUp("email")}
                    value={SignUpdetails.email}
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
              {loginclicked ? "New Customer" : "Already an User? Just"}{" "}
            </Typography>
            <Typography
              onClick={() => setloginclicked(!loginclicked)}
              variant="body2"
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "rgba(0, 0, 0, 0.6)",
                cursor: "pointer",
              }}
            >
              {loginclicked ? "Sign Up" : "Login"}{" "}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
