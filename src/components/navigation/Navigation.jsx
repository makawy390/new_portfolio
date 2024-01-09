import { AiTwotoneHome } from "react-icons/ai";
// import { BiSolidContact } from "react-icons/bi";
// import { FcContacts } from "react-icons/fc"
import { FaAddressCard } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { BsJournalBookmarkFill } from "react-icons/bs";
import "./nav.css";
import { MdHomeRepairService } from "react-icons/md";

const Navigation = () => {
  const navigationBar = [
    {icon : <AiTwotoneHome /> , link : '/' },
    {icon : <FaCircleUser /> , link : '/about' },
    {icon : <BsJournalBookmarkFill /> , link : '/skills' },
    {icon : <MdHomeRepairService /> , link : '/portfolio' },
    {icon : <FaAddressCard /> , link : '/contact' },
  ];
  const filtration = navigationBar.map(({icon , link} , index)=> (
        <li key={index}>
          <NavLink to={link}>{icon} </NavLink>
        </li>
  ))
  return (
    <div className="navigation">
      <ul className="list-navigation">
        {filtration}
              </ul>
    </div>
  );
};

export default Navigation;
