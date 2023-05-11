import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import axios from "axios";

import "../css/FeaturedResources.css";
import DBMS from '../assets/DBMS.jpg';
import DSA from '../assets/DSA.jpg'
import OOPS from '../assets/OOPS.jpg'


const FeaturedResources = () => {
  // const [resources, setResources] = useState([]);
  const resources = [
    {
      "id": "1",
      "title": "Click Here",
      "description": "Data Structures & Algorithms",
      "image": DSA,
      "url": "https://resource-finder-8c366.web.app/resources/dsa"
    },
    {
      "id": "2",
      "title": "Click Here",
      "description": "Database Management System",
      "image": DBMS,
      "url": "https://resource-finder-8c366.web.app/resources/dbms"
    },
    {
      "id": "3",
      "title": "Click Here",
      "description": "object oriented programming",
      "image": OOPS,
      "url": "https://resource-finder-8c366.web.app/resources/oops"
    }
  ]

  return (
    <section>
      <Heading fontFamily="'Lobster', cursive">
        <u>Featured Resources</u>
      </Heading>

      <div className="resource-list">
        {resources.map((resource) => (
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
    </section>
  );
};

export default FeaturedResources;
