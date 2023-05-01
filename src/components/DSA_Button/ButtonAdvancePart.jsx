import React from "react";
import { Heading, List, ListItem, Box, Button, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "../Layout";

const ButtonAdvancePart = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <motion.div variants={buttonVariants}>
      <Box display="flex" justifyContent="center" flexWrap={isMobile ? "wrap" : "nowrap"}>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTo87y1ytEAqp7wYlEP3nner"
          variant="solid"
          colorScheme="blue"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Binary Trees
        </Button>
        <Button
          as="a"
          href="https://youtu.be/UeRUKRJvPa4"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          BST
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Graphs
        </Button>
      </Box>
    </motion.div>
  );
};

export default ButtonAdvancePart;
