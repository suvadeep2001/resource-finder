import React from "react";
import { Heading, List, ListItem, Box, Button, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "../Layout";

const ButtonOtherPart = () => {
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
          href="https://www.youtube.com/playlist?list=PLzjZaW71kMwQ-D3oxCEDHAvYu8VC1XOsS"
          variant="solid"
          colorScheme="blue"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Hashmaps
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Tries
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLX0iyO9CrCF1-4je7G0JMSr_50I0J2K3Z"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Bit Manipulation
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLQXZIFwMtjozzDH4ZRtpIl0piBjsRF5Bf"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Greedy
        </Button>
        <Button
          as="a"
          href="https://www.geeksforgeeks.org/introduction-to-circular-queue/"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Circular Queues
        </Button>
        <Button
          as="a"
          href="https://youtu.be/g9wTzeq0Y-g"
          variant="solid"
          colorScheme="blue"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Deques
        </Button>
        <Button
          as="a"
          href="https://youtu.be/q8gdBn9RPeI"
          variant="solid"
          colorScheme="yellow"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Doubly And Circular LL
        </Button>
      </Box>
    </motion.div>
  );
};

export default ButtonOtherPart;
