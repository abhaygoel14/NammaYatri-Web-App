import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import driver from "@/assets/driverOnboard.png";
import AutoWala from "./AutoWala";
import useIsLargeView from "@/utils/useIsLarge";
interface FormProps {
  nextClicked: boolean;
  setNextClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
function Booking(props: FormProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [selectedAuto, setSelectedAuto] = useState(false);
  const [selectedYatri, setSelectedYatri] = useState(false);
  let hour = "",
    minute = "";
  const now = new Date();
  hour = now.getHours().toString();
  minute = now.getMinutes().toString();
  const isLarge = useIsLargeView();

  const handleYatriAuto = () => {
    setSelectedAuto(true);
    setSelectedYatri(false);
  };
  const handleYatriGo = () => {
    setSelectedYatri(true);
    setSelectedAuto(false);
  };
  return (
    <>
      {!confirmed ? (
        <Box style={{ position: "relative" }}>
          <Box>
            <Stack
              display="flex"
              direction="row"
              style={{
                padding: " 8px 16px",
                backgroundColor: selectedAuto ? "lightblue" : "white",
              }}
            >
              <Box>
                <Image
                  src={driver}
                  style={{ objectFit: "contain" }}
                  width="80"
                  height="80"
                  alt=""
                ></Image>
              </Box>
              <Stack
                display="flex"
                pt={2}
                style={{
                  height: "min-content",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                onClick={handleYatriAuto}
              >
                <Typography variant="subtitle1" fontWeight="700">
                  Namma Yatri Auto
                </Typography>
                <Typography variant="body2">
                  {hour}:{minute} 14min away
                </Typography>
              </Stack>

              <Box pt={2} sx={{ marginLeft: "auto" }}>
                <Typography variant="h6">₹516.39</Typography>
              </Box>
            </Stack>

            <Stack
              display="flex"
              direction="row"
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                backgroundColor: selectedYatri ? "lightblue" : "white",
              }}
              onClick={handleYatriGo}
            >
              <Box>
                <Image
                  src={driver}
                  style={{ objectFit: "contain" }}
                  width="80"
                  height="80"
                  alt=""
                ></Image>
              </Box>
              <Stack display="flex" pt={2} style={{ height: "min-content" }}>
                <Typography variant="subtitle1" fontWeight="700">
                  Namma Yatri Go
                </Typography>
                <Typography variant="body2">
                  {hour}:{minute} 14min away
                </Typography>
              </Stack>

              <Box pt={2} sx={{ marginLeft: "auto" }}>
                <Typography variant="h6">₹615.5</Typography>
              </Box>
            </Stack>

            {isLarge && (
              <Button
                onClick={() => setConfirmed(!confirmed)}
                style={{
                  width: "100%",
                  background: "rgb(252 195 44)",
                  color: "black",
                }}
                variant="contained"
                disabled={!selectedAuto && !selectedYatri}
              >
                Confirm Book
              </Button>
            )}
          </Box>
          {!isLarge && (
            <Button
              onClick={() => setConfirmed(!confirmed)}
              style={{
                width: "100%",
                position: "absolute",
                background: "rgb(252 195 44)",
                color: "black",
              }}
              variant="contained"
              disabled={!selectedAuto && !selectedYatri}
            >
              Confirm Book
            </Button>
          )}
        </Box>
      ) : (
        <AutoWala
          nextClicked={props.nextClicked}
          setNextClicked={props.setNextClicked}
        />
      )}
    </>
  );
}

export default Booking;
