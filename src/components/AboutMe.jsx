import React from "react";
import { Heading, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import myVideo from "../assets/vid.mp4";
const AboutMe = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <Heading as="h2" size="lg" mb={4} borderBottom="1px solid" pb={2} fontFamily="'Lobster', cursive">
        <u>What is Resource Guru?</u>
      </Heading>
      <motion.div
        className="about-me-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={textVariants}></motion.span>
        <Heading as="p" size="md" fontFamily="'Josefin Sans', sans-serif">
          Resource Guru is a powerful and user-friendly resource finder app
          designed to help you discover a wide range of valuable resources in a
          convenient and efficient way. Whether you're looking for Algorithamic materials, Web Development or Machine Learning 
          our app is
          here to assist you.
        </Heading>
      </motion.div>

      <Heading as="h2" size="lg" my={6} borderBottom="1px solid" pb={2} fontFamily="'Lobster', cursive">
        <u>Our Mission</u>
      </Heading>
      <motion.div
        className="about-me-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={textVariants}></motion.span>
        <Heading as="p" size="md" fontFamily="'Josefin Sans', sans-serif">
          At Resource Guru, our mission is to empower users by providing a
          comprehensive platform that simplifies the process of finding and
          accessing resources. We aim to streamline your search for relevant
          materials, saving you time and effort so that you can focus on what
          matters most to you.
        </Heading>
      </motion.div>

      <div style={{ marginTop: "2rem" }}>
        <ReactPlayer
          url={myVideo}
          playing
          loop
          muted
          autoPlay
          width="100%"
          height="auto"
        />
      </div>

      <Heading as="h2" size="lg" my={6} borderBottom="1px solid" pb={2} fontFamily="'Lobster', cursive">
        <u>Key Features</u>
      </Heading>
      <UnorderedList fontSize="md" my={4}>
        <ListItem size="md" fontFamily="'Josefin Sans', sans-serif">
          Resource Categorization: Our app organizes resources into various
          categories, making it easy for you to navigate and find exactly what
          you need. From educational resources to professional tools, we've got
          you covered.
        </ListItem>
        <ListItem size="md" fontFamily="'Josefin Sans', sans-serif">
          User-Friendly Interface: We have designed our app with a clean and
          intuitive interface, ensuring a smooth and enjoyable user experience.
          You can easily search, filter, and explore resources with just a few
          taps.
        </ListItem>
        <ListItem size="md" fontFamily="'Josefin Sans', sans-serif">
          Ratings and Reviews: Share your thoughts and experiences with the
          resources you've used. Rate and review resources to help others in the
          community make informed decisions.
        </ListItem>
        <ListItem size="md" fontFamily="'Josefin Sans', sans-serif">Top Interview Problem Sets With Practice Problems</ListItem>
      </UnorderedList>
    </>
  );
};

export default AboutMe;
