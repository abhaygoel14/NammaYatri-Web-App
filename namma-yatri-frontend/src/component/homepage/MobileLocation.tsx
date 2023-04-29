import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

function MobileLocation() {
  const Container = styled(Box)`
    position: fixed;
    bottom: 0;
    width: 100%;
  `;

  return (
    <>
      <Container>
        <Location />
      </Container>
    </>
  );
}
export default MobileLocation;
