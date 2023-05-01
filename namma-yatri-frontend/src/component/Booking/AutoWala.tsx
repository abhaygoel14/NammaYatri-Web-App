import React, { useState } from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import Link from "next/link";
import { WHATSAPP_BOOKING_HELP } from "../const/api";
import FeedBack from "./Feedback";
import image1 from "@/assets/FjU2lkcWYAgNG6d.jpg";
import image2 from "@/assets/istockphoto-1309328823-612x612.jpg";
import image3 from "@/assets/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";
import image4 from "@/assets/profilepicture-10-portrait-photography.jpg";




interface FormProps {
  nextClicked: boolean;
  priceSelected:string;
  setNextClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * A component that renders the AutoWala form and feedback component.
 * @param {FormProps} props - The props object containing the necessary data for the form.
 * @returns The AutoWala form and feedback components.
 */
function AutoWala(props: FormProps) {
  const [showFeedBack, setShowFeedBack] = useState(false);
  const randomAutowalNames=["Amith S","Rajesh B","Bharath K","Nandan B"]
  const randomAutowalaImages=[image1,image2,image3,image4]
  const randomNumber=Math.floor(Math.random()*randomAutowalNames.length)
  
  return (
    <>
      <>
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginLeft: "auto", width: "max-content" }}
          gap={0.5}
          mb={2}
        >
          <Typography
            onClick={() => setShowFeedBack(!showFeedBack)}
            sx={{ cursor: "pointer" }}
            variant="subtitle2"
          >
            Feedback
          </Typography>
          <AnnouncementIcon sx={{ fontSize: "16px" }} />
        </Box>
        <Stack display="flex" direction="row" spacing={5}>
          <Box display="flex" alignItems="start" justifyContent="center">
            <Avatar
              src={randomAutowalaImages[randomNumber].src}
              sx={{ height: "100px", width: "100px" }}
              variant="square"
              alt=""
            ></Avatar>

          
          </Box>

          <Stack
            display="flex"
            spacing={1}
            sx={{ marginLeft: "20px !important" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography variant="subtitle1" fontWeight="600">
                Name:
              </Typography>
              <Typography variant="body2">{randomAutowalNames[randomNumber]}</Typography>
              <VerifiedIcon sx={{ color: "green", fontSize: "16px" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography variant="subtitle1" fontWeight="600">
                Ph.No:
              </Typography>
              <Typography variant="body1">XXXXX96139</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "8px",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                variant="contained"
              >
                <WhatsAppIcon sx={{ marginRight: "4px" }} />
                Call
              </Button>
              <Button
                style={{ background: "rgb(252 195 44 / 1)", color: "black" }}
                variant="contained"
              >
                <WhatsAppIcon sx={{ marginRight: "4px" }} />
                Message
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Box sx={{ marginTop: "20px", display: "flex", gap: "20px" }}>
          <Typography
            sx={{
              opacity: "1",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Fare : Rs {props.priceSelected}
          </Typography>

          <Button
            style={{ background: "lightgreen", width: "100%" }}
            variant="contained"
            onClick={() => setShowFeedBack(!showFeedBack)}
          >
            <Link
              href="https://test.instamojo.com/@abhay_goel14/"
              target="_blank"
            >
              Pay Now
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".3rem",
            alignSelf: "center",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <Typography
            sx={{ opacity: "1", textAlign: "center", fontSize: "14px" }}
          >
            Need Help?
          </Typography>
          <Link href={WHATSAPP_BOOKING_HELP}>
            <Typography
              sx={{
                color: "blue",
                opacity: "1",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: "14px",
              }}
            >
              Click here
            </Typography>
          </Link>
        </Box>
      </>

      {showFeedBack && (
        <FeedBack
          showFeedBack={showFeedBack}
          nextClicked={props.nextClicked}
          setNextClicked={props.setNextClicked}
          setShowFeedBack={setShowFeedBack}
        />
      )}
    </>
  );
}

export default AutoWala;

/** */
