import { Typography } from "@mui/material";

// import app components
import "./styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <Typography variant="h2" sx={{ fontSize: "2.5rem", letterSpacing: "-2.75px", width: "100%", textAlign: "center", padding: "0 20px" }}>
        Join Us
      </Typography>
    </div>
  )
}

export default Banner;
