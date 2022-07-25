import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Grid, FormControl, Select, MenuItem } from "@mui/material";

// import app components
import Banner from "./Banner";
import JobGroup from "./JobGroup";
import colors from "../theme/colors";
import "./styles/Home.css";

function Home() {
  const [allJobs, setAllJobs] = useState([]);
  const [jobGroups, setJobGroups] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationOpts, setLocationOpts] = useState([]);
  const [teamOpts, setTeamOpts] = useState([]);
  const [workTypeOpts, setWorkTypeOpts] = useState([]);
  const [location, setLocation] = useState('');
  const [team, setTeam] = useState('');
  const [workType, setWorkType] = useState('');

  const groupJobs = (jobs) => {
    const groupedMap = jobs.reduce(
      (entryMap, e) => entryMap.set(e.categories.team, [...entryMap.get(e.categories.team)||[], e]),
      new Map()
    );
    setJobGroups(Array.from(groupedMap.entries()));
  };

  useEffect(() => {
    const fetchAllJobs = async () => {
      fetch('https://api.lever.co/v0/postings/paralleldomain?mode=json')
      .then(res => res.json())
      .then((data) => {
        setAllJobs(data);
      });
    }

    if (allJobs.length === 0) {
      fetchAllJobs();
    }
  }, [allJobs]);

  useEffect(() => {
    if (allJobs.length) {
      groupJobs(allJobs)
    }
  }, [allJobs]);

  useEffect(() => {
    const getOptions = (dropdown) => {
      let options = allJobs.map(job => job.categories[dropdown]);
      options = [...new Set(options)];

      switch(dropdown) {
        case 'location':
          setLocationOpts(options);
          break;
        case 'team':
          setTeamOpts(options);
          break;
        default:
          setWorkTypeOpts(options);
      }
    };

    const dropdownOptions = ['location', 'team', 'commitment'];
    dropdownOptions.forEach(opt => getOptions(opt));
  }, [allJobs]);

  useEffect(() => {
    const jobsFiltered = allJobs.filter(job => {
      return (!location.length || location === 'all' || job.categories.location === location) && (!team.length || team === 'all' || job.categories.team === team) && (!workType.length || workType === 'all' || job.categories.commitment === workType)
    });
    setFilteredJobs(jobsFiltered);
  }, [location, team, workType]);

  useEffect(() => {
    if (filteredJobs.length) {
      groupJobs(filteredJobs)
    } else {
      setJobGroups([]);
    }
  }, [filteredJobs]);

  return (
    <Box sx={{ py: 5, background: colors.secondary }}>
      <Banner />
      <div className="container">
        <Typography variant="h3" sx={{ textAlign: "center", mb: 2, margin: "80px auto 20px", letterSpacing: "-1px" }}>
          Open Positions
        </Typography>
        <Typography
          sx={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 80px" }}
        >
          Our data is training and testing autonomous systems at companies around
          the world. We're looking for talented visionaries to help us to expand
          our impact on the way artificial intelligence is developed.
        </Typography>

        {allJobs.length
          ? <>
            <Grid container sx={{ alignItems: 'center' }} >
              <Typography sx={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', marginRight: '20px', marginBottom: '20px' }}>
                Filter by:
              </Typography>
              <FormControl>
                <Select 
                  labelId="locations-label"
                  value={location || 'all'}
                  onChange={e => setLocation(e.target.value)}
                  >
                    <MenuItem value="all">ALL LOCATIONS</MenuItem>
                  {locationOpts.map((opt, i) => (
                    <MenuItem key={i} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  labelId="team-label"
                  value={team || 'all'}
                  onChange={e => setTeam(e.target.value)}
                >
                  <MenuItem value="all">ALL TEAMS</MenuItem>
                  {teamOpts.map((opt, i) => (
                    <MenuItem key={i} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Select
                  labelId="work-types-label"
                  value={workType || 'all'}
                  onChange={e => setWorkType(e.target.value)}
                >
                  <MenuItem value="all">ALL WORK TYPES</MenuItem>
                  {workTypeOpts.map((opt, i) => (
                    <MenuItem key={i} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>  

            {jobGroups.length
              ? <ul>
                {jobGroups.map(group => (
                  <li key={group[0]}>
                    <JobGroup group={group} />
                  </li>
                ))}
              </ul>
              : <Typography sx={{ }}>
                No jobs - try selecting other filters.
              </Typography>
              // Added empty state above for no filtered results.
            }
          </>
          : <div className="loader-wrap">
              <CircularProgress />
            </div>
        }
      </div>
    </Box>
  );
}

export default Home;
