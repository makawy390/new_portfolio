import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Container, Grid } from "@mui/material";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import img from "../../assets/2.png";
import "./home.css";
// import { , Link } from 'react-router-dom';
import { Link , useNavigate } from "react-router-dom";
const Home = () => {
  const arrLinks = [
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/mohamed-makawy-5b6b0723a/",
    },
    { icon: <SiGmail />, url: "mailto:moohesham83@gmail.com?subject=Contact" },
    { icon: <AiFillGithub />, url: "https://github.com/makawy390" },
    {
      icon: <PiWhatsappLogoDuotone />,
      url: "https://api.whatsapp.com/send?phone=+201555245948&text=Hello Dear,Thanks for contacting with me,Can you give me more information about your project!",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="home">
      <Container fixed>
       {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={4} md={4.5} > */}
        
        {/* </Grid> */}
        {/* <Grid item xs={8} md={4}> */}
           <div className="content-home">
             <div className="image-content">
          <img src={img} alt="." />
        </div>
          <span>Hello I'm</span>
        <h3>Mohamed Hesham Mekawy</h3>
        <span>Front End Developer React JS</span>
        <div className="listed">
          {arrLinks.map(({icon , url}, index)=>(
            <li key={index}><Link to={url} target="_blank">{icon}</Link></li>
          ))}
        </div>
        <div className="btns">
          {/* <button to="https://movies-plus-app.netlify.app/">Dowload cv</button> */}
          <Link to='https://drive.google.com/file/d/1WdYhG-7o8IKgJlrWVm8A_X1T9jCcBMRj/view' target="_blank">Dowload cv</Link>
        <Link to='/contact'>Contact</Link>
       
        </div>
        </div>
        {/* </Grid> */}
       {/* </Grid> */}
      </Container>
    </div>
  );
};

export default Home;
