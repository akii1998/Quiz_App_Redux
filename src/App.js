import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container, Typography } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Settings />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/score",
    element: <FinalScreen />,
  },
]);

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box textAlign={"center"} mt={5}>
        <Typography variant="h2" fontWeight={"bold"}>Quiz App</Typography>
          <RouterProvider router={router} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
