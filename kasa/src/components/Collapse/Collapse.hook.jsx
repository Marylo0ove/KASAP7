import { useState } from "react";

export const useCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    ...props,
    isOpen,
    setIsOpen,
  };
};
