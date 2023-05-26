import React from 'react'
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

import Aptitude from '../assets/aptitude.jpg';
import WebDev from '../assets/WebDev.png';
import "../css/FeaturedResources.css";

const Trending = () => {

    const resources = [
        {
          "id": "1",
          "title": "Click Here",
          "description": "Test Youraptitude Skills",
          "image": Aptitude,
          "url": "https://resource-finder-8c366.web.app/trending/aptitude"
        },
        {
          "id": "2",
          "title": "Click Here",
          "description": "Top Web Dev Projects For Placements",
          "image": WebDev,
          "url": "https://resource-finder-8c366.web.app/trending/webdevprojects"
        }
      ]

  return (
    <section>
    <Heading fontFamily="'Lobster', cursive">
      <u>Trending Topics</u>
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
  )
}

export default Trending