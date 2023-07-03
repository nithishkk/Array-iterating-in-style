import React, { useState } from "react";
const chipObject = {
  Pending: "#adaaa0",
  Closed: "#775ca8",
  Approval: "#6db5c1",
  Review: "#eccb66",
  Active: "#6db5c1",
  "In-Progress": "#775ca8",
  Open: "#6db5c1",
  Completed: "#6db5c1"
};

const cells = [
  { value: "Pending" },
  { value: "Closed" },
  { value: "Approval" },
  { value: "Review" },
  { value: "Active" },
  { value: "In-Progress" },
  { value: "Open" },
  { value: "Completed" }
];
export default function App() {
  const [data, setData] = useState(false);

  const handleClick = () => {
    // console.log(nithish[0].name); // Accessing the name property of the first element in the nithish array
    setData(true);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      

{/* {cells?.map((item) => {
  return (
    <p style={{ backgroundColor: chipObject[item.value] ?  chipObject[item.value]:"Approval" }}>
     <h4> Start editing to see some magic happen </h4>
    </p>
  );
})} */}



{/* {cells?.map((item) => {
  return (
    <p style={{ backgroundColor: chipObject[item.value] ? chipObject[item.value] : "Approval" }}>
      <h4>
        {item.value === "Pending" && "Content for Pending"}
        {item.value === "Closed" && "Content for Closed"}
        {item.value === "Approval" && "Content for Approval"}
        {item.value === "Review" && "Content for Review"}
        {item.value === "Active" && "Content for Active"}
        {item.value === "In-Progress" && "Content for In-Progress"}
        {item.value === "Open" && "Content for Open"}
        {item.value === "Completed" && "Content for Completed"}
      </h4>
    </p>
  );
})} */}

{cells?.map((item) => (
  <p style={{ backgroundColor: chipObject[item.value] || "Approval" }}>
    <h4>
      {item.value === "Pending" && "Content for Pending"}
      {item.value === "Closed" && "Content for Closed"}
      {item.value === "Approval" && "Content for Approval"}
      {item.value === "Review" && "Content for Review"}
      {item.value === "Active" && "Content for Active"}
      {item.value === "In-Progress" && "Content for In-Progress"}
      {item.value === "Open" && "Content for Open"}
      {item.value === "Completed" && "Content for Completed"}
    </h4>
  </p>
))}

      <button onClick={handleClick} style={{backgroundColor: data ?"red":"yellow"  }}>{data ? "logging" : "sonu"}</button>
    </div>
  );
}
