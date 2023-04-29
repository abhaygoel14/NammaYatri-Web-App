import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import driver from "@/assets/driverOnboard.png";
import AutoWala from "./AutoWala";
import useIsLargeView from "@/utils/useIsLarge";

function Booking() {
  const [confirmed, setConfirmed] = useState(false);
  let hour = "",
    minute = "";
  const now = new Date();
  hour = now.getHours().toString();
  minute = now.getMinutes().toString();
  const isLarge = useIsLargeView();
  return (
    <>
      {!confirmed ? (
        <Box style={{ position: "relative" }}>
          <Box>
            <Stack
              display="flex"
              direction="row"
              style={{ padding: "8px 16px 8px 16px" }}
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
                style={{ height: "min-content", marginRight: "1rem" }}
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
              style={{ padding: "8px 16px 8px 16px" }}
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
            >
              Confirm Book
            </Button>
          )}
        </Box>
      ) : (
        <AutoWala />
      )}
    </>
  );
}

export default Booking;
