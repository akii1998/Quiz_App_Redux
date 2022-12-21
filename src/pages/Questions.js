import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useAxios from "../Hooks/useAxios";

const Questions = () => {

   const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
   }=useSelector(state=>state)
   console.log(amount_of_question)



    const apiUrl=`/api.php?amount=10`
    const  {response ,error ,loading} =useAxios({url:apiUrl})
    console.log(response)
  return (
    <Box>
      <Typography variant="h4">Questions 1</Typography>
      <Typography mt={5}>This is a question?</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 3</Button>
      </Box>
      <Box mt={5}>
           Score:4/6
      </Box>
    </Box>
  );
};

export default Questions;
