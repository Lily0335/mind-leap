
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import thumbnailImg from '../assets/video-thumbnail.webp';
import { fadeIn } from '../utilis/animationVariants';

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div className='bg-[#f7f8fc] pb-16 pt-20' id='about'>
            <div className='container mx-auto'>
                <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
                    {/* Left Side (Video) */}
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='w-full md:w-1/2 mb-8 md:mb-0'
                    >
                        {!isVideoPlaying ? (
                            <div className='relative'>
                                <img
                                    src={thumbnailImg}
                                    alt='Video Cover'
                                    className='w-full md:h-[446px] h-auto rounded-lg object-cover'
                                />
                                <button
                                    onClick={handleVideoPlay}
                                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'
                                >
                                    {/* Play Icon */}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-12 w-12 text-white'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M8 5.236L14 10 8 14.764V5.236zM6 4a1 1 0 011.447-.895l10 5a1 1 0 010 1.79l-10 5A1 1 0 016 16V4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </button>
                            </div>
                        ) : null}
                    </motion.div>

                    {/* Right Side (Text Content) */}
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='w-full md:w-1/2 px-4'
                    >
                        <h2 className='text-3xl font-bold mb-4 font-secondary capitalize'>individual consult and therapy</h2>
                        <p className='text-lg mb-8'>
                            we believe mental well-being is the foundation for a fulfilling life. Our mission is to create a safe, supportive space where individuals can explore, heal, and thrive. We offer a range of professional wellness services — including therapy, mindfulness sessions, life coaching, and stress management — all available through a seamless online booking experience.

                            Whether you're seeking clarity, calm, or personal growth, our experienced practitioners are here to walk with you every step of the way. We combine evidence-based practices with a compassionate approach to help you build resilience and restore balance in your life.

                            Your peace of mind matters. Let’s begin this journey together.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ZToicYcHIOU"
                            title="Daily Calm | 10 Minute Mindfulness Meditation | Be Present"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-lg'
                        ></iframe>
                        <button
                            onClick={handleCloseVideo}
                            className='absolute top-4 right-4 text-white text-2xl cursor-pointer'
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;

