import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const HamburgerWrapper = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Line = styled(motion.div)`
  width: ${(props) => (props.large ? "25px" : "18px")};
  height: 4px;
  background: #7b7b7b;
  //border-radius: 4px;
`;

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
      <Line
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 10 : 0,
          width: isOpen ? "25px" : "18px",
        }}
        transition={{ duration: 0.3 }}
      />
      <Line
        large
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <Line
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -10 : 0,
          width: isOpen ? "25px" : "18px",
        }}
        transition={{ duration: 0.3 }}
      />
    </HamburgerWrapper>
  );
};

export default Hamburger;
