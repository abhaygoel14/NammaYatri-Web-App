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
export default function PhoneForm() {
  const isLarge = useIsLargeView(786);
  return (
    <>
      <h1> Hello World</h1>
    </>
  );
}
