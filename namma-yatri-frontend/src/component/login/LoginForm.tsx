import { useState } from "react";
import React from "react";
import { Box, InputBase, InputLabel, Stack, Button } from "@mui/material";

function LoginForm() {
  const [logindetails, setlogindetails] = useState({ whatsapp: "" });

  const handlelogin = (name: string) => (e: any) => {
    setlogindetails({ ...logindetails, [name]: e.taret.value });
  };
  const inputstyle = {
    border: ".3px solid #a9abb2",
    padding: ".2rem .5rem",
    marginTop: ".5rem",
    width: "100%",
  };

  return (
    <>
      <Stack display="flex" direction="column" spacing={2}>
        <Box>
          <InputLabel>Whatsapp</InputLabel>
          <InputBase
            onChange={handlelogin("whatsapp")}
            value={logindetails.whatsapp}
            style={inputstyle}
            placeholder="Enter Your Name"
          ></InputBase>
        </Box>

        <Button
          type="submit"
          style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </>
  );
}

export default LoginForm;
