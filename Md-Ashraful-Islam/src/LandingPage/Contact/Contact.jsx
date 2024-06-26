import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import './Contact.css'
import ScrambleText from '../../forAll/ScrambleText';
const Contact = () => {
  const texts = ['contact us_', 'what you want to say?_', 'what services you want?_'];
  return (
    <div className="contact-section"><div className="max-w-7xl md:mx-auto pb-10 mx-5">
   <h1 className="mb-5 section-title">
   <ScrambleText texts={texts}/>
        </h1>
    <div className="text-white flex flex-wrap justify-center md:gap-5 gap-1 mb-10">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center mb-4 contact-info-area"
    >
      <FaMapMarkedAlt className="text-white mr-2 " />
      <p className='text-[12px] md:text-[15px]'>Sylhet, Bangladesh</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center mb-4 contact-info-area"
    >
      <FaEnvelope className="text-white mr-2" />
      <p className='text-[12px] md:text-[15px]'>mohammadashrafulislam33@gmail.com</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex items-center contact-info-area"
    >
      <FaPhone className="text-white mr-2" />
      <p className='text-[12px] md:text-[15px]'>+8801747274852</p>
    </motion.div>
  </div>
      <div className="md:flex flex flex-1 justify-center">
        <div className="lg:w-[50%] w-full  rounded-3xl md:p-8 mx-[100px] lg:mx-0 sm:mx-0">
          <form action="https://formspree.io/f/mgejeqoy" method="POST">
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2 !bg-[#05050594] text-white py-2 px-4"
                type="text"
                id="name"
                placeholder="Type your name"
                name="name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="service">
                Service Needed
              </label>
              <select
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                id="service"
                name="service"
              >
                <option value="SEO">SEO</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Design">Web Design</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="website">
                Website
              </label>
              <input
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                type="text"
                id="website"
                placeholder="Your Website"
                name="website"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="best-time">
                Best Time & Date to Contact
              </label>
              <input
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2 text-white py-2 px-4 !bg-[#cccccc34]"
                type="datetime-local"
                id="best-time"
                name="best-time"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                name="phone"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="contact-method">
                Preferred Contact Method
              </label>
              <select
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2 !bg-[#05050594] text-white py-2 px-4"
                id="contact-method"
                name="contact-method"
              >
                <option value="mail">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full bg-transparent rounded-md border border-none focus:outline-none focus:ring-2   text-white py-2 px-4 !bg-[#05050594]"
                id="message"
                rows="4"
                placeholder="What's on your mind?"
                name="message"
              ></motion.textarea>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="btn-contact text-gray-800 rounded-md py-2 px-4 font-medium transition-all duration-200 hover:bg-gray-100 "
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        </div></div></div>
    </div>
  );
};

export default Contact;
