import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
function AutoWala() {
  return (
    <>
      <Stack display="flex" direction="row" padding="1rem" spacing={5}>
        <Box display="flex" alignItems="start" justifyContent="center">
          <Avatar
            src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0"
            sx={{ height: "100px", width: "100px" }}
            variant="square"
          ></Avatar>
        </Box>

        <Stack display="flex" spacing={1}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography variant="subtitle1" fontWeight="600">
              Name:
            </Typography>
            <Typography variant="body2">Nandan Bilagi</Typography>
            <VerifiedIcon sx={{ color: "green", fontSize: "16px" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography variant="subtitle1" fontWeight="600">
              Ph.No:
            </Typography>
            <Typography variant="body2">9535596139</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "8px",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
              variant="contained"
            >
              <WhatsAppIcon sx={{ marginRight: "4px" }} />
              Call
            </Button>
            <Button
              style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
              variant="contained"
            >
              <WhatsAppIcon sx={{ marginRight: "4px" }} />
              Message
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          display: "flex",
          gap: ".3rem",
          alignSelf: "center",
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Typography
          sx={{ opacity: ".5", textAlign: "center", fontSize: "14px" }}
        >
          Need Help?
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
    </>
  );
}

export default AutoWala;
