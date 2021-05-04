import React from "react";
import { Button } from "@material-ui/core";
import SimpleCard from "./SimpleCard";
import Block from "./Block";
import "./LandingPage.css";
import LogoSchoolHarvard from "../../../images/harvard.png";
import LogoSchoolStanford from "../../../images/stanford.png";
import LogoSchoolYale from "../../../images/yale.png";
import LogoSchoolJohnHopkins from "../../../images/johnhopkins.png";
import studconnectlogo from "../../../images/studconnectlogo.png";
import SubNavbar from "../../Common/Navbar/SubNavbar";
import Footer from "../../Common/Footer/Footer";

export default function LandingPage({ history }) {
  return (
    <div className="banner-style">
      <Button
        onClick={() => {
          history.push("/home");
        }}
      >
        GO BACK TO THE APP
      </Button>
      <SubNavbar className="title-color" />

      <img
        src={studconnectlogo}
        className="Studconnect-style"
        alt="studconnect-style"
        style={{
          position: "relative",
          width: 400,
          marginLeft: 500,
          marginBottom: 20,
        }}
      />
      <Button
        className="loginButton"
        style={{ marginLeft: 600, width: 200 }}
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/home");
        }}
      >
        LOGIN TO STUDCONNECT
      </Button>

      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-
        1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        className="HomePicture-style"
        alt="HomePicture"
      />
      <h1 className="first-font-styles">
        <div className="title-color">Stud-Connect</div>is a private social
        network for a class <br />
        to enhance student communication for distance education.
      </h1>
      <div className="Card-information">
        <SimpleCard />
      </div>
      <br />
      <div className="Card-information-2">
        <SimpleCard />
      </div>
      <br />
      <div className="Card-information-3">
        <SimpleCard />
      </div>
      <br />
      <div className="Card-information-4">
        <SimpleCard />
      </div>
      <br />
      <div className="Block-container-2">
        <Block />
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxM
          jA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfA%3D%3D&
          ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          className="HomePicture-style_2"
          alt="HomePicture_2"
        />
      </div>
      <div className="Block-container-3">
        <Block />
        <img
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxM
          jA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfA%3D%3D
          &ixlib=rb-1.2.1&auto=format
          &fit=crop&w=800&q=60"
          className="HomePicture-style_3"
          alt="HomePicture_3"
        />
      </div>
      <h1 className="second-font-styles">
        <div className="title-color_2">Partners</div>
      </h1>
      <p className="paragraph-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
        amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore
      </p>
      <div className="Block-container-4">
        <img
          src={LogoSchoolHarvard}
          className="Harvard-styles"
          alt="harvard-pic"
        />
        <img
          src={LogoSchoolStanford}
          className="Stanford-styles"
          alt="stanford-pic"
        />
        <img src={LogoSchoolYale} className="Yale-styles" alt="yale-pic" />

        <img
          src={LogoSchoolJohnHopkins}
          className="JohnHopkins-styles"
          alt="johnhopkins-pic"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <br />
      <br />
    </div>
  );
}
