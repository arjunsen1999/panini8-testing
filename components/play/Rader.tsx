"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Gauge from "@/components/play/Gauge";

const Home: React.FC = () => {
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    // Fetch the marks from the API
    const fetchMarks = async () => {
      try {
        const response = await axios.get("/api/marks"); // Replace with your actual API endpoint
        setMarks(response.data.marks);
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    };

    fetchMarks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Gauge value={marks} />
      <div className="mt-2">{marks} marks</div>
    </div>
  );
};

export default Home;
