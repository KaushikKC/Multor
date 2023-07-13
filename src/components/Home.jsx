import React from "react";
import Box from "@mui/material/Box";
import home from "../Images/Home.jpg";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          height: "750px",
          backgroundPosition: "center"
        }}
      >
        <div className="pl-5 md:pl-[120px] pt-5">
          <h1 className="mt-4">Multor</h1>
          <h1 className="w-[300px] md:w-7/12 text-5xl leading-[70px] md:text-8xl md:leading-[130px] font-bold text-cyan-900 mt-[72px]">
            Describe the value of booking an appointment
          </h1>
          <p className="w-[300px] md:w-[800px] mt-8 leading-8  text-xl text-cyan-700">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
        </div>
      </Box>
    </div>
  );
}

export default Home;
