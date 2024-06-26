import React, { useState, useEffect } from 'react';
import { endPoint } from "../../forAll/forAll";
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import ScrambleText from '../../forAll/ScrambleText'; // Adjust the path as needed

const ProjectSection = () => {
  const [projects, setProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await fetch(`${endPoint}/projects`);
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);
        setFilteredProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  const texts = [
    'projects that i built_',
    'cool stuff I created_',
    'my awesome work_'
  ];

  return (
    <Box id="projects">
      <h1 className="mb-5 section-title">
        <ScrambleText texts={texts} />
      </h1>
      <div className='Project-sec'>
        <Grid container spacing={4}>
          {filteredProjects && filteredProjects.slice(0, 8).map((project, index) => (
            <Grid item xs={12} sm={12} md={6} key={index} className="flipping">
              <Box sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
                <div>
                  <Typography variant="h2" className="gradient-text font-[500!important] font-poppins" sx={{ mb: 2 }}>
                    {project.title.split('<br>').map((line, index) => (
                      <React.Fragment key={index}>{line}<br /></React.Fragment>
                    ))}
                  </Typography>
                  {project.technologies.map(technology => console.log(technology))}
                </div>
                <Box className="flip-container">
                  <img
                    className="flip-image"
                    alt={project.title}
                    src={project.projectImage}
                    style={{ color: 'transparent', objectFit: 'cover'}}
                  />
                  <FaArrowRight className="arrow-icon" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }} className="flex justify-center">
          <Link to="/home/project">
            <Button variant="contained" color="primary">
              All projects
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default ProjectSection;
