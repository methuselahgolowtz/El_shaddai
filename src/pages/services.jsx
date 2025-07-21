import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image3.jpg";
import image3 from "../assets/images/image4.jpg";
import image4 from "../assets/images/image2.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import Navigation from "../componets/Navigation";
import Footer from "../componets/Footer";

const images = [image1, image2, image3, image4, image5, image6];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(nextSlide, 30000); // 30 seconds
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
<div>


<div>
    <Navigation/>

</div>
<div className="separator my-40"></div>

        <div className="font-cabinet w-screen  flex justify-center items-center text-2xl p-3 my-4">
            <p className="bold border-b-2 border-amber-400 p-3 ">School images</p>
        </div>
    <div className="relative w-full my-10 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg group">

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`carousel-image-${current}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-[16/9] object-cover sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/7] transition-all"
        />
      </AnimatePresence>

      {/* Prev Button */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>

<div>
    <Footer/>
</div>
    </div>
  );
}
