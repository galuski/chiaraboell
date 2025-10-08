import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ToastAlert({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // נעלם אחרי 4 שניות
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={`toast-alert ${type}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="toast-message">{message}</div>
        <div className="toast-progress"></div>
        <button className="toast-close" onClick={onClose}>
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}