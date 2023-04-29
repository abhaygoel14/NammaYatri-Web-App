import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

function PcLocation() {
  const [location, setlocation] = useState({ pickup: "", destination: "" });
  const Container = styled(Box)`
    position: absolute;
    padding: 5rem;
    max-width: 650px;
  `;
  const handleLocation = (name: string) => (e: any) => {
    setlocation({ ...location, [name]: e.target.value });
  };
  return (
    <Container>
      {<Location setLocation={setlocation} handleLocation={handleLocation} />}
    </Container>
  );
}

export default PcLocation;
