import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Handles state logic for hiding the scroll to top button
 */
export const useScrollToTop = () => {
  const [showButton, setShowButton] = React.useState(false);

  const showScrollToTopButton = () => {
    if (window.scrollY > 200) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", showScrollToTopButton);

    return () => {
      window.removeEventListener("scroll", showScrollToTopButton);
    };
  }, []);

  return { showButton, scrollToTop };
};
