import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LinkedList } from "./components/LinkedList/LinkedList";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "linkedlist",
        element: <LinkedList />,
      },
    ],
  },
]);
