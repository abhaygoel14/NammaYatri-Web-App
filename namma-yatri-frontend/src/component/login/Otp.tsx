import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
  Button,
  Stack,
  Drawer,
  Snackbar,
  Box,
} from "@mui/material";
import useIsLargeView from "@/utils/useIsLarge";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface FormProps {
  show: boolean;
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Otp(props: FormProps) {
  const [otp, setotp] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errorOtp, setErrorOtp] = useState(false);
  const handleChange = (newValue: any) => {
    setotp(newValue);
  };
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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
  const handleotp = () => {
    const verifyOtp = localStorage.getItem("otp");
    if (verifyOtp === otp.toString()) {
      localStorage.setItem("isLoggedIn", "true");
      props.setshow(false);
      setErrorOtp(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setShowToast(true);
    } else {
      setErrorOtp(true);
    }
    setShowToast(true);
  };

  return (
    <>
      {isLarge ? (
        <Dialog
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: isLarge ? "70%" : "60%",
                maxWidth: "500px",
              },
            },
          }}
          open={props.show}
        >
          <DialogContent>
            <KeyboardBackspaceIcon
              sx={{ cursor: "pointer", margin: ".5rem" }}
              onClick={() => {
                props.setshowmodal(true);
                props.setshow(false);
              }}
            />
            <DialogTitle>
              <Stack
                display="flex"
                direction="row"
                justifyContent="space-between"
              >
                <Typography
                  style={{ fontWeight: "700", paddingBottom: "16px" }}
                >
                  Enter OTP
                </Typography>
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => props.setshow((prevstate) => !prevstate)}
                />
              </Stack>

              <Divider style={{ paddingTop: "6px" }} />
            </DialogTitle>

            <Stack display="flex" spacing={2} p={2}>
              <MuiOtpInput length={5} value={otp} onChange={handleChange} />

              <Button
                onClick={handleotp}
                type="submit"
                style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                variant="contained"
              >
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer anchor="bottom" open={props.show}>
          <KeyboardBackspaceIcon
            sx={{ cursor: "pointer", margin: ".5rem" }}
            onClick={() => {
              props.setshowmodal(true);
              props.setshow(false);
            }}
          />
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            style={{ padding: "16px 8px 0 8px" }}
          >
            <Typography style={{ fontWeight: "700", paddingBottom: "16px" }}>
              Enter OTP
            </Typography>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.setshow((prevstate) => !prevstate)}
            />
          </Stack>
          <Divider style={{ paddingTop: "6px" }} />
          <Stack display="flex" spacing={2} p={2}>
            <MuiOtpInput
              inputMode="numeric"
              length={5}
              value={otp}
              onChange={handleChange}
            />

            <Button
              onClick={handleotp}
              type="submit"
              style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Drawer>
      )}
      {showToast && (
        <Box mt={"50px"}>
          <Snackbar
            open={showToast}
            autoHideDuration={6000}
            onClose={handleCloseToast}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{ minWidth: "100%" }}
          >
            <Alert
              onClose={handleCloseToast}
              severity={errorOtp ? "error" : "success"}
              sx={{ width: isLarge ? "30%" : "80%" }}
            >
              {errorOtp ? "Wrong OTP ! Please try again" : "Login Successful!"}
            </Alert>
          </Snackbar>
        </Box>
      )}
    </>
  );
}

export default Otp;
