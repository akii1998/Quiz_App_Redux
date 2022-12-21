import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Settings/>,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path:'/score',
    element:<FinalScreen/>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
