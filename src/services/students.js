import axios from "axios";
import { useState } from "react";

export function useGetStudents() {
  const [students, setStudents] = useState(undefined);

  function getStudents(code) {
    axios.get(`${process.env.REACT_APP_API_URL}/studentsList/${code}`)
      .then(res => setStudents(res.data))
      .catch(err => alert(err.response.data.message))
  }

  return { students, getStudents };
}

export function useGetStudentByid() {
  const [student, setStudent] = useState(undefined);

  function getStudent(id) {
    axios.get(`${process.env.REACT_APP_API_URL}/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => alert(err.response.data.message))
  }

  return { student, getStudent };
}
