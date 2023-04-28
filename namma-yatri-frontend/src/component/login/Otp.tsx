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
    console.log(otp);
  };

  const isLarge = useIsLargeView({ breakpoint: 786 });
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
        open={props.show}
      >
        <DialogContent>
          <DialogTitle>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
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
    </>
  );
}

export default Otp;
