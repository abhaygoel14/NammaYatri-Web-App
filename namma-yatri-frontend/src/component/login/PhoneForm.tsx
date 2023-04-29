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
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import { useForm } from "react-hook-form";
import SendOtp from "@/api/WhatsappApiCall";
import generateOtp from "@/utils/generateOtp";

interface FormProps {
  showmodal: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PhoneForm(props: FormProps) {
  const isLarge = useIsLargeView({ breakpoint: 786 });
  const [SignUpdetails, setSignUpdetails] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const handlesubmit = (data: any) => {
    props.SetOtp(true);
    props.setshowmodal(!props.showmodal);
    console.log(data);
    const { name, whatsapp, email } = SignUpdetails;
    const otp = generateOtp();
    localStorage.setItem("name", name);
    localStorage.setItem("otp", otp.toString());
    SendOtp({ name, whatsapp, otp });
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
      >
        <DialogTitle
          variant="h5"
          style={{ fontWeight: "700", paddingBottom: "16px" }}
        >
          <Stack display="flex" direction="row" justifyContent="space-between">
            {loginclicked ? "Login" : "Sign Up"}
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.setshowmodal((prevstate) => !prevstate)}
            />
          </Stack>
          <Divider style={{ paddingTop: "6px" }} />
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit(handlesubmit)}>
            {loginclicked ? (
              <LoginForm
                SetOtp={props.SetOtp}
                SetShowModal={props.setshowmodal}
              />
            ) : (
              <Stack display="flex" direction="column" spacing={2}>
                <Box>
                  <InputLabel>Name</InputLabel>
                  <InputBase
                    value={SignUpdetails.name}
                    style={inputstyle}
                    placeholder="Enter Your Name"
                    {...register("name", {
                      onChange: handleSignUp("name"),
                      required: true,
                      pattern: /^[A-Za-z0-9]*$/,
                    })}
                  ></InputBase>
                  {errors.name && errors.name.type === "required" && (
                    <Typography
                      className="error-message"
                      style={{ color: "red" }}
                    >
                      This is required field
                    </Typography>
                  )}
                  {errors.name && errors.name.type === "pattern" && (
                    <Typography
                      className="error-message"
                      style={{ color: "red" }}
                    >
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
