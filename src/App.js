import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MainApp from "./components/MainApp";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      children: [
        {
          path: "/",
          element: <Body />,
          children: [
            {
              path: "/",
              element: <MainContainer />,
            },
            {
              path: "/watch",
              element: <WatchPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
