import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

/**
 * A functional component that renders a Location component in a fixed position at the bottom of the screen.
 * @returns The MobileLocation component.
 */
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
