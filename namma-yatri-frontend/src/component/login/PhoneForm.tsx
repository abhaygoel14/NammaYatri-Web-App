import useIsLargeView from "@/utils/useIsLarge";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Stack,
  Divider,
  Drawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { useState } from "react";

import Form from "./Form";
import Link from "next/link";

interface FormProps {
  showmodal: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PhoneForm(props: FormProps) {
  const isLarge = useIsLargeView();
  const [loginClicked, setloginClicked] = useState(false);

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
          open={props.showmodal}
        >
          <DialogTitle
            variant="h5"
            style={{ fontWeight: "700", paddingBottom: "16px" }}
          >
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
            >
              {loginClicked ? "Login" : "Sign Up"}
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={() => props.setshowmodal((prevstate) => !prevstate)}
              />
            </Stack>
            <Divider style={{ paddingTop: "6px" }} />
          </DialogTitle>

          <DialogContent>
            <Form
              showmodal={props.showmodal}
              loginclicked={loginClicked}
              setshowmodal={props.setshowmodal}
              SetOtp={props.SetOtp}
            />
            <Box display="flex" justifyContent="center" gap={0.5} mt={2}>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)" }}
              >
                Verify your Whatsapp Number?
              </Typography>
              <Link href="https://wa.me/message/RGQ3A3WT3CLYK1">
                <Typography
                  sx={{
                    color: "blue",
                    opacity: "1",
                    cursor: "pointer",
                    textAlign: "center",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  Click here
                </Typography>
              </Link>
            </Box>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          anchor="bottom"
          open={props.showmodal}
          onClose={() => props.setshowmodal(false)}
        >
          {!loginClicked && (
            <Stack p={2} pb={1} display="flex" direction="column" spacing={2}>
              <Stack
                display="flex"
                direction="row"
                justifyContent="space-between"
              >
                <Typography variant="h5" style={{ fontWeight: "700" }}>
                  SignUp
                </Typography>
                <CloseIcon
                  onClick={() => props.setshowmodal(!props.showmodal)}
                  style={{ cursor: "pointer" }}
                />
              </Stack>
              <Divider style={{ marginTop: "8px" }} />
            </Stack>
          )}
          <Form
            showmodal={props.showmodal}
            loginclicked={loginClicked}
            setshowmodal={props.setshowmodal}
            SetOtp={props.SetOtp}
          />
          <Box display="flex" justifyContent="center" gap={0.5} mt={0.5} mb={1}>
            <Typography
              variant="body2"
              style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)" }}
            >
              Already an User?
            </Typography>
            <Link href="https://wa.me/message/RGQ3A3WT3CLYK1">
              <Typography
                onClick={() => setloginClicked(!loginClicked)}
                variant="body2"
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "rgba(0, 0, 0, 0.6)",
                  cursor: "pointer",
                }}
              >
                Click Here
              </Typography>
            </Link>
          </Box>
        </Drawer>
      )}
    </>
  );
}