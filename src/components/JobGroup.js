import { Typography } from "@mui/material";

// import app components
import Job from "./Job";

function JobGroup(props) {
  return (
    <div className="job-group">
      <Typography sx={{ textTransform: "uppercase", fontWeight: "bold", margin: "80px 0 10px", color: "rgb(255, 172, 60)", fontSize: "15px", letterSpacing: "2px", lineHeight: "1.2" }}>
        {props.group[0]}
      </Typography>
      
      <ul>
        {props.group[1].map(job => (
          <li key={job.id}>
            <Job job={job} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobGroup;
