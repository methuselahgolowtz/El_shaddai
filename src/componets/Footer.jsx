import { motion } from "framer-motion"
import { fadeIn } from "../variants"


export default function Footer(){

    return(


        <>
        <div className=" w-screen font-cabinet flex flex-col justify-center">

            <motion.div 

            variants = {fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            
            className="py-7 text-2xl flex justify-center lg:text-4xl">
                For more informatioins
            </motion.div>

            <div className=" w-screen flex flex-col items-center  justify-center lg:flex-row">


<motion.div

variants = {fadeIn("up",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}


className=" flex flex-col m-2 justify-center items-center w-80 h-80  p-3">
                         
                         <div className="">
                            <p className="text-2xl">Contact us</p>
                          </div> 

                            <div className=" p-4 flex flex-col  items-center justify-center">
                            <div>
                            <p>(+255)759 510 238</p>

                            </div>
                            <div className="m-2"> 
                            <p> (+255)745 059 145</p>

                            </div>
                            <div>
                              
                            <p>welcome@elshaddaiinternationalschool.com</p>
                        

                            </div>
                         </div>
            </motion.div>

                  

            <motion.div
            
            variants = {fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            
            className=" w-80  lg:h-100 flex justify-center items-center ">
                        <div className="flex justify-center flex-col ">
                            <div className="flex justify-center">
                            <p className="text-black text-2xl">Location</p>

                            </div>
                            <div className="flex flex-col justify-center my-4 h-40 ">
                              <div>
                              P.O. Box 1709
                              </div>
                              <div>
                              <p>ihumwa</p>
                              </div>
                              
                               <div>
                                <p>Dar -es salaam road</p>
                               </div>

                            </div>
                        </div>
            </motion.div>
           


            <motion.div
            variants = {fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            
            
            
            className=" p-3 flex flex-col justify-center items-center m-2 h-70 w-80">
                     <div>
                            <p className="text-2xl my-4">Social Links</p>
                         </div>

                            <div className="items-center flex justify-center flex-col">
                            <div>
                            <p>info@elshaddaiinternationalschool.com</p>

                            </div>
                            
                            <div className="my-4">
                            <p>welcome@elshaddaiinternationalschool.com</p>

                            </div>
                              <div>
                            <p>insta:elishaddaiprimaryschool</p>

                              </div>
                         </div>
            </motion.div>



            

            </div>
           
        </div>
        
        
        
        </>
    )
}