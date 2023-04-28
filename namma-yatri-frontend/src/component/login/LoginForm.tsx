import { useState } from "react";
import React from "react";
import {
  Box,
  InputBase,
  InputLabel,
  Stack,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import useIsLargeView from "@/utils/useIsLarge";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

type ChildProps = {
  SetShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  SetOtp: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginForm({ SetShowModal, SetOtp }: ChildProps) {
  const [logindetails, setlogindetails] = useState({ whatsapp: "" });

  const handlelogin = (name: string) => (e: any) => {
    setlogindetails({ ...logindetails, [name]: e.target.value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const displayotp = () => {
    SetShowModal(false);
    SetOtp(true);
  };
  const inputstyle = {
    border: ".3px solid #a9abb2",
    padding: ".2rem .5rem",
    marginTop: ".5rem",
    width: "100%",
  };
  const isLarge = useIsLargeView({ breakpoint: 786 });
  return (
    <>
      <Stack
        sx={{
          padding: !isLarge ? "48px 48px 8px 48px" : "0",
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
                onClick={() => SetShowModal(false)}
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
              <span className="error-message" style={{ color: "red" }}>
                This is required field
              </span>
            )}
            {errors.whatsapp && errors.whatsapp.type === "pattern" && (
              <span className="error-message" style={{ color: "red" }}>
                Enter a valid number
              </span>
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
    </>
  );
}

export default LoginForm;
