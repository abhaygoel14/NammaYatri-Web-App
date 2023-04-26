import useIsLargeView from "@/utils/useIsLarge";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const textColor = `opacity: 1;
color: rgb(244 244 246 / var(opacity));`;

const StyledTypography = styled(Typography)`
  ${textColor}
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
export default function Navbar() {
  const isLarge = useIsLargeView(786);
  return (
    <Box sx={{ background: "black" }}>
      <Box
        sx={{
          display: "flex",
          padding: isLarge
            ? "2rem 5rem 1.25rem 4rem"
            : "1rem 2rem 1.25rem 2rem",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="https://nammayatri.in/logos/nammaYatrilogo.svg"
          alt="logo.png"
          width="120"
          height="50"
          style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
        />
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "26px",
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
        </Box>
      </Box>
    </Box>
  );
}
