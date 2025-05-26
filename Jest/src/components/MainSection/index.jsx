import React from "react";
import { exponentCalculation } from "../../utils/calculations";

export default function MainSection() {
  const result = exponentCalculation();

  return <div>MainSection2: {result}</div>;
}
