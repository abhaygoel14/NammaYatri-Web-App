import React from "react";
import { Box, Typography, styled, Grid } from "@mui/material";
import vision from "@/assets/vision.png";
import Image from "next/image";
function Vision() {
  const Container = styled(Box)`
    & > div > div > p {
      /* text-align: justify; */
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
      <div className="yatri-app">
        <Container>
          <Typography variant="h5" fontSize="2rem" fontWeight="700" mb={0.75}>
            Our Vision
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
                Since the Namma Yatri customer app will be offering multiple
                mobility services in a single app, We believe customers will
                prefer to use this for their daily commute needs. Auto rickshaws
                are the first contributors to this initiative. Any Auto driver
                can complete the KYC verification and start using Namma Yatri.
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Image src={vision} alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Vision;
