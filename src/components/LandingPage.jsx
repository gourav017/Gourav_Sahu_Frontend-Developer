import React from "react";
import { Heading } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
const LandingPage = () => {
  return (
    <>
      <Heading bg="black" textAlign="center" color="white">
        SpaceX
      </Heading>

      <Searchbar />
    </>
  );
};

export default LandingPage;
