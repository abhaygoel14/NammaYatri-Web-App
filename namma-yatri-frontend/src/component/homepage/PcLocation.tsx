import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

function PcLocation() {
  const Container = styled(Box)`
    position: absolute;
    padding: 5rem;
    max-width: 650px;
  `;
  return <Container>{<Location />}</Container>;
}

export default PcLocation;
