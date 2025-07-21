
import { Link } from "react-router-dom";
import { useRef } from "react"
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

export default function Navigation(){
    return(
        <>
    
<div className="navigation w-screen flex justify-around items-center flex-wrap font-cabinet">
    <div className="p-3 flex items-center justify-center">
        <Link to='/'>
        <img className="image" alt=""/>
        </Link>
        <motion.p className="mx-2"
      variants = {fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}

        >Elishaddai International School</motion.p>
    </div>
    <ul className="flex p-3 unordedlist  items-center justify-center">
        <Link to='/'>  <li className="lg:mx-6 mx-1">Home </li></Link>
        <Link to='/about'>  <li className="lg:mx-6 mx-2">About </li></Link>
        <Link to='/services'>  <li className="lg:mx-6 mx-1">Gallery </li></Link>
        <Link to='/results'>  <li className="lg:mx-6 mx-1">Results</li></Link>
  
    </ul>
</div>


        </>
    )

}