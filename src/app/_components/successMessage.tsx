"use client";

import React from "react";
import { motion } from "framer-motion";

interface SuccessMessageProps {
  show: boolean;
}

function SuccessMessage({ show }: SuccessMessageProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-lg z-50"
    >
      🎉 Topics successfully applied!
    </motion.div>
  );
}

export default SuccessMessage;
