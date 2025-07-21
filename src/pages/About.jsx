import Navigation from "../componets/Navigation";
import Footer from "../componets/Footer";
import { motion} from "framer-motion";
import { fadeIn } from "../variants";


export default function About(){
    return (

 <>

 
<Navigation/>

<div className=" w-screen abt flex  flex-col justify-center items-center font-cabinet my-10">

<motion.div className="flex items-center justify-center"
variants = {fadeIn("left",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}

>
    <p className="border-amber-400 border-b-2  p-2 text-4xl">
        About School
    </p>




</motion.div>

<motion.div 

    variants = {fadeIn("down",0.2
    )}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}

    className="flex items-center justify-center my-10 flex-wrap lg:w-200 min:w-100 p-5 m-2 about">
        
    <p className="">
        El Shaddai International School is an extension of El
         Shaddai Primary school, which I started in 2011. Opening 
         ELPS came from a desire to see the growing Tanzanian society
          be led by God fearing, country-loving people. This is reflected 
          in our school motto: Today's 
        readers, tomorrow’s leaders. I am proud of the high standards of
         education we have managed to achieve in ELPS.

    </p>
    <div>
        <br />
        <p className="">

        Today`s readers, tomorrow's leaders.

El Shaddai International School (ELIS) is a christian, 
Tanzanian, International school located in Dodoma, 
the heart and capital of Tanzania. Loyal to our calling and
 location, we prepare children to become active members in the 
 Tanzanian and global community by surrounding them with an educationally
  innovative, culturally rooted and spiritually rich school curriculum.
  Our school is a warm and welcoming community where we partner with parents in 
  the education of their children,
 and approach all who enter as persons with a God-given purpose
  in life. 
        </p>
    </div>





</motion.div>




<div>

<div className="w-100 max-w-6xl mx-auto my-10 px-4 lg:w-200">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.830931120064!2d35.8652275757984!3d-6.153392693833731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de30339935f51%3A0xe9f623c908782b7e!2sEl%20Shaddai%20Pre%20%26%20Primary%20School!5e0!3m2!1sen!2stz!4v1753041320383!5m2!1sen!2stz"
          className="w-full h-[350px] md:h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>


</div>



<div className="flex items-center justify-center">
    <motion.p 
    variants = {fadeIn("right",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}
    
    className="border-amber-400 border-b-2  p-2 text-4xl">
         Archieviments
    </motion.p>
</div>


<motion.div

variants = {fadeIn("up",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}


className="flex items-center justify-center my-10 flex-wrap lg:w-200 min:w-100 p-5  about">
    
    <p className="">
Since Dodoma was activated to be the operational capital 
of Tanzania in 2019, it has become a fast-growing city. 
We saw an influx of new inhabitants with a global mindset
 coming into the capital: investors, ambassadors and the like.
  We are taking this opportunity to expand the El Shaddai education
   services to include an international English curriculum. 
We found the Cambridge Curriculum to be the most suitable option for the new school.

</p>

<p>
    <br />
    In the school year 2025-2026 ELIS opens its doors to children ages
     3 to 9. This includes preprimary classes 1, 2 and 3, as well as
      primary levels 1, 2 and 3. In upcoming years we foresee a gradual 
      increase in the amount of classes. We will assess the need for supplementary
       classes based on the amount of students on the waiting list as well as 
    the progress of the children already enrolled. Boarding facilities are planned 
    and will be constructed in due time. 
</p>
</motion.div>

<div className="flex items-center justify-center">
    
    <motion.div 
    
    variants = {fadeIn("left",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}
    
    className="flex justify-center w-80 my-10">
    <p className="border-amber-400 border-b-2 flex  p-2 text-4xl">
         important keys
    </p>

    </motion.div>
</div>

<motion.div
variants = {fadeIn("up",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}

className="flex items-center justify-center my-10 flex-wrap lg:w-200 min:w-100 p-5 m-2">
    
    <p className="">

our mission is ever student to enjoy the standards and education
 efforts we have organized at El Shaddai International School,
 so I warmly welcome you to come visit us. <br></br> <br></br>

 Future leader! Dive into the pages of today’s books,
  spark your imagination, and build the skills to lead tomorrow
</p>
    <p className="">
<br/>
Educating your students today is the key to unlocking a brighter tomorrow.
 By nurturing their minds with knowledge, skills, and values, you empower
  them to lead, innovate, and thrive in
 an ever-changing world. Let’s build a future where every student shines as a
  confident, capable leader—start their journey now!
</p>

</motion.div>



</div>

<Footer/>


 </>


    )
}