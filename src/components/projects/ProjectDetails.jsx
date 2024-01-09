import {useEffect , useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import  axios  from 'axios';
import { api } from '../../api/api';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Image } from 'primereact/image';
import { FcOk } from 'react-icons/fc';
import { FiSearch } from "react-icons/fi";

import './projects.css'
const ProjectDetails = () => {
 const {id} = useParams();
 const [projectOne , setProjectOne] = useState([]);
 useEffect(()=>{
axios.get(`${api}api/projects/view/${id}`)
 .then(res => setProjectOne(res.data.data))
 .catch(err => console.log(err))
 },[id]);
     const icon = (<FiSearch />)

  return (
    <div className='details'>
     <Container fixed>
       <Grid container spacing={2}>
        <Grid item md={6}>
          <Image src={projectOne.image} indicatorIcon={icon} alt="Image" preview width="450" />
         </Grid> 
         <Grid item md={6}>
           <h3>{projectOne.title}</h3>
          <Grid container spacing={1}>
            {projectOne?.technolgies?.split(",")?.map((ele, index) => (
              <Grid item xs={6} key={index}>
                <FcOk /> <span>{ele}</span>
              </Grid>
            ))}
          </Grid>
          <ul className="listed-link">
            <li>
              <Link to={projectOne.repo_link} target="_blank">
                View Code
              </Link>
            </li>
            <li>
              <Link to={projectOne.demo_link} target="_blank">
                View Project
              </Link>
            </li>
          </ul>
         </Grid>
         </Grid>

     </Container>
    </div>
  )
}

export default ProjectDetails