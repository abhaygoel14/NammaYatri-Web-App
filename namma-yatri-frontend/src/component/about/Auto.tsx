import React from "react";
import { Box, Typography, styled, Grid } from "@mui/material";
import driver from "@/assets/driverOnboard.png";
import Image from "next/image";
function Auto() {
  const Container = styled(Box)`
    /* padding: 2.5rem 2rem 5rem; */
    & > div > div > p {
      text-align: justify;
      color: rgb(134 139 152);
    }
    & > div > div > img {
      margin-top: 1.25rem;
      max-width: 100%;
      height: auto;
      vertical-align: center;
    }
  `;
  return (
    <>
      <Box className="yatri-app">
        <Container>
          <Typography variant="h5" fontSize="2rem" fontWeight="700" mb={0.75}>
            Namma Yatri App
          </Typography>
          <hr id="divider" />

          <Grid id="grid-control" container direction="column">
            <Grid item>
              <Typography
                variant="body1"
                fontWeight="300"
                fontSize="1.25rem"
                mt={6}
                pt={0.25}
                lineHeight="1.75rem"
              >
                Namma Yatri is the first open network mobility application built
                with the idea to provide multi-modal service to the commuters
                without the involvement of any middlemen. Auto rickshaws are the
                first of the many service providers to join this mobility
                network. This application is built on the common network
                standards defined by ONDC built on the Beckn protocol (open
                source). The common network standards allows for
                interoperability for any buyer app compliant with the network
                standards to offer rides
              </Typography>
            </Grid>

            <Grid item>
              <Image src={driver} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Auto;
