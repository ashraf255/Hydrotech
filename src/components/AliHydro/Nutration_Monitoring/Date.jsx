import React, { useEffect, useState } from "react";

const Userdate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to get the current date in the format you want
    const getCurrentDate = () => {
      const today = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return today.toLocaleDateString("en-US", options);
    };

    // Set the current date when the component mounts
    setCurrentDate(getCurrentDate());
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return <p className="text-sm dark:text-gray-400">{currentDate}</p>;
};

export default Userdate;
