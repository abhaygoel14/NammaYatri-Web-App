import useIsLargeView from "@/utils/useIsLarge";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import PhoneForm from "../login/PhoneForm";
import MenuIcon from "@mui/icons-material/Menu";
import MobileSignUp from "../login/MobileSignUp";
import Otp from "../login/Otp";

const textColor = `opacity: 1;
color: rgb(244 244 246 / var(opacity));`;

const StyledTypography = styled(Typography)`
  ${textColor}
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export default function Navbar() {
  const isLarge = useIsLargeView({ breakpoint: 786 });
  const [showotp, setshowotp] = useState(false);
  const [isdrop, setisdrop] = useState(false);
  const [showmodel, setshowmodel] = useState(false);
  const [SignUpdetails, setSignUpdetails] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });

  const showHamBg = () => {
    setisdrop(!isdrop);
  };
  return (
    <>
      <Box sx={{ background: "black" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isLarge ? "row" : "column",
            padding: isLarge ? "2rem 5rem 1.25rem 4rem" : "1rem 2rem 1rem 2rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: isLarge ? "center" : "start",
          }}
        >
          {isLarge ? (
            <Link href="/homepage">
              <Image
                src="https://nammayatri.in/logos/nammaYatrilogo.svg"
                alt="logo.png"
                width="120"
                height="50"
                style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
              />
            </Link>
          ) : (
            <Box display="flex" width="100%" alignItems="center">
              <Link href="/homepage">
                <Image
                  src="https://nammayatri.in/logos/nammaYatrilogo.svg"
                  alt="logo.png"
                  width="120"
                  height="50"
                  style={{
                    cursor: "pointer",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
              {!isLarge && (
                <Button
                  onClick={() => setshowmodel(!showmodel)}
                  sx={{
                    background: "rgb(252 195 44 / 1)",
                    color: "#2a2a2a",
                    marginLeft: "auto",
                    marginRight: "1rem",
                    display: isLarge ? "none" : "block",
                    "&:hover": {
                      background: "rgb(252 195 44 / 1)",
                      color: "black",
                    },
                  }}
                >
                  <Typography fontSize={12} fontWeight={600}>
                    Login/Sign up
                  </Typography>
                </Button>
              )}
              <Box onClick={showHamBg} style={{ cursor: "pointer" }}>
                <MenuIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          )}
          <Box
            sx={{
              margin: isLarge ? "0" : "1rem",
              overflow: "hidden",
              color: "white",
              display: isLarge ? "flex" : isdrop ? "flex" : "none",
              flexDirection: isLarge ? "row" : "column",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: isLarge ? "center" : "start",
              height: isLarge ? null : isdrop ? "14vh" : "0vh",
              gap: isLarge ? "26px" : "8px",
            }}
          >
            <Link href="/homepage">
              <StyledTypography
                sx={{
                  "&:hover": {
                    color: "rgb(252 195 44 / 1)",
                  },
                }}
              >
                Home
              </StyledTypography>
            </Link>
            <Link href="/about">
              <StyledTypography
                sx={{
                  "&:hover": {
                    color: "rgb(252 195 44 / 1)",
                  },
                }}
              >
                About Us
              </StyledTypography>
            </Link>

            <Button
              onClick={() => setshowmodel(true)}
              sx={{
                background: "rgb(252 195 44 / 1)",
                color: "#2a2a2a",
                display: isLarge ? "block" : "none",
                "&:hover": {
                  background: "rgb(252 195 44 / 1)",
                  color: "black",
                },
              }}
            >
              <Typography fontSize={16} fontWeight={600}>
                Login/Sign up
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      {isLarge
        ? showmodel && (
            <PhoneForm
              SetOtp={setshowotp}
              setshowmodal={setshowmodel}
              showmodal={showmodel}
            />
          )
        : showmodel && (
            <>
              <MobileSignUp
                SetOtp={setshowotp}
                signup={SignUpdetails}
                setshowmodal={setshowmodel}
                showmodal={showmodel}
                setsignup={setSignUpdetails}
              />
            </>
          )}
      {showotp && <Otp show={showotp} setshow={setshowotp} />}
    </>
  );
}
