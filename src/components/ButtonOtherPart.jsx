import React from "react";
import { Heading, List, ListItem, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "./Layout";

const ButtonOtherPart = () => {
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
      <Box display="flex" justifyContent="center">
        <Button
          as="a"
          href="https://www.codechef.com/certification/data-structures-and-algorithms/prepare"
          variant="solid"
          colorScheme="blue"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Button 1
        </Button>
        <Button
          as="a"
          href="#"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Button 2
        </Button>
        <Button
          as="a"
          href="#"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Button 3
        </Button>
      </Box>
    </motion.div>
  );
};

export default ButtonOtherPart;
