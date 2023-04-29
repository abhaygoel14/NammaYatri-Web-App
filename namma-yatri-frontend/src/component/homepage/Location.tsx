import {
  Box,
  InputBase,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import useIsLargeView from "@/utils/useIsLarge";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Crop54Icon from "@mui/icons-material/Crop54";
import useLiveCity from "../const/useLiveCity";
import Image from "next/image";
import VerticalLine from "@/assets/vertical-line.png";
import Booking from "../Booking/Booking";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type SignUpDetailsType = {
  pickup: string;
  destination: string;
};

type ChildProps = {
  setLocation: React.Dispatch<React.SetStateAction<SignUpDetailsType>>;
  handleLocation: (
    name: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const livelocationstyle = {
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "black",
  height: "max-content",
  alignSelf: "center",
  padding: "8px",
};
const VerticalLineComponent = styled(Box)`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  width: min-content;
  z-index: 10;
`;
function Location({ setLocation, handleLocation }: ChildProps) {
  const livecity = useLiveCity();
  const [nextClicked, setNextClicked] = useState(false);

  const isLarge = useIsLargeView({ breakpoint: 786 });

  return (
    <>
      <Paper
        style={{
          padding: isLarge ? "2rem" : ".5rem",
          paddingBottom: isLarge ? "0.5rem" : "4rem",
        }}
      >
        {nextClicked ? (
          <>
            <KeyboardBackspaceIcon
              onClick={() => setNextClicked(!nextClicked)}
            />
            <Booking />
          </>
        ) : (
          <Box>
            {isLarge && (
              <Typography variant="h4" fontSize="2.5rem">
                Where can we pick you up?
              </Typography>
            )}

            <Box style={{ position: "relative" }}>
              <Stack
                display="flex"
                direction="row"
                style={{ background: "rgb(240 240 240)" }}
                spacing={4}
                mt={2}
              >
                <Box></Box>
                <InputBase
                  onChange={handleLocation("pickup")}
                  style={{ padding: ".3rem" }}
                  placeholder="Add pick up location"
                ></InputBase>
              </Stack>

              <Stack
                display="flex"
                direction="row"
                style={{ background: "rgb(240 240 240)" }}
                spacing={4}
                mt={2}
              >
                <Box></Box>
                <InputBase
                  onChange={handleLocation("destination")}
                  style={{ padding: ".3rem" }}
                  placeholder="Enter your destination"
                ></InputBase>
              </Stack>

              <VerticalLineComponent>
                <Crop54Icon style={{ fontSize: "1rem" }} />
                <Image
                  style={{ width: "75%", height: "5vh" }}
                  src={VerticalLine}
                  alt=""
                ></Image>
                <Crop54Icon style={{ fontSize: "1rem" }} />
              </VerticalLineComponent>
            </Box>

            <Stack
              mt={2}
              p={1}
              style={{
                borderRadius: "1rem",
                width: "max-content",
                background: "rgb(240 240 240)",
              }}
              display="flex"
              direction="row"
              spacing={2}
            >
              <Typography
                onClick={() => setNextClicked(!nextClicked)}
                style={{ cursor: "pointer" }}
                fontSize="14px"
                padding="0 8px"
                fontWeight="700"
              >
                Search
              </Typography>
            </Stack>

            <Stack mt={2} display="flex" spacing={2} direction="row">
              <Box style={livelocationstyle}>
                <MyLocationIcon style={{ color: "white", fontSize: "16px" }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="700">
                  {livecity.city}
                </Typography>
                <Typography variant="body2">Your location</Typography>
              </Box>
            </Stack>
          </Box>
        )}
      </Paper>
    </>
  );
}

export default Location;
