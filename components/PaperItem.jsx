import React from 'react';
// 根据论文标题分别返回对应的图片路径，方便后续单独修改
const getPaperImageSrc = (title) => {
  switch (title) {
    case "LLM-Powered Benchmark Factory: Reliable, Generic, and Efficient":
      return "benchmaker.jpg";
    case "论文标题2":
      return "benchmaker.jpg";
    case "论文标题3":
      return "benchmaker.jpg";
    // 可根据需要继续添加其他论文的映射
    default:
      return "benchmaker.jpg";
  }
};

const PaperItem = ({ paper }) => {
  return (
    <div className="paper-item" style={{ height: "800px" }}>
      <img 
        src={getPaperImageSrc(paper.title)} 
        alt={paper.title} 
        style={{ height: "100%", width: "auto", objectFit: "cover" }} 
      />
    </div>
  );
};

export default PaperItem; 