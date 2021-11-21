export const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
