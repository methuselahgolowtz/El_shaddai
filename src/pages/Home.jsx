import Navigation from "../componets/Navigation"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import image from "../assets/images/elshaddai-logo.png"
import image2 from "../assets/images/image3.jpg"
import { Link } from "react-router-dom"
import Footer from "../componets/Footer"
import Picha from "../componets/images"


export default function Home(){
    return (

        <>
        
        <Navigation/>
        <div className="my-20 lg:my-10">

        </div>
        

<div className="w-screen h-screen home flex items-center justify-center text-blue-50 lg:text-4xl text-2xl font-cabinet bold">

<motion.div 
  variants = {fadeIn("left",0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}

className="mx-5 lg:mx-10">
    <img src={image} alt="" className="w-40 picha "/>
</motion.div>

<div className="flex flex-col justify-center items-center">
    <motion.p

  variants = {fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}

    >Today's readers, tomorrow’s leaders</motion.p>
    
    <motion.p 
    ariants = {fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
    
    className="flex bg-amber-700 p-3 batan cursor-pointer hover:bg-amber-600 ">
        <Link to="/about">
        Explore
        
        </Link>
        
        
        </motion.p>
</div>

</div>


<div className="font-cabinet flex justify-center flex-col items-center lg:flex-row lg:justify-around">
<div className="flex justify-center items-center flex-col ">
    <div>
        <p className="text-2xl my-4 border-b-3 p-4">Welcome to Elishaddai International School</p>

    </div>
    
    <div>
        <img src={image2} width={350} height={400} className="my-4 lg:w-200" />
    </div>
</div>

<div className="flex items-center justify-center p-4 m-2 w-90 lg:w-150 text-l lg:text-xl">
    <p className="p-3 lg:p-2 text-justify hyphens-auto leading-relaxed">
        El Shaddai International School (ELIS) is a christian, 
        Tanzanian, International school located in Dodoma, the heart 
        and capital of Tanzania. Loyal to our calling and location, 
        we prepare children to become active members in the Tanzanian 
        and global community by surrounding them with an educationally 
        innovative, culturally rooted and spiritually rich school curriculum. 
        Our school is a warm and welcoming community where we partner with parents in the 
        education of their children, and approach all who enter as persons with a God-given purpose in life. 
    </p>
    <p className=" p-4 text-justify hyphens-auto leading-relaxed">
        In the school year 2025-2026 ELIS opens its doors to children ages 3 to 9.
         This includes preprimary classes 1, 2 and 3, as well as primary levels 1,
          2 and 3. In upcoming years we foresee a gradual increase in the amount of
           classes. We will assess the need for supplementary classes based on the
            amount of students on the waiting list as well as the progress 
        of the children already enrolled. Boarding facilities are planned and will be 
        constructed in due time.
    </p>
</div>

<div className="flex justify-center items-center flex-col">
    <div>

    <p className=" text-3xl  uppercase bold border-blue-900 border-b-3 ">Why  Elishadai</p>
    </div>
    <div className="p-3 m-2">
    <img src={image}  />

    </div>
</div>

</div>

<div>
<Picha/>
</div>

<div className="my-10">
    <Footer/>
</div>




        </>
    )
}