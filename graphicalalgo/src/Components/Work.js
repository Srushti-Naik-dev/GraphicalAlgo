import React from "react";
import Select from "../Assets/select.png";
import Analyze from "../Assets/analyze1.png";
import Visualize from "../Assets/chart1.png";

const Work = () => {
  const workInfoData = [
    {
      image: Select,
      title: "Select an Algorithm",
      text: " Begin by selecting from a range of popular sorting algorithms and searching algorithms. Each algorithm offers unique insights into sorting methods and searching meathods used in computer science.",
    },
    {
      image: Analyze,
      title: "Analyze Algorithm",
      text: " Dive into selected algorithm's mechanics. Understand key concepts like time, space complexity, and strategies used in sorting data. Ensure the algorithm produces the correct output for all possible inputs.",
    },
    {
      image: Visualize,
      title: "Visualize It",
      text: "Experience algorithm through dynamic visualizations. GraphiAlgo transforms sorting processes into interactive visual representations, allowing follow each comparison, swap, and partition in real-time. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        GraphicalAlgo offers a comprehensive and interactive way to understand and explore algorithms.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
