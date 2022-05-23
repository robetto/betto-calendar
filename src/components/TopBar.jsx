import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cambiaInterfaccia } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

import { motion, AnimatePresence } from "framer-motion";

const boxAnimation = {
  initial: { y: "50%", opacity: 0, scale: 0.5 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: {
    y: "50%",
    opacity: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
  transition: { duration: 0.2, ease: "easeOut" },
};

const TopBar = () => {
  const interfaccia = useSelector((state) => state.user.interfaccia);

  const isVisible = useSelector((state) => state.user.modalVisible); 

  const dispatch = useDispatch();

  return (
    <div className="top-bar">
      <AnimatePresence>
        {isVisible && (
          <motion.div key={uuidv4()} className="merda" {...boxAnimation}>
            as
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
          <motion.div key={uuidv4()} className="col" {...boxAnimation}>
            interfaccia: {interfaccia}
          </motion.div>
      </AnimatePresence>

      <div className="col">
        <button onClick={() => dispatch(cambiaInterfaccia("mese"))}>
          mese
        </button>
      </div>
      <div className="col">
        <button onClick={() => dispatch(cambiaInterfaccia("settimana"))}>
          settimana
        </button>
      </div>
    </div>
  );
};

export default TopBar;
