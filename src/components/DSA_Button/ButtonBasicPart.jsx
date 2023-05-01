import React from "react";
import {
  Heading,
  List,
  ListItem,
  Box,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "../Layout";

const ButtonBasicPart = () => {
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
      <Box
        display="flex"
        justifyContent="center"
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PL-Jc9J83PIiE-TR27GB7V5TBLQRT5RnSl"
          target="__blank"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Arrays & Strings
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod"
          target="__blank"
          variant="solid"
          colorScheme="blue"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Recursion & Backtracking
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTp4pb_WBRahP1tnipLuX9qM"
          target="__blank"
          variant="solid"
          colorScheme="green"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Sorting & Searching Algorithms
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLKZaSt2df1gz775Mz-2gLpY9sld5wH8We"
          target="__blank"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Linked Lists
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oSO572kQ7KCSvCUh1AdILj"
          target="__blank"
          variant="solid"
          colorScheme="purple"
          mr={2}
          px={4}
          py={2}
          mb={2}
        >
          Stacks & Queues
        </Button>
      </Box>
    </motion.div>
  );
};

export default ButtonBasicPart;
