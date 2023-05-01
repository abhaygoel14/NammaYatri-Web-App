import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

/**
 * A functional component that returns a styled container with a Location component inside.
 * The container is positioned absolutely and has padding and a max-width of 650px.
 * @returns A styled container with a Location component inside.
 */
function PcLocation() {
  const Container = styled(Box)`
    position: absolute;
    padding: 5rem;
    max-width: 650px;
  `;
  return <Container>{<Location />}</Container>;
}

export default PcLocation;
