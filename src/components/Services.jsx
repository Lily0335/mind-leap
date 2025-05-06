// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// // import serviceImg1 from "../assets/service1.webp";
// // import serviceImg2 from "../assets/service2.webp";
// // import serviceImg3 from "../assets/service3.webp";
// // import serviceImg4 from "../assets/service4.webp";
// // import {fadeIn} from "../utilis/animationVariants"

// // const Services = () => {
// //     return (
// //         <div className='bg-[#f7f8fc]' id="services">
// //             <div className='pt-28 px-4 container mx-auto'>
// //                 <motion.div 
// //                     variants={fadeIn("up", 0.2)}
// //                     initial="hidden"
// //                     whileInView={"show"}
// //                     viewport={{ once: false, amount: 0.7 }}
// //                     className='space-y-5 text-center'
// //                 >
// //                     <h2 className='text-center text-4xl font-bold font-secondary text-heroBg'>
// //                         What Can We Do Together
// //                     </h2>
// //                     <p className='md:w-1/2 mx-auto'>
// // Together, we can nurture your inner peace, build resilience, and create a path to lasting mental well-being.
// //                     </p>
// //                 </motion.div>

// //                 {/* React Tabs */}
// //                 <div className='py-12 md:w-4/5 mx-auto'>
// //                     <Tabs>
// //                         <motion.TabList 
// //                            variants={fadeIn("up", 0.2)}
// //                            initial="hidden"
// //                            whileInView={"show"}
// //                            viewport={{ once: false, amount: 0.7 }}
// //                             className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
// //                         >
// //                             <Tab>Couple Counseling</Tab>
// //                             <Tab>Parenting Skills</Tab>
// //                             <Tab>Feeling Stuck</Tab>
// //                             <Tab>Self-Confidence</Tab>
// //                         </motion.TabList>

// //                         <TabPanel>
// //                             <motion.div
// //                                variants={fadeIn("up", 0.2)}
// //                                initial="hidden"
// //                                whileInView={"show"}
// //                                viewport={{ once: false, amount: 0.7 }}
// //                                 className='flex flex-col md:flex-row gap-8 mt-8'
// //                             >
// //                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
// //                                     <h3 className="text-3xl font-semibold text-primary mb-4">Couple Counseling</h3>
// //                                     <p className="mb-8">Our couple counseling services help partners improve communication, resolve conflicts, and strengthen their emotional connection in a supportive, professional environment.</p>
// //                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
// //                                     <ul className="list-disc list-inside space-y-3">
// //                                         <li>Understanding Relationship Dynamics</li>
// //                                         <li>Effective Communication Techniques</li>
// //                                         <li>Conflict Resolution Strategies</li>
// //                                     </ul>
// //                                 </div>
// //                                 <div className="md:w-1/2">
// //                                     <img src={serviceImg1} alt="Couple Counseling" className="w-full h-auto rounded-2xl object-cover" />
// //                                 </div>
// //                             </motion.div>
// //                         </TabPanel>
// //                         <TabPanel>
// //                             <motion.div
// //                                variants={fadeIn("up", 0.2)}
// //                                initial="hidden"
// //                                whileInView={"show"}
// //                                viewport={{ once: false, amount: 0.7 }}
// //                                 className='flex flex-col md:flex-row gap-8 mt-8'
// //                             >
// //                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
// //                                     <h3 className="text-3xl font-semibold text-primary mb-4">Parenting Skills</h3>
// //                                     <p className="mb-8">Our parent counseling services provide guidance and support to help strengthen family dynamics, improve communication, and navigate parenting challenges with confidence.</p>
// //                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
// //                                     <ul className="list-disc list-inside space-y-3">
// //                                         <li>Understanding Relationship Dynamics</li>
// //                                         <li>Effective Communication Techniques</li>
// //                                         <li>Conflict Resolution Strategies</li>
// //                                         <li>Nullam suscipit ex vitae venenatis efficitur.</li>
// //                                     </ul>
// //                                 </div>
// //                                 <div className="md:w-1/2">
// //                                     <img src={serviceImg2} alt="Parenting Skills" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
// //                                 </div>
// //                             </motion.div>
// //                         </TabPanel>
// //                         <TabPanel>
// //                             <motion.div
// //                                variants={fadeIn("up", 0.2)}
// //                                initial="hidden"
// //                                whileInView={"show"}
// //                                viewport={{ once: false, amount: 0.7 }}
// //                                 className='flex flex-col md:flex-row gap-8 mt-8'
// //                             >
// //                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
// //                                     <h3 className="text-3xl font-semibold text-primary mb-4">Feeling Stuck</h3>
// //                                     <p className="mb-8">If you're feeling stuck, we offer compassionate support to help you break through barriers, find clarity, and move forward with confidence.</p>
// //                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
// //                                     <ul className="list-disc list-inside space-y-3">
// //                                         <li>Understanding Relationship Dynamics</li>
// //                                         <li>Effective Communication Techniques</li>
// //                                         <li>Conflict Resolution Strategies</li>
// //                                     </ul>
// //                                 </div>
// //                                 <div className="md:w-1/2">
// //                                     <img src={serviceImg3} alt="Feeling Stuck" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
// //                                 </div>
// //                             </motion.div>
// //                         </TabPanel>
// //                         <TabPanel>
// //                             <motion.div
// //                               variants={fadeIn("up", 0.2)}
// //                               initial="hidden"
// //                               whileInView={"show"}
// //                               viewport={{ once: false, amount: 0.7 }}
// //                                 className='flex flex-col md:flex-row gap-8 mt-8'
// //                             >
// //                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
// //                                     <h3 className="text-3xl font-semibold text-primary mb-4">Self-Confidence</h3>
// //                                     <p className="mb-8">We’re here to help you build lasting self-confidence by uncovering your strengths, setting achievable goals, and empowering you to embrace your true potential.</p>
// //                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
// //                                     <ul className="list-disc list-inside space-y-3">
// //                                         <li>Understanding Relationship Dynamics</li>
// //                                         <li>Effective Communication Techniques</li>
// //                                         <li>Conflict Resolution Strategies</li>
// //                                         <li>Nullam suscipit ex vitae venenatis efficitur.</li>
// //                                     </ul>
// //                                 </div>
// //                                 <div className="md:w-1/2">
// //                                     <img src={serviceImg4} alt="Self-Confidence" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
// //                                 </div>
// //                             </motion.div>
// //                         </TabPanel>
// //                     </Tabs>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Services;
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'; // Optional default styles
// import serviceImg1 from "../assets/service1.webp";
// import serviceImg2 from "../assets/service2.webp";
// import serviceImg3 from "../assets/service3.webp";
// import serviceImg4 from "../assets/service4.webp";
// import { fadeIn } from "../utilis/animationVariants";

// const Services = () => {
//     return (
//         <div className='bg-[#f7f8fc]' id="services">
//             <div className='pt-28 px-4 container mx-auto'>
//                 <motion.div 
//                     variants={fadeIn("up", 0.2)}
//                     initial="hidden"
//                     whileInView={"show"}
//                     viewport={{ once: false, amount: 0.7 }}
//                     className='space-y-5 text-center'
//                 >
//                     <h2 className='text-center text-4xl font-bold font-secondary text-heroBg'>
//                         What Can We Do Together
//                     </h2>
//                     <p className='md:w-1/2 mx-auto'>
//                         Together, we can nurture your inner peace, build resilience, and create a path to lasting mental well-being.
//                     </p>
//                 </motion.div>

//                 {/* React Tabs */}
//                 <div className='py-12 md:w-4/5 mx-auto'>
//                     <Tabs>
//                         <motion.div 
//                             variants={fadeIn("up", 0.2)}
//                             initial="hidden"
//                             whileInView={"show"}
//                             viewport={{ once: false, amount: 0.7 }}
//                             className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
//                         >
//                             <Tab className="cursor-pointer transition-all px-4 py-2 rounded-lg text-lg font-medium text-primary hover:bg-primary hover:text-white duration-300">Couple Counseling</Tab>
//                             <Tab className="cursor-pointer transition-all px-4 py-2 rounded-lg text-lg font-medium text-primary hover:bg-primary hover:text-white duration-300">Parenting Skills</Tab>
//                             <Tab className="cursor-pointer transition-all px-4 py-2 rounded-lg text-lg font-medium text-primary hover:bg-primary hover:text-white duration-300">Feeling Stuck</Tab>
//                             <Tab className="cursor-pointer transition-all px-4 py-2 rounded-lg text-lg font-medium text-primary hover:bg-primary hover:text-white duration-300">Self-Confidence</Tab>
//                         </motion.div>

//                         {/* TabPanel 1 */}
//                         <TabPanel>
//                             <motion.div
//                                 variants={fadeIn("up", 0.2)}
//                                 initial="hidden"
//                                 whileInView={"show"}
//                                 viewport={{ once: false, amount: 0.7 }}
//                                 className='flex flex-col md:flex-row gap-8 mt-8'
//                             >
//                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
//                                     <h3 className="text-3xl font-semibold text-primary mb-4">Couple Counseling</h3>
//                                     <p className="mb-8">Our couple counseling services help partners improve communication, resolve conflicts, and strengthen their emotional connection in a supportive, professional environment.</p>
//                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
//                                     <ul className="list-disc list-inside space-y-3">
//                                         <li>Understanding Relationship Dynamics</li>
//                                         <li>Effective Communication Techniques</li>
//                                         <li>Conflict Resolution Strategies</li>
//                                     </ul>
//                                 </div>
//                                 <div className="md:w-1/2">
//                                     <img src={serviceImg1} alt="Couple Counseling" className="w-full h-auto rounded-2xl object-cover" />
//                                 </div>
//                             </motion.div>
//                         </TabPanel>

//                         {/* TabPanel 2 */}
//                         <TabPanel>
//                             <motion.div
//                                 variants={fadeIn("up", 0.2)}
//                                 initial="hidden"
//                                 whileInView={"show"}
//                                 viewport={{ once: false, amount: 0.7 }}
//                                 className='flex flex-col md:flex-row gap-8 mt-8'
//                             >
//                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
//                                     <h3 className="text-3xl font-semibold text-primary mb-4">Parenting Skills</h3>
//                                     <p className="mb-8">Our parent counseling services provide guidance and support to help strengthen family dynamics, improve communication, and navigate parenting challenges with confidence.</p>
//                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
//                                     <ul className="list-disc list-inside space-y-3">
//                                         <li>Understanding Relationship Dynamics</li>
//                                         <li>Effective Communication Techniques</li>
//                                         <li>Conflict Resolution Strategies</li>
//                                         <li>Nullam suscipit ex vitae venenatis efficitur.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="md:w-1/2">
//                                     <img src={serviceImg2} alt="Parenting Skills" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
//                                 </div>
//                             </motion.div>
//                         </TabPanel>

//                         {/* TabPanel 3 */}
//                         <TabPanel>
//                             <motion.div
//                                 variants={fadeIn("up", 0.2)}
//                                 initial="hidden"
//                                 whileInView={"show"}
//                                 viewport={{ once: false, amount: 0.7 }}
//                                 className='flex flex-col md:flex-row gap-8 mt-8'
//                             >
//                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
//                                     <h3 className="text-3xl font-semibold text-primary mb-4">Feeling Stuck</h3>
//                                     <p className="mb-8">If you're feeling stuck, we offer compassionate support to help you break through barriers, find clarity, and move forward with confidence.</p>
//                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
//                                     <ul className="list-disc list-inside space-y-3">
//                                         <li>Understanding Relationship Dynamics</li>
//                                         <li>Effective Communication Techniques</li>
//                                         <li>Conflict Resolution Strategies</li>
//                                     </ul>
//                                 </div>
//                                 <div className="md:w-1/2">
//                                     <img src={serviceImg3} alt="Feeling Stuck" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
//                                 </div>
//                             </motion.div>
//                         </TabPanel>

//                         {/* TabPanel 4 */}
//                         <TabPanel>
//                             <motion.div
//                                 variants={fadeIn("up", 0.2)}
//                                 initial="hidden"
//                                 whileInView={"show"}
//                                 viewport={{ once: false, amount: 0.7 }}
//                                 className='flex flex-col md:flex-row gap-8 mt-8'
//                             >
//                                 <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
//                                     <h3 className="text-3xl font-semibold text-primary mb-4">Self-Confidence</h3>
//                                     <p className="mb-8">We’re here to help you build lasting self-confidence by uncovering your strengths, setting achievable goals, and empowering you to embrace your true potential.</p>
//                                     <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
//                                     <ul className="list-disc list-inside space-y-3">
//                                         <li>Understanding Relationship Dynamics</li>
//                                         <li>Effective Communication Techniques</li>
//                                         <li>Conflict Resolution Strategies</li>
//                                         <li>Nullam suscipit ex vitae venenatis efficitur.</li>
//                                     </ul>
//                                 </div>
//                                 <div className="md:w-1/2">
//                                     <img src={serviceImg4} alt="Self-Confidence" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
//                                 </div>
//                             </motion.div>
//                         </TabPanel>
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { fadeIn } from "../utilis/animationVariants";

const tabClass =
  "relative group cursor-pointer px-4 py-2 text-lg font-medium text-primary hover:text-[#4f46e5] transition-colors duration-300";
const underlineSpan =
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4f46e5] transition-all duration-300 group-hover:w-full"></span>;

const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id="services">
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='space-y-5 text-center'
        >
          <h2 className='text-center text-4xl font-bold font-secondary text-heroBg'>
            What Can We Do Together
          </h2>
          <p className='md:w-1/2 mx-auto'>
            Together, we can nurture your inner peace, build resilience, and create a path to lasting mental well-being.
          </p>
        </motion.div>

        {/* React Tabs */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
            >
              <Tab className={tabClass}>Couple Counseling{underlineSpan}</Tab>
              <Tab className={tabClass}>Parenting Skills{underlineSpan}</Tab>
              <Tab className={tabClass}>Feeling Stuck{underlineSpan}</Tab>
              <Tab className={tabClass}>Self-Confidence{underlineSpan}</Tab>
            </motion.TabList>

            {/* Tab Panels */}
            {[{
              title: "Couple Counseling",
              text: "Our couple counseling services help partners improve communication, resolve conflicts, and strengthen their emotional connection in a supportive, professional environment.",
              benefits: [
                "Understanding Relationship Dynamics",
                "Effective Communication Techniques",
                "Conflict Resolution Strategies",
              ],
              image: serviceImg1,
              alt: "Couple Counseling"
            }, {
              title: "Parenting Skills",
              text: "Our parent counseling services provide guidance and support to help strengthen family dynamics, improve communication, and navigate parenting challenges with confidence.",
              benefits: [
                "Understanding Relationship Dynamics",
                "Effective Communication Techniques",
                "Conflict Resolution Strategies",
                "Nullam suscipit ex vitae venenatis efficitur."
              ],
              image: serviceImg2,
              alt: "Parenting Skills"
            }, {
              title: "Feeling Stuck",
              text: "If you're feeling stuck, we offer compassionate support to help you break through barriers, find clarity, and move forward with confidence.",
              benefits: [
                "Understanding Relationship Dynamics",
                "Effective Communication Techniques",
                "Conflict Resolution Strategies",
              ],
              image: serviceImg3,
              alt: "Feeling Stuck"
            }, {
              title: "Self-Confidence",
              text: "We’re here to help you build lasting self-confidence by uncovering your strengths, setting achievable goals, and empowering you to embrace your true potential.",
              benefits: [
                "Understanding Relationship Dynamics",
                "Effective Communication Techniques",
                "Conflict Resolution Strategies",
                "Nullam suscipit ex vitae venenatis efficitur."
              ],
              image: serviceImg4,
              alt: "Self-Confidence"
            }].map((item, index) => (
              <TabPanel key={index}>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex flex-col md:flex-row gap-8 mt-8'
                >
                  <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                    <h3 className="text-3xl font-semibold text-primary mb-4">{item.title}</h3>
                    <p className="mb-8">{item.text}</p>
                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                    <ul className="list-disc list-inside space-y-3">
                      {item.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img src={item.image} alt={item.alt} className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                  </div>
                </motion.div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;

