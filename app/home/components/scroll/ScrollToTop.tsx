"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    scrollTo({ y: 0 });
  };
  const handleScroll = () => {
    if (scroll.y > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null; // Render nothing if button should not be visible
  }

  return (
    <Button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999, // Ensures it's above other content
      }}
    >
      <IconArrowUp size={24} color="#5E6D77" stroke={1.5} />
    </Button>
  );
};
