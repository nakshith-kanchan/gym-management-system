// aos
import React, { useEffect } from 'react';
import { Heading, FaqComponent } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className='pt-10 relative'>
      <Heading name="Frequently Asked Questions" />

      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col">
          <div data-aos="fade-up">
            <FaqComponent
              question="How do I sign up and log in to the gym portal?"
              answer="To sign up, go to the registration page and enter your details including name, email, and preferred plan. After registration, use your email and password to log in and access your dashboard."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <FaqComponent
              question="What are the membership fees for different plans?"
              answer="We offer various membership plans: ₹999/month for basic, ₹2499/quarterly, and ₹8999/year for premium. Each plan includes different levels of access to facilities and services."
            />
          </div>

         <div data-aos="fade-up" data-aos-delay="100">
            <FaqComponent
              question="What types of workout plans are available?"
              answer="We offer personalized workout plans focusing on weight loss, muscle building, endurance, and flexibility. Plans are customized based on your fitness level and goals."
            />
          </div>


           <div data-aos="fade-up" data-aos-delay="300">
            <FaqComponent
              question="Is my personal data safe on this platform?"
              answer="Yes. We prioritize user privacy and data protection. All member information is securely stored and only accessible to authorized personnel for gym operations."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <FaqComponent
              question="How long does it take to complete a workout plan?"
              answer="Workout durations vary based on your selected goal—weight loss, muscle gain, or general fitness. On average, each plan spans 4 to 12 weeks with weekly progress tracking."
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-amber-300 opacity-80 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default FAQ;
