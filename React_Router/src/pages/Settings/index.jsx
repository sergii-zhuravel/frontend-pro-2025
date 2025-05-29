import React from "react";
import { useParams } from "react-router";

export default function Settings() {
  const { id } = useParams();

  useEffect(() => {
    fetch("myserverdata/user/{id}");
  });

  return <div>Settings, UserID: {id}</div>;
}
