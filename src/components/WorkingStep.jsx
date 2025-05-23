import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center bg-working-img py-12'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-90'></div>
      <div className='relative container mx-auto px-8 py-20'>
        {/* Animated Title and Description */}
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
          className='text-center text-white mb-20'
        >
          <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
           Book a Session: Simply choose a service and schedule a session at your convenience, 24/7.

Personalized Approach: Our expert therapists tailor each session to meet your unique needs and goals.

Ongoing Support: Receive continuous support through follow-up sessions to ensure your progress and well-being.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {/* Animated Step 1 */}
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              1
            </div>
            <h3 className='text-lg font-medium mt-8'>Fill a Form</h3>
            <p className='my-2'>
              Step 1 Choose Your Service: Select the service that best suits your needs from our offerings.

Provide Your Details: Complete the form with your name, contact information, and any relevant background information.

Schedule Your Session: Choose your preferred date and time for the session, and confirm your booking.
            </p>
          </motion.div>
          
          {/* Animated Step 2 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              2
            </div>
            <h3 className='text-lg font-medium mt-8'>Get Matched</h3>
            <p className='my-2'>
              Step 2 Based on your preferences, we’ll connect you with the therapist best suited to support you.
            </p>
          </motion.div>
          
          {/* Animated Step 3 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              3
            </div>
            <h3 className='text-lg font-medium mt-8'>Schedule</h3>
            <p className='my-2'>
              Step 3  Choose from a variety of wellness services tailored to your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
