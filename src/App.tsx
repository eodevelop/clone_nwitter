import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screent";

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
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    }
  ]
);


const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  }
`;

function App() {
  // 사용자에게 로딩 화면을 보여주기 위한 로직
  // 파이어베이스가 로그인 여부와 어떤 유저를 판단하는 동안 진행
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    // wait for firebase
    setLoading(false)
  }
  useEffect(() => {
    init();
  }, []);

  return (
  <>
    <GlobalStyle />
    {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
  </>
  );
}

export default App