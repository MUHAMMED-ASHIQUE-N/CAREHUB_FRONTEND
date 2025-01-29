import React from "react";
import { useInView } from "react-intersection-observer";


const ServiceCard = ({ image, title, description, show, image_white}) => {

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });


  return (
    <div ref={ref} className={`card   transform duration-1000 ease-out transition-all delay-300 ${inView ? "opacity-100 scale-x-100  "  : "opacity-0 scale-0 "} `}>
      <div className="inner">
        {/* Front Side */}
        <div className="front">
          <div className="content">
          {  show && <img src={image} className="icon" alt="icon" />}
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="back">
          <div className="content">
          { show &&<img src={image_white} className="icon" alt="icon" />}
          <h1 className="title">{title}</h1>
               <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;





// import React from "react";

// const ServiceCard = ({ image, title, description }) => {
//   return (
//     <div className="card">
//       <div className="inner">
//         {/* Front Side */}
//         <div className="front">
//           <img src={image} className="w-16 h-16 object-contain" />
//           <h1 className="font-bold text-xl text-gray-800">{title}</h1>
//           <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-4">
//             {description}
//           </p>
//         </div>

//         {/* Back Side */}
//         <div className="back">
//           <h1 className="font-bold text-xl text-white">More Info</h1>
//           <p className="text-white text-sm sm:text-base px-2 sm:px-4">
//             Contact us for details!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
