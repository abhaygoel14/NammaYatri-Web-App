import React, { useState } from "react";
import {
  Box,
  InputBase,
  Typography,
  InputLabel,
  Stack,
  Button,
  Snackbar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useIsLargeView from "@/utils/useIsLarge";
import generateOtp from "@/utils/generateOtp";
import SendOtp from "@/api/WhatsappApiCall";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface FormProps {
  showmodal: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignUp(props: FormProps) {
  const [SignUpdetails, setSignUpdetails] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
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

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isLarge = useIsLargeView();

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
      // console.log(data);
      const { name, whatsapp, email } = SignUpdetails;
      const otp = generateOtp();
      localStorage.setItem("name", name);
      localStorage.setItem("otp", otp.toString());
      localStorage.setItem("phoneNumber", whatsapp.toString());
      SendOtp({ name, whatsapp, otp });
    }, 3000);
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <Box mt={"50px"}>
          <Snackbar
            open={showToast}
            autoHideDuration={9000}
            onClose={handleCloseToast}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{ minWidth: "100%" }}
          >
            <Alert
              onClose={handleCloseToast}
              severity="success"
              sx={{ width: isLarge ? "30%" : "80%" }}
            >
              OTP send successfully
            </Alert>
          </Snackbar>
        </Box>
      )}

      <form onSubmit={handleSubmit(handlesubmit)}>
        <Stack
          display="flex"
          direction="column"
          p={isLarge ? 0 : 2}
          pb={isLarge ? 0 : 1}
          spacing={2}
        >
          <Box>
            <InputLabel>Name*</InputLabel>
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
            <InputLabel>WhatsApp(+91)*</InputLabel>
            <InputBase
              value={SignUpdetails.whatsapp}
              style={inputstyle}
              inputProps={{
                maxLength: 10,
              }}
              placeholder="Enter WhatsApp Number"
              {...register("whatsapp", {
                onChange: handleSignUp("whatsapp"),
                required: true,
                pattern: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
              })}
            ></InputBase>
            <Box>
              {errors.whatsapp && errors.whatsapp.type === "required" && (
                <Typography className="error-message" style={{ color: "red" }}>
                  This is required field
                </Typography>
              )}
              {errors.whatsapp && errors.whatsapp.type === "pattern" && (
                <Typography className="error-message" style={{ color: "red" }}>
                  Enter a 10 digit valid number
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
            disabled={
              SignUpdetails.name === "" || SignUpdetails.whatsapp === ""
            }
          >
            SignUp
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default SignUp;
