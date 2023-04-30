import {
  Alert,
  Box,
  Button,
  InputBase,
  Paper,
  Snackbar,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useIsLargeView from "@/utils/useIsLarge";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Crop54Icon from "@mui/icons-material/Crop54";
import useLiveCity from "../const/useLiveCity";
import Image from "next/image";
import VerticalLine from "@/assets/vertical-line.png";
import Booking from "../Booking/Booking";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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

interface GeocodeResult {
  formatted: string;
}

function Location() {
  const livecity = useLiveCity();
  const [nextClicked, setNextClicked] = useState(false);
  const [location, setLocation] = useState({ pickup: "", destination: "" });
  const isLarge = useIsLargeView();
  const [bookNow, setBookNow] = useState(false);
  const [boxnum, setBoxNum] = useState(0);
  const [fetchedData, setFetchedData] = useState<GeocodeResult[]>([]);
  const [error, setError] = useState(false);

  const handleLocation = (name: string) => (e: any) => {
    if (e.target.value.length > 5) {
      setError(false);
    }
    setLocation({ ...location, [name]: e.target.value });
    if (name == "pickup") {
      setBoxNum(1);
    } else {
      setBoxNum(2);
    }
  };
  localStorage.setItem("pickup", location.pickup);
  localStorage.setItem("destination", location.destination);

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    let inputValue = "";
    if (boxnum == 1) {
      inputValue = location.pickup;
    } else {
      inputValue = location.destination;
    }
    const fetchData = async () => {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=41bf89752dde4d2fa4e5f32767b4eb61&autocomplete=1`
      );
      const data = await response.json();
      setFetchedData(data.results);
    };
    fetchData();
  }, [location]);

  return (
    <>
      <Paper
        style={{
          padding: isLarge ? "2rem" : ".5rem",
          paddingBottom: isLarge ? "0.5rem" : "3rem",
        }}
      >
        {isLoggedIn ? (
          nextClicked ? (
            <>
              <KeyboardBackspaceIcon
                sx={{ cursor: "pointer" }}
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
                  style={{
                    background: "rgb(240 240 240)",
                    position: "relative",
                  }}
                  spacing={4}
                  mt={2}
                >
                  <Box></Box>
                  <InputBase
                    required
                    value={location.pickup}
                    onChange={handleLocation("pickup")}
                    style={{ padding: ".3rem" }}
                    placeholder="Add pick up location"
                  ></InputBase>
                  {error && (
                    <Typography
                      className="error-message"
                      style={{ color: "red" }}
                    >
                      This is required field
                    </Typography>
                  )}
                  {boxnum == 1 && location.pickup !== "" && (
                    <Paper
                      sx={{
                        position: "absolute",
                        bottom: "-121px",
                        padding: ".5rem",
                        minWidth: "80%",
                        zIndex: "100",
                        overflowY: "scroll",
                        maxHeight: isLarge
                          ? "20vh"
                          : window.innerHeight > 800
                          ? "14vh"
                          : "20vh",
                      }}
                    >
                      {fetchedData.map((res, i) => {
                        return (
                          <Box
                            onClick={() => {
                              setLocation({
                                ...location,
                                pickup: res.formatted,
                              });
                              setBoxNum(0);
                            }}
                            display="flex"
                            sx={{ cursor: "pointer" }}
                            gap="8px"
                            key={i}
                          >
                            <LocationOnIcon />
                            <Typography>{res.formatted}</Typography>
                          </Box>
                        );
                      })}
                    </Paper>
                  )}
                </Stack>

                <Stack
                  display="flex"
                  direction="row"
                  style={{
                    background: "rgb(240 240 240)",
                    position: "relative",
                  }}
                  spacing={4}
                  mt={2}
                >
                  <Box></Box>
                  <InputBase
                    required
                    value={location.destination}
                    onChange={handleLocation("destination")}
                    style={{ padding: ".3rem" }}
                    placeholder="Enter your destination"
                  ></InputBase>

                  {error && (
                    <Typography
                      className="error-message"
                      style={{ color: "red" }}
                    >
                      This is required field
                    </Typography>
                  )}

                  {boxnum == 2 && location.destination !== "" && (
                    <Paper
                      sx={{
                        position: "absolute",
                        bottom: "-121px",
                        padding: ".5rem",
                        minWidth: "80%",
                        maxHeight: isLarge
                          ? "20vh"
                          : window.innerHeight > 800
                          ? "14vh"
                          : "20vh",
                        zIndex: "100",
                        overflowY: "scroll",
                      }}
                    >
                      {fetchedData.map((res, i) => {
                        return (
                          <Box
                            onClick={() => {
                              setLocation({
                                ...location,
                                destination: res.formatted,
                              });
                              setBoxNum(0);
                            }}
                            display="flex"
                            sx={{ cursor: "pointer" }}
                            gap="8px"
                            key={i}
                          >
                            <LocationOnIcon />
                            <Typography>{res.formatted}</Typography>
                          </Box>
                        );
                      })}
                    </Paper>
                  )}
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
                  onClick={() => {
                    if (
                      location.pickup.length > 5 &&
                      location.destination.length > 5
                    ) {
                      setNextClicked(!nextClicked);
                    } else {
                      setError(true);
                    }
                  }}
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
                  <MyLocationIcon
                    style={{ color: "white", fontSize: "16px" }}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="700">
                    {livecity.city}
                  </Typography>
                  <Typography variant="body2">Your location</Typography>
                </Box>
              </Stack>
            </Box>
          )
        ) : (
          <Stack display="flex" p={2} spacing={2}>
            <Box>
              <Typography variant={isLarge ? "h4" : "h6"}>
                Book an auto with Zero commission
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                App by the drivers for the people. 100% direct payment to
                drivers.
              </Typography>
            </Box>
            <Button
              variant="contained"
              style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
              onClick={() => setBookNow(!bookNow)}
            >
              Book Now
            </Button>
          </Stack>
        )}
      </Paper>

      {bookNow && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={bookNow}
          autoHideDuration={6000}
          onClose={() => setBookNow(!bookNow)}
        >
          <Alert
            onClose={() => setBookNow(!bookNow)}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Please login or sign up first
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default Location;
