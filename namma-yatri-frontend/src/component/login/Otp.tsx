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
} from "@mui/material";
import useIsLargeView from "@/utils/useIsLarge";

interface FormProps {
  show: boolean;
  setshow: React.Dispatch<React.SetStateAction<boolean>>;
}
function Otp(props: FormProps) {
  const [otp, setotp] = useState("");
  const handleChange = (newValue: any) => {
    setotp(newValue);
  };
  const handleotp = () => {
    const verifyOtp = localStorage.getItem("otp");
    if (verifyOtp === otp.toString()) {
      localStorage.setItem("isLoggedIn", "true");
      console.log("Logged in successfully");
      props.setshow(false);
    } else {
      console.log("Failed to Log In");
    }
    window.location.reload();
  };

  const isLarge = useIsLargeView({ breakpoint: 786 });
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
              <MuiOtpInput
                // style={{width:"88%", justifySelf:"center"}}
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
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer anchor="bottom" open={props.show}>
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
              // style={{width:"88%", justifySelf:"center"}}
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
    </>
  );
}

export default Otp;
