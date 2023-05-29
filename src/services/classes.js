import axios from "axios";
import { useState } from "react";

export function useGetClasses() {
  const [classes, setClasses] = useState(undefined);

  function getClasses() {
    axios.get(`${process.env.REACT_APP_API_URL}/classes`)
      .then(res => setClasses(res.data))
      .catch(err => console.log(err.response.data))
  }

  return { classes, getClasses };
}
