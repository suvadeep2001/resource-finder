import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Heading, Container, Badge, Input, Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import API_URL from "../dbms";

export default function DbmsResources() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setResources(response.data);
      } catch (error) {
        console.log("Error fetching resources:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredResources = resources.filter((resource) =>
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(
    indexOfFirstResource,
    indexOfLastResource
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Heading fontFamily="'Lobster', cursive">
        <u>Prepare DBMS For Interviews</u>
      </Heading>
      <Input
        type="text"
        placeholder="Search your resources"
        value={searchTerm}
        onChange={handleSearch}
        mt={4}
        mb={8}
      />
      <div className="resource-list">
        {currentResources.map((resource) => (
          <motion.div
          key={resource.id}
          className="resource"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
            <a href={resource.url} target="__blank">
              <img src={resource.image} alt={resource.title} />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {resource.title}
              </motion.button>
            </a>
            <motion.p>{resource.description}</motion.p>
            </motion.div>
        ))}
      </div>
      <Box mt={4} display="flex" justifyContent="center">
        {Array.from(
          { length: Math.ceil(filteredResources.length / resourcesPerPage) },
          (_, index) => (
            <Button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </Button>
          )
        )}
      </Box>
    </Layout>
  );
}
