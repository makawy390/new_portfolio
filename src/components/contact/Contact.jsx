import { Container } from "@mui/material";
import { Grid , TextField } from "@mui/material";
import "./contact.css";
// import { FaPhoneAlt } from "react-icons/fa";
import { Button } from 'primereact/button';

import { MdOutgoingMail } from "react-icons/md";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import image from '../../assets/undraw_personal_email_re_4lx7.svg'
import { ImLocation2 } from "react-icons/im";
import { useState } from "react";

const Contact = () => {
  const contact = [
    // {
    //   icon: <FaPhoneAlt />,
    //   title: "Call Me",
    //   type: "+(20)1010838632",
    // },
    {
      icon: <PiWhatsappLogoDuotone />,
      title: "WhatsApp",
      type: "+(20)1555245948 ",
    },
    {
      icon: <MdOutgoingMail />,
      title: "Email Me",
      type: " moohesham83@gmail.com",
    },
    { icon: <ImLocation2 />, title: "Location", type: "Egypt , Cairo" },
    // {
    //   icon: <PiWhatsappLogoDuotone />,
    //   title: "WhatsApp",
    //   type: "+(20)1555245948 ",
    // },
  ];
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    };
  const filtrationContact = contact.map((contacts, index) => (
    <Grid item xs={12} md={4} key={index}>
      <div className="box-contact">
        {contacts.icon}
        <div className="boxes">
          <h4>{contacts.title}</h4>
          <span>{contacts.type}</span>
        </div>
      </div>
     </Grid>
  ));
  return (
    <div className="contact">
      <Container fixed>
        <h2>Quick Contact Address</h2>
        <p></p>
        <Grid container spacing={4}>
                    {filtrationContact}
          <Grid item md={5}>
            <img src={image} alt="...."  />
          </Grid>
          <Grid item md={7}>
        <TextField fullWidth color="warning" focused type="email" id="fullWidth" label="email" variant="standard"  helperText="Please enter your email" sx={{marginBottom : '10px'}}/>
        <TextField fullWidth focused color="warning" type='tel' id="fullWidth" label="phone" variant="standard"  helperText="Please enter your phone" sx={{marginBottom : '10px'}}/>
<TextField
sx={{marginBottom : '10px'}}
          id="standard-multiline-static"
          label="Message"
          multiline
          fullWidth focused color="warning"
          rows={4}
          variant="standard"
          helperText="please Write Message"
        />
        {/* <button>Send</button> */}
        <Button label="Send" size="small" severity="secondary" icon="pi pi-check" loading={loading} onClick={load} />
        
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
