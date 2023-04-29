import React, { useState } from "react";
import {
  Box,
  InputBase,
  Typography,
  InputLabel,
  Stack,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import useIsLargeView from "@/utils/useIsLarge";
import generateOtp from "@/utils/generateOtp";
import SendOtp from "@/api/WhatsappApiCall";

interface FormProps {
  showmodal: boolean;
  loginclicked: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp(props: FormProps) {
  const [SignUpdetails, setSignUpdetails] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [logindetails, setlogindetails] = useState({ whatsapp: "" });
  const [showToast, setShowToast] = useState(false);
  const inputstyle = {
    border: ".3px solid #a9abb2",
    padding: ".2rem .5rem",
    marginTop: ".5rem",
    width: "100%",
  };
  const handleSignUp = (name: string) => (e: any) => {
    setSignUpdetails({ ...SignUpdetails, [name]: e.target.value });
  };

  const handlelogin = (name: string) => (e: any) => {
    setlogindetails({ ...logindetails, [name]: e.target.value });
  };

  const displayotp = () => {
    props.setshowmodal(false);
    props.SetOtp(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isLarge = useIsLargeView({ breakpoint: 786 });

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowToast(false);
  };

  const handlesubmit = (data: any) => {
    setTimeout(() => {
      props.SetOtp(true);
      props.setshowmodal(!props.showmodal);
      console.log(data);
      const { name, whatsapp, email } = SignUpdetails;
      const otp = generateOtp();
      localStorage.setItem("name", name);
      localStorage.setItem("otp", otp.toString());
      SendOtp({ name, whatsapp, otp });
    }, 3000);
    setShowToast(true);
  };

  return (
    <>
      {props.loginclicked ? (
        <form onSubmit={handleSubmit(handlesubmit)}>
          <Stack
            sx={{
              padding: !isLarge ? "32px 32px 8px 32px" : "0",
            }}
            display="flex"
            direction="column"
            spacing={2}
          >
            {!isLarge && (
              <>
                <Stack
                  display="flex"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="h5" style={{ fontWeight: "700" }}>
                    LogIn
                  </Typography>
                  <CloseIcon
                    onClick={() => props.setshowmodal(false)}
                    style={{ cursor: "pointer" }}
                  />
                </Stack>

                <Divider style={{ marginTop: "8px" }} />
              </>
            )}

            <Box>
              <InputLabel>WhatsApp</InputLabel>
              <InputBase
                value={logindetails.whatsapp}
                style={inputstyle}
                placeholder="Enter Your Name"
                {...register("whatsapp", {
                  onChange: handlelogin("whatsapp"),
                  required: true,
                  pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                })}
              ></InputBase>
              <Box>
                {errors.whatsapp && errors.whatsapp.type === "required" && (
                  <Typography
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    This is required field
                  </Typography>
                )}
                {errors.whatsapp && errors.whatsapp.type === "pattern" && (
                  <Typography
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    Enter a valid number
                  </Typography>
                )}
              </Box>
            </Box>

            <Button
              type="submit"
              style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
              variant="contained"
              onClick={displayotp}
            >
              Login
            </Button>
          </Stack>
        </form>
      ) : (
        <form onSubmit={handleSubmit(handlesubmit)}>
          <Stack
            display="flex"
            direction="column"
            p={isLarge ? 0 : 2}
            pb={isLarge ? 0 : 1}
            spacing={2}
          >
            <Box>
              <InputLabel>Name</InputLabel>
              <InputBase
                value={SignUpdetails.name}
                style={inputstyle}
                placeholder="Enter Your Name"
                {...register("name", {
                  onChange: handleSignUp("name"),
                  required: true,
                  pattern: /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/,
                })}
              ></InputBase>
              {errors.name && errors.name.type === "required" && (
                <Typography className="error-message" style={{ color: "red" }}>
                  This is required field
                </Typography>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <Typography className="error-message" style={{ color: "red" }}>
                  Enter a valid name
                </Typography>
              )}
            </Box>

            <Box>
              <InputLabel>WhatsApp</InputLabel>
              <InputBase
                value={SignUpdetails.whatsapp}
                style={inputstyle}
                placeholder="Enter WhatsApp Number"
                {...register("whatsapp", {
                  onChange: handleSignUp("whatsapp"),
                  required: true,
                  pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                })}
              ></InputBase>
              <Box>
                {errors.whatsapp && errors.whatsapp.type === "required" && (
                  <Typography
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    This is required field
                  </Typography>
                )}
                {errors.whatsapp && errors.whatsapp.type === "pattern" && (
                  <Typography
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    Enter a valid number
                  </Typography>
                )}
              </Box>
            </Box>

            <Box>
              <InputLabel>Email</InputLabel>
              <InputBase
                type="text"
                value={SignUpdetails.email}
                style={inputstyle}
                placeholder="Enter Your Email"
                {...register("email", {
                  onChange: handleSignUp("email"),
                })}
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
        </form>
      )}

      {showToast && (
        <Snackbar
          open={showToast}
          autoHideDuration={6000}
          onClose={handleCloseToast}
        >
          <Alert
            onClose={handleCloseToast}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default SignUp;
