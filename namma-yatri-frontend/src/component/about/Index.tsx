import styled from '@emotion/styled'
import { Box,Typography } from '@mui/material'
import React from 'react'

function Index() {
    const Container=styled(Box)`
        color:rgb(134 139 152 );
        padding: 1rem 1rem;
        padding-bottom: 5rem;

        & > h6{
            letter-spacing: 5px;
            font-size: 0.75rem;
        }
        & > h5{
            color: white;
        }
        & >p{
            text-align: justify;
        }
    `
  return (
    <>
    <div className="about-us">
        <Container display="flex" flexDirection="column">
                <Typography variant='subtitle1' mb={1.5}>
                    GET TO KNOW MORE
                </Typography>

                <Typography variant='h5' fontSize="2rem" fontWeight="700" mb={0.75}>
                        ABOUT US
                </Typography>

                <Typography variant='body1' fontWeight="300" fontSize="1.25rem" mt={6} pt={0.25} lineHeight="1.75rem">
                Customer friendly app Namma Yatri is a mobility application built with a vision to effectively contribute to the 
                Open Mobility initiative. The true strength of an open mobility initiative lies in a collective ecosystem of multiple mobility service providers to coexist on a common standard network. This allows for enhanced choice for customers to avail the benefits of a truly multi modal offering.
                The application, has been built on the Beckn Protocol which is an open source protocol.
                </Typography>
            </Container>
    </div>
        
    </>
  )
}

export default Index
