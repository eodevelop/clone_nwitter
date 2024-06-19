import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";

const router = createBrowserRouter(
  [
    {
      path: "/", // "/"" 경로가 맞을때 Layout 컴포넌트를 렌더링하고, Outlet을 통해 하위 라우트를 렌더링한다.
      element: <Layout />, 
      children: [ // Layout의 Outlet을 통해 렌더링되는 하위 라우트를 정의한다.
        {
          path: "",
          element: <Home />, 
        },
        {
          path: "profile",
          element: <Profile />,
        }
      ]
    }
  ]
);

function App() {
  return <>
    <RouterProvider router={router} />
  </>;
}

export default App
