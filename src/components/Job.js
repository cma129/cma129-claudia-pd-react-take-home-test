import { Typography, Button } from '@mui/material';

// import app components
import "./styles/Job.css";

function Job(props) {
  const cat = props.job.categories;

  const goToJob = (url) => {
    window.location.href = url;
  }

  return (
    // It is not best practice to wrap interactive elements around links, so I updated this parent <a> to be a div that has an onClick event instead.
    <div className="job" onClick={() => goToJob(props.job.hostedUrl)}>
      <div className="job-content">
        <Typography variant="h4" sx={{ marginBottom: "10px", fontSize: "24px" }}>
          {props.job.text}
        </Typography>
        {/* Currently, .job-title above is h3 on the site, but since "Open Positions" is h3, semantically, h4 is a better choice, so I updated it. */}
        <Typography variant="h6" sx={{ fontWeight: "300", fontSize: "12px" }}>
          {cat.location} / {cat.team}
        </Typography>
      </div>

      <Button variant="outlined" href={props.job.applyUrl}>Apply</Button>
    </div>
  )
}

export default Job;
