import React from "react";
import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      <Heading>
        <u>About Me</u>
      </Heading>
      <motion.div
        className="about-me-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={textVariants}></motion.span>
        <Heading size="sl" fontFamily="'Crimson Text', serif">
          Hi, I'm Suvadeep Maity, a student of Electronics and Communication
          Engineering at Netaji Subhash Engineering College in West Bengal,
          India. I'm currently pursuing my Bachelor of Technology degree. Apart from academics, I'm also passionate about coding and
          have achieved several milestones in the programming community. I've
          solved over 250 questions on LeetCode, with a global rank of 1400.
        </Heading>
      </motion.div>
    </>
  );
};

export default AboutMe;
