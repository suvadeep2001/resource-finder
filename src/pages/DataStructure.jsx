import React from "react";
import { Heading, List, ListItem, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import ButtonBasicPart from "../components/ButtonBasicPart";
import ButtonAdvancePart from "../components/ButtonAdvancePart"
import ButtonOtherPart from "../components/ButtonOtherPart";

const DataStructure = () => {
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
    <Layout>
      <Box>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants}>
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="cyan">
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Basic</u>
              </Heading>
              <List styleType="none" pl={0} textAlign="center">
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Recursion & Backtracking
                </ListItem>

                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Sorting Algorithms
                </ListItem>

                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Linked Lists
                </ListItem>
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Stacks (LIFO)
                </ListItem>
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Queues (FIFO)
                </ListItem>
              </List>
            </Box>
          </motion.div>
          <ButtonBasicPart/>

          <motion.div variants={textVariants}>
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="cyan">
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Advanced</u>
              </Heading>
              <List styleType="none" pl={0} textAlign="center">
                <ListItem py={2} color="black">
                  Binary Trees
                </ListItem>
                {/* Add more Advanced topics here */}
                <ListItem py={2} color="black">
                  BST
                </ListItem>
                <ListItem py={2} color="black">
                  Graphs
                </ListItem>
              </List>
            </Box>
          </motion.div>
          <ButtonAdvancePart/>

          <motion.div variants={textVariants}>
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="cyan">
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Other Topics</u>
              </Heading>
              <List styleType="none" pl={0} textAlign="center">
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Hashmaps
                </ListItem>
                {/* Add more Other Topics here */}
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Tries
                </ListItem>
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Bit Manipulation
                </ListItem>
                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Greedy
                </ListItem>

                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Circular Queues
                </ListItem>

                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Deques - Hot Topic
                </ListItem>

                <ListItem
                  py={2}
                  color="black"
                  fontFamily="'Josefin Sans', sans-serif"
                >
                  Doubly And Circular LL
                </ListItem>
              </List>
            </Box>
          </motion.div>

            <ButtonOtherPart/>
          
        </motion.div>
      </Box>
    </Layout>
  );
};

export default DataStructure;
