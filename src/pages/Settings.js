import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../Hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  // console.log(response);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color={"red"}>
        Some went wrong
      </Typography>
    );
  }
  const diffcultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Mulitple Choose" },
    { id: "boolean", name: "True/false" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={diffcultyOptions} label="Difficulty" />
      <SelectField  options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
