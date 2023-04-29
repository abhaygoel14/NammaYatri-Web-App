import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Location from "./Location";

function MobileLocation() {
  const [location, setLocation] = useState({ pickup: "", destination: "" });

  const handleLocation = (name: string) => (e: any) => {
    setLocation({ ...location, [name]: e.target.value });
  };
  const Container = styled(Box)`
    position: fixed;
    bottom: 0;
    width: 100%;
  `;

  return (
    <>
      <Container>
        <Location setLocation={setLocation} handleLocation={handleLocation} />
      </Container>
    </>
  );
}
export default MobileLocation;
