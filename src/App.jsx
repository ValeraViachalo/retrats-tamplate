import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import { ScrollProvider } from "./helpers/scrollProvider";
import { Header } from "@C/Header/Header";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import { Loader } from "./components/Loader/Loader";
import classNames from "classnames";

const queryC = new QueryClient();

function App() {
  const [loaderFinished, setLoaderFinished] = useState(true); // TODO: CHANGE IT TO FALSE

  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  const location = useLocation();

  return (
    <QueryClientProvider client={queryC}>
      <main
        className={classNames("main", {
          "main--loading": !loaderFinished,
        })}
      >
        <ScrollProvider>
          {!loaderFinished && <Loader setLoaderFinished={setLoaderFinished} />}
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </ScrollProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
