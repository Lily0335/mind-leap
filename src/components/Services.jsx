import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import {fadeIn} from "../utilis/animationVariants"

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
                            <Tab>Couple Counseling</Tab>
                            <Tab>Parenting Skills</Tab>
                            <Tab>Feeling Stuck</Tab>
                            <Tab>Self-Confidence</Tab>
                        </motion.TabList>

                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Couple Counseling</h3>
                                    <p className="mb-8">Our couple counseling services help partners improve communication, resolve conflicts, and strengthen their emotional connection in a supportive, professional environment.</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg1} alt="Couple Counseling" className="w-full h-auto rounded-2xl object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Parenting Skills</h3>
                                    <p className="mb-8">Our parent counseling services provide guidance and support to help strengthen family dynamics, improve communication, and navigate parenting challenges with confidence.</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                        <li>Nullam suscipit ex vitae venenatis efficitur.</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg2} alt="Parenting Skills" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                            <motion.div
                               variants={fadeIn("up", 0.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Feeling Stuck</h3>
                                    <p className="mb-8">If you're feeling stuck, we offer compassionate support to help you break through barriers, find clarity, and move forward with confidence.</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg3} alt="Feeling Stuck" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                            <motion.div
                              variants={fadeIn("up", 0.2)}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                                    <h3 className="text-3xl font-semibold text-primary mb-4">Self-Confidence</h3>
                                    <p className="mb-8">We’re here to help you build lasting self-confidence by uncovering your strengths, setting achievable goals, and empowering you to embrace your true potential.</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className="list-disc list-inside space-y-3">
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                        <li>Nullam suscipit ex vitae venenatis efficitur.</li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2">
                                    <img src={serviceImg4} alt="Self-Confidence" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                                </div>
                            </motion.div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;
