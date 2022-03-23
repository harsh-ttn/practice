import React from "react";
import propTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

Title.propTypes = {
  title: propTypes.string,
};

Title.defaultProps = {
  title: "This is our title",
};

export default Title;
