// import React from 'react';
// import { Img } from '../../utils/Img';
//
// export const Services = (props: any) => {
//   const { title, subtitle, description, data } = props;
//
//   return (
//     <div className="bg-[#F5F9FF] md:pt-[98px] pt-[90px]">
//       <div className="max-w-[721px] mx-auto text-center mb-[97px] sm:px-0 px-[20px]">
//         <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
//           {title}
//         </h6>
//         <h2 className="relative inline-block xxl:text-[35px] xl:text-[35px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold mb-[18px] text-primary">
//           {subtitle}
//           <Img
//             src="/images/underline-dark.svg"
//             alt="underline"
//             className="absolute bottom-[0] left-0 w-full"
//           />
//         </h2>
//         <div className=" xl:text-[19px] text-[14px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
//           {description}
//         </div>
//       </div>
//       <div className="">
//         <div className="grid sm:grid-cols-3 grid-cols-1">
//           {data?.map((service: any, index: any) => {
//             return (
//               <div
//                 key={index}
//                 className="service-card cursor-pointer flex flex-col items-center text-center p-60px relative"
//               >
//                 <Img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full"
//                 />
//                 <div className="service-card-content absolute text-left w-full h-full p-[30px] flex flex-col top-0 left-0 text-[#FFFFFF] font-medium">
//                   <div className="flex-1 w-full xxl:text-[35px] md:text-[30px] text-[25px] leading-[25px] tracking-[-0.84px]">
//                     0{index + 1}
//                   </div>
//                   <div>
//                     <div className="flex items-center">
//                       <div className="md:text-[25px] text-[15px] leading-[25px] tracking-[-0.6px]">
//                         {service.title}
//                       </div>
//                       <Img
//                         src="/images/plus.svg"
//                         alt={service.title}
//                         className="xxl:w-[28px] w-[22px] xxl:h-[28px] h-[22px] ml-[10px] plus-icon"
//                       />
//                     </div>
//                     <div className="service-card-details">
//                       <div className="md:mt-[20px] mt-[5px] xxl:text-[19px] md:text-[19px] text-[12px] leading-[30px] tracking-[-0.46px] font-normal">
//                         {service.description}
//                       </div>
//                       <Img
//                         src="/images/circle.svg"
//                         alt={service.title}
//                         className="xxl:w-[28px] w-[22px] xxl:h-[28px] h-[22px] md:mt-[24px] mt-[5px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
