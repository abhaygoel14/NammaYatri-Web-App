import React from "react";
import { Box, Typography, styled, Grid } from "@mui/material";
import location from "@/assets/location.png";
import Image from "next/image";
function Mobility() {
  const Container = styled(Box)`
    color: white;
    & > div > div > p {
      /* text-align: justify; */
      color: rgb(134 139 152);
    }
    & > div > div > img {
      margin-top: 1.25rem;
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
  `;
  return (
    <>
      <div className="mobility">
        <Container>
          <Typography variant="h5" fontSize="2rem" fontWeight="700" mb={0.75}>
            Open Mobility
          </Typography>

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
                Open mobility as the name suggests is an open network where any
                mode of transport can contribute to provide services to
                commuters thereby removing the dependency on any third party
                organizations. The common network standards allows for
                interoperability for any buyer app compliant with the network
                standards to offer rides. The network allows for all forms of
                mobility operators ranging from auto rickshaws, taxis and public
                transport to coexist
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <Image src={location} alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Mobility;
