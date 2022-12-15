import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Datagrid = ({ data }) => {
  console.log(data);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {data.map((c) => (
        <GridItem w="100%" h="200" bg="black" borderRadius="15px" color="whatsapp.400">
          {c.capsule_serial}
          <br />
           {c.details}
           <br />
           {c. original_launch}
           <br />
           {c.status}
           <br />
           {c.type}
        </GridItem>
      ))}
    </Grid>
  );
};



// capsule_serial
// : 
// "C103"
// details
// : 
// "First of twenty missions flown under the CRS1 contract"
// landings
// : 
// 1
// missions
// : 
// [{…}]
// original_launch
// : 
// "2012-10-08T00:35:00.000Z"
// original_launch_unix
// : 
// 1349656500
// reuse_count
// : 
// 0
// status
// : 
// "unknown"
// type
// : 
// "Dragon 1.0"

export default Datagrid;
