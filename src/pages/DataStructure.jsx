import React from "react";
import { Heading, List, ListItem, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import ButtonBasicPart from "../components/ButtonBasicPart";
import ButtonAdvancePart from "../components/ButtonAdvancePart";
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
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="#51E1ED">
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
                <ListItem py={2} color="black">
                  Recursion & Backtracking
                </ListItem>

                <ListItem py={2} color="black">
                  Sorting Algorithms
                </ListItem>

                <ListItem py={2} color="black">
                  Linked Lists
                </ListItem>
                <ListItem py={2} color="black">
                  Stacks (LIFO)
                </ListItem>
                <ListItem py={2} color="black">
                  Queues (FIFO)
                </ListItem>
              </List>
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Resources</u>
              </Heading>
              <ButtonBasicPart />
            </Box>
          </motion.div>

          <motion.div variants={textVariants}>
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="#E5D68A">
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
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Resources</u>
              </Heading>
              <ButtonAdvancePart />
            </Box>
          </motion.div>

          <motion.div variants={textVariants}>
            <Box borderWidth={1} borderRadius="md" p={4} mb={4} bg="#6AC47E">
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
                <ListItem py={2} color="black">
                  Hashmaps
                </ListItem>
                {/* Add more Other Topics here */}
                <ListItem py={2} color="black">
                  Tries
                </ListItem>
                <ListItem py={2} color="black">
                  Bit Manipulation
                </ListItem>
                <ListItem py={2} color="black">
                  Greedy
                </ListItem>

                <ListItem py={2} color="black">
                  Circular Queues
                </ListItem>

                <ListItem py={2} color="black">
                  Deques
                </ListItem>

                <ListItem py={2} color="black">
                  Doubly And Circular LL
                </ListItem>
              </List>
              <Heading
                as="h2"
                size="lg"
                mb={2}
                color="#4A5568"
                fontFamily="'Lobster', cursive"
              >
                <u>Resources</u>
              </Heading>
              <ButtonOtherPart />
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </Layout>
  );
};

export default DataStructure;
