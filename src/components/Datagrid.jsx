import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Datagrid = ({ data }) => {
  console.log(data);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {data.map((c) => (
        <GridItem w="100%" h="10" bg="blue.500">
          {c.capsule_serial}
        </GridItem>
      ))}
    </Grid>
  );
};

export default Datagrid;
