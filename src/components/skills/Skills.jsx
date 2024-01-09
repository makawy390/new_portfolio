import "./skills.css";
import { FcOk } from "react-icons/fc";
import { Typography, Container, Grid } from "@mui/material";
const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "EcmaScript 6",
    "React JS",
    "React Router Dom",
    "Vite",
    "Redux",
    "Redux Toolkit",
    "Bootstrap",
    "MUI",
    "Primereact",
  ];
  const otherSkills = [
    "Node JS",
    "Express JS",
    "Mongo DB",
    "Multer",
    "Cloudinary",
    "JsonWebToken",
    "Rest API",
    "Formik",

    "SASS",
    "Git/Github",
    "Microsoft office",
  ];
  const personalSkills = [
    "Open To Learn",
    "Effective",
    "Like Teamwork",
    "Leadership",
    "Skills Organization",
  ];
  const filtrationSkills = skills.map((skills, index) => (
    <Grid item xs={6}  key={index}>
      <div className="pag">
        <FcOk />
        <li>{skills}</li>
      </div>
    </Grid>
  ));
  const filtrationOtherSkills = otherSkills.map((skills, index) => (
    <Grid item xs={6} key={index}>
      <div className="pag">
        <FcOk />
        <li>{skills}</li>
      </div>
    </Grid>
  ));
  const filtrationPersonalSkills = personalSkills.map((skills, index) => (
    <Grid md={4} xs={12} key={index}>
      <div className="box-skills">
        <FcOk />  <span>{skills}</span>
      </div>
    </Grid>
  ));
  return (
    <div className="skills">
      <Container>
        <div className="techincal-skills">
          <Typography variant="h5" component="h2">
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className="box">
                <Typography variant="body1" component="h2">
                  Front End Developer
                </Typography>
                <Grid container spacing={1}>
                  {filtrationSkills}
                </Grid>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="box">
                <Typography variant="body1" component="h2">
                  Other Skills
                </Typography>
                <Grid container spacing={1}>
                  {filtrationOtherSkills}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="personal-skills">
          <Typography variant="h5" component="h2">
            Personal Skills
          </Typography>
          <Grid container spacing={2}>
            {filtrationPersonalSkills}
          </Grid>
        </div>
       
      </Container>
    </div>
  );
};

export default Skills;
