"use client";

import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
}
