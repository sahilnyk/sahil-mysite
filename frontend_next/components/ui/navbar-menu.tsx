// "use client";
// import React from "react";
// import { motion, cubicBezier } from "motion/react";

// /**
//  * Motion v11 compatible easing
//  */
// const transition = {
//     duration: 0.35,
//     ease: cubicBezier(0.4, 0, 0.2, 1),
// };

// export const MenuItem = ({
//     setActive,
//     active,
//     item,
//     children,
// }: {
//     setActive: (item: string) => void;
//     active: string | null;
//     item: string;
//     children?: React.ReactNode;
// }) => {
//     return (
//         <div onMouseEnter={() => setActive(item)} className="relative">
//             <motion.p
//                 transition={{ duration: 0.3, ease: cubicBezier(0.4, 0, 0.2, 1) }}
//                 className="cursor-pointer text-black hover:opacity-90 dark:text-white"
//             >
//                 {item}
//             </motion.p>

//             {active !== null && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9, y: 8 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.9, y: 8 }}
//                     transition={transition}
//                 >
//                     {active === item && (
//                         <div className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2">
//                             <motion.div
//                                 transition={transition}
//                                 layoutId="active"
//                                 className="bg-white dark:bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-black/20 dark:border-white/20 shadow-xl"
//                             >
//                                 <motion.div layout className="w-max h-full p-4">
//                                     {children}
//                                 </motion.div>
//                             </motion.div>
//                         </div>
//                     )}
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export const Menu = ({
//     setActive,
//     children,
// }: {
//     setActive: (item: string | null) => void;
//     children: React.ReactNode;
// }) => {
//     return (
//         <nav
//             onMouseLeave={() => setActive(null)}
//             className="relative rounded-full bg-white dark:bg-black dark:border-white/20 border shadow-lg flex justify-center space-x-6 px-6 py-4"
//         >
//             {children}
//         </nav>
//     );
// };

// export const ProductItem = ({
//     title,
//     description,
//     href,
//     src,
// }: {
//     title: string;
//     description: string;
//     href: string;
//     src: string;
// }) => {
//     return (
//         <a href={href} className="flex space-x-2">
//             <img
//                 src={src}
//                 width={120}
//                 height={60}
//                 alt={title}
//                 className="shrink-0 rounded-md shadow-xl"
//             />

//             <div>
//                 <h4 className="text-lg font-bold mb-1 text-black dark:text-white">
//                     {title}
//                 </h4>
//                 <p className="text-neutral-700 dark:text-neutral-300 text-sm max-w-40">
//                     {description}
//                 </p>
//             </div>
//         </a>
//     );
// };

// export const HoveredLink = ({ children, ...rest }: any) => (
//     <a
//         {...rest}
//         className="text-neutral-700 dark:text-neutral-200 hover:text-black"
//     >
//         {children}
//     </a>
// );
