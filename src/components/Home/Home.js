import React, { useEffect, useRef } from "react";
import Cards from "./Cards";
import "./cards.css";
import WhyChoosePJSoft from "./WhyChoosePJSoftTech.js";
import Slideshow from "./SlideShow"; // Import Slideshow component
import FAQ from './FAQ.js';
import { Card, CardContent, CardMedia, Typography, Container, Grid } from "@mui/material"; // Importing from Material-UI
import "./Home.css";
import Testimonials from "./Testimonials.js";

export default function Home() {
  const slideRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (slideRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = slideRef.current;
        const isEndOfSlides = scrollLeft + clientWidth >= scrollWidth;
        slideRef.current.scrollLeft = isEndOfSlides ? 0 : scrollLeft + 100;
      }
    }, 100); // Change image every 0.1 seconds for faster sliding

    return () => clearInterval(slideInterval);
  }, []);

  const styles = {
    common: {
      color: "#fff", // Light text color
      padding: "10px", // Padding for better spacing
      borderRadius: "10px", // Optional: Rounded corners for aesthetics
      textAlign: "center", // Center align text
    },
    yearsOfExperience: {
      backgroundColor: "#fdd835", // Dark blue background color
      marginLeft: "-50px",
      color: "#000",
      marginRight: "10px",
    },
    successfulImplementation: {
      backgroundColor: "#fdd835", // Yellow background color
      color: "#000", // Dark text color for contrast
      marginRight: "10px",
    },
    currentUsers: {
      backgroundColor: "#1a237e", // Dark blue background color
    },
    image: {
      maxWidth: "100%", // Ensure the image fits within the column
      borderRadius: "5px", // Optional: Rounded corners for the image
    },
  };

  return (
    <>
      <Slideshow /> {/* Render the Slideshow component */}
      <div className="cards-row">
        <Cards />
      </div>
      <hr
        style={{
          marginTop: "10px",
          border: "2px solid",
          marginLeft: "15%",
          marginRight: "15%",
          color: "white",
        }}
      />
      <div className="py-5">
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography variant="h4" align="center" gutterBottom>One Campus One Solution</Typography>
              <Typography variant="h6" align="center">Scalable and Integrated ERP Offerings To Cater Your Campus Needs</Typography>
              <Grid container spacing={3} justifyContent="center" alignItems="center" className="mt-5">
                <Grid item md={4}>
                  <Card style={{ ...styles.common, ...styles.yearsOfExperience }}>
                    <CardMedia
                      component="img"
                      className="img2"
                      image="https://www.mastersofterp.com/images/home/Years-of-Experience.webp"
                      style={{
                        position:"static",
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}                    />
                    <CardContent>
                      <Typography variant="h6" align="center">Years of Experience</Typography>
                      <Typography variant="body1" align="center">4+</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card style={{ ...styles.common, ...styles.successfulImplementation }}>
                    <CardMedia
                      component="img"
                      className="img2"
                      image="https://www.mastersofterp.com/images/home/Successful-Implementation.webp"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" align="center">Successful Implementation</Typography>
                      <Typography variant="body1" align="center">200+</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card style={{ ...styles.common, ...styles.currentUsers }}>
                    <CardMedia
                      component="img"
                      className="img2"
                      image="https://www.mastersofterp.com/images/home/Users.webp"
                      style={{
                        position:"relative",
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}                    />
                    <CardContent>
                      <Typography variant="h6" align="center">Current Users</Typography>
                      <Typography variant="body1" align="center">150+</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <img
                src="https://www.mastersofterp.com/images/One-Campus-One-Solution-new.jpg"
                alt="One Campus One Solution"
                height={"380px"}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="clients">
        <Typography variant="h4" align="center">Our Valuable Clients</Typography>
        <div className="slider" ref={slideRef}>
          <div className="slides">
            <img src="https://www.mastersofterp.com/images/home/QMS.png" alt="QMS" className="img1"></img>
            <img src="https://www.mastersofterp.com/images/home/SSN.png" alt="SSN" className="img1"></img>
            <img src="https://www.mastersofterp.com/images/home/NIT-goa.png" alt="NIT Goa" className="img1"></img>
            <img src="https://www.mastersofterp.com/images/home/Xavier.png" alt="Xavier" className="img1"></img>
          </div>
        </div>
      </div>
      <WhyChoosePJSoft />
      <div className="faq-section">
        <FAQ />
        <br />
        <Typography variant="h4" align="center" className="test">Testimonials</Typography>
        <Testimonials />
      </div>
    </>
  );
}
