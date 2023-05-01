import React from "react";
import {
  Box,
  InputBase,
  Typography,
  InputLabel,
  Stack,
  Button,
  Snackbar,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  TextareaAutosize,
  Alert
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useIsLargeView from "@/utils/useIsLarge";

interface FormProps {
  showFeedBack: boolean;
  setShowFeedBack: React.Dispatch<React.SetStateAction<boolean>>;
  nextClicked: boolean;
  setNextClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * A component that renders a feedback form and allows users to submit feedback.
 * @param {FormProps} props - The props object containing the form data.
 * @returns A JSX element that renders the feedback form.
 */
function FeedBack(props: FormProps) {
  const name = localStorage.getItem("name");
  const phoneNumber = localStorage.getItem("phoneNumber");
  const [showToast, setShowToast] = useState(false);
  const [FeedBackDetails, setFeedBackDetails] = useState({
    name: "",
    whatsapp: "",
    feedback: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlesubmit = (data: any) => {
    const { feedback } = FeedBackDetails;
    localStorage.setItem("feedback", feedback.toString());

    setShowToast(true);
    setTimeout(() => {
      props.setNextClicked(!props.nextClicked);
      setShowToast(false);
    }, 2000);
  };
  const handleSignUp = (name: string) => (e: any) => {
    setFeedBackDetails({ ...FeedBackDetails, [name]: e.target.value });
  };

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowToast(false);
  };

  const inputstyle = {
    border: ".3px solid #a9abb2",
    padding: ".2rem .5rem",
    marginTop: ".5rem",
    width: "100%",
  };
  const isLarge = useIsLargeView();
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
              Feedback submitted successfully
            </Alert>
          </Snackbar>
        </Box>
      )}

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
          open={true}
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
              Drop us a Feedback
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={() => props.setShowFeedBack((prevstate) => !prevstate)}
              />
            </Stack>
            <Divider style={{ paddingTop: "6px" }} />
          </DialogTitle>

          <DialogContent>
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
                    value={name}
                    style={inputstyle}
                    disabled={true}
                  ></InputBase>
                </Box>

                <Box>
                  <InputLabel>WhatsApp(+91)*</InputLabel>
                  <InputBase
                    value={phoneNumber}
                    style={inputstyle}
                    disabled={true}
                    inputProps={{
                      maxLength: 10,
                    }}
                  ></InputBase>
                  <Box></Box>
                </Box>

                <Box>
                  <InputLabel>Feedback</InputLabel>
                  <TextareaAutosize
                    value={FeedBackDetails.feedback}
                    style={{
                      background: "transparent",
                      color: "black",
                      width: "100%",
                      border: ".3px solid #a9abb2",
                      padding: ".2rem .5rem",
                      marginTop: ".5rem",
                    }}
                    {...register("feedback", {
                      required: true,
                      onChange: handleSignUp("feedback"),
                    })}
                    minRows={3}
                  ></TextareaAutosize>
                </Box>
                <Button
                  type="submit"
                  style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                  variant="contained"
                  disabled={FeedBackDetails.feedback === ""}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          anchor="bottom"
          open={true}
          onClose={() => props.setShowFeedBack(!props.showFeedBack)}
        >
          <Stack p={2} pb={1} display="flex" direction="column" spacing={2}>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
            >
              <Typography variant="h5" style={{ fontWeight: "700" }}>
                Drop us a Feedback
              </Typography>
              <CloseIcon
                onClick={() => props.setShowFeedBack(!props.showFeedBack)}
                style={{ cursor: "pointer" }}
              />
            </Stack>
            <Divider style={{ marginTop: "8px" }} />
          </Stack>

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
                  value={name}
                  style={inputstyle}
                  disabled={true}
                ></InputBase>
              </Box>

              <Box>
                <InputLabel>WhatsApp(+91)*</InputLabel>
                <InputBase
                  value={phoneNumber}
                  style={inputstyle}
                  disabled={true}
                  inputProps={{
                    maxLength: 10,
                  }}
                ></InputBase>
              </Box>

              <Box>
                <InputLabel>Feedback</InputLabel>
                <TextareaAutosize
                  minRows={3}
                  value={FeedBackDetails.feedback}
                  style={{
                    background: "transparent",
                    color: "black",
                    width: "100%",
                    border: ".3px solid #a9abb2",
                    padding: ".2rem .5rem",
                    marginTop: ".5rem",
                  }}
                  {...register("feedback", {
                    required: true,
                    onChange: handleSignUp("feedback"),
                  })}
                ></TextareaAutosize>
              </Box>
              <Button
                type="submit"
                style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                variant="contained"
                disabled={FeedBackDetails.feedback === ""}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Drawer>
      )}
    </>
  );
}

export default FeedBack;
