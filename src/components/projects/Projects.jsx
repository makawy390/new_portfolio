import React, { Fragment } from "react";
// import axios from "axios";
// import { api } from "../../api/api";
// import { Image } from "primereact/image";
import { ScrollTop } from "primereact/scrolltop";
// import { FcOk } from "react-icons/fc";
import { FcOk } from 'react-icons/fc';

import "./projects.css";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SpinnerApp from "../root/Spinner";
// import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { fetchProjects } from "../../rtk/reducer/asyncSyncProjects";
import { useSelector } from 'react-redux';

const Projects = () => {
  // const [project, setProject] = React.useState([]);
   const projects = useSelector(state => state?.token?.data?.data);
   console.log(projects );
    //  const icon = (<FiSearch />)
const dispatch = useDispatch();
    React.useEffect(() => {
    // axios
    //   .get(`${api}api/projects`)
    //   .then((res) => setProject(res.data.data))
    //   .catch((err) => console.log(err));
      dispatch(fetchProjects())
  },[]);
  // console.log(project);
  const filtrationProjects = projects?.map((project) => (
    <Fragment key={project._id}>
      {/* <Grid item md={6} xs={12}>
        <Image src={project.image} alt="Image" preview />
      </Grid> */}
      <Grid item md={4} xs={12}>
        <div className="image-box">
        {/* <Image src={project.image} alt="Image" preview width="25px"  indicatorIcon={icon}/> */}
        <img src={project.image} alt="Image" />
        {/* <Image src={project.image} alt="Image" preview width="25px"  indicatorIcon={icon}/> */}

        <div className="box-projects">
          <Grid container spacing={2}   alignContent="center" alignItems='center'   direction="row" >
            {project?.technolgies?.split(",")?.map((ele, index) => (
              <Grid item xs={6} key={index}>
                <FcOk /> <span>{ele}</span>
              </Grid>
            ))}
          </Grid>
                    {/* <Link to={`${project._id}`}>View Project</Link> */}
        </div>
        </div>
          <h3>{project.title}</h3>
        <ul className="listed-link">
            <li>
              <Link to={project.repo_link} target="_blank">
                View Code
              </Link>
            </li>
            <li>
              <Link to={project.demo_link} target="_blank">
                View Project
              </Link>
            </li>
          </ul>

      </Grid>
    </Fragment>
  ));
  return (
    <div className="projects">
      <Container fixed>
        <h2>Our Projects</h2>
        <Grid container spacing={2}>
          {projects === undefined? <SpinnerApp /> : <>{filtrationProjects}</>}
          <ScrollTop />
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
