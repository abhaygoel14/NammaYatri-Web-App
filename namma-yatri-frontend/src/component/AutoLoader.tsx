import { Box } from "@mui/material";
import React from "react";
import rickshawloader from "@/assets/auto_rickshaw_02.webp";
import Image from "next/image";
import styled from "@emotion/styled";

function AutoLoader() {
  const Container = styled(Box)`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(61 68 122);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <Container>
        <Image src={rickshawloader} alt="" />
      </Container>
    </>
  );
}

export default AutoLoader;
