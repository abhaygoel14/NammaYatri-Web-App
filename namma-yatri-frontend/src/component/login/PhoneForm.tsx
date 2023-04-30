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
import WarningIcon from "@mui/icons-material/Warning";
import Form from "./Form";
import Link from "next/link";
import { WHATSAPP_GET_HELP_LINK, WHATSAPP_GET_VERIFY_LINK } from "../const/api";

interface FormProps {
  showmodal: boolean;
  setshowmodal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PhoneForm(props: FormProps) {
  const isLarge = useIsLargeView();

  return (
    <>
      {isLarge ? (
        <Dialog
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: isLarge ? "70%" : "60%",
                maxWidth: "500px",
                maxHeight: "calc(102% - 64px)",
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
              Login to Namma Yatri
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={() => props.setshowmodal((prevstate) => !prevstate)}
              />
            </Stack>
            <Divider style={{ paddingTop: "6px" }} />

            <Box display="flex" mt={2} gap="4px">
              <WarningIcon />
              <Typography
                variant="body2"
                sx={{
                  alignSelf: "end",
                  fontWeight: "700",
                  color: "red",
                  display: "flex",
                  gap: "4px",
                }}
              >
                Please verify your WhatsApp number
                <Link href={WHATSAPP_GET_VERIFY_LINK} target="_blank">
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Click Here
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </DialogTitle>

          <DialogContent>
            <Form
              showmodal={props.showmodal}
              setshowmodal={props.setshowmodal}
              SetOtp={props.SetOtp}
            />
            <Box display="flex" justifyContent="center" gap={0.5} mt={2}>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)" }}
              >
                Need Help?
              </Typography>
              <Link href={WHATSAPP_GET_HELP_LINK} target="_blank">
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

            <Box display="flex" gap="4px">
              <WarningIcon />
              <Typography
                variant="body2"
                sx={{
                  alignSelf: "end",
                  fontWeight: "700",
                  color: "red",
                  display: "flex",
                  gap: "4px",
                }}
              >
                Please verify your WhatsApp number
                <Link href={WHATSAPP_GET_VERIFY_LINK}>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Click Here
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Stack>

          <Form
            showmodal={props.showmodal}
            setshowmodal={props.setshowmodal}
            SetOtp={props.SetOtp}
          />
          <Box display="flex" justifyContent="center" gap={0.5} mt={0.5} mb={1}>
            <Typography
              variant="body2"
              style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6)" }}
            >
              Need Help?
            </Typography>
            <Link href={WHATSAPP_GET_HELP_LINK}>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
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
