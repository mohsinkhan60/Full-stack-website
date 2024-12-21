import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Button } from "./components/ui/button";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onbording from "./pages/Onbording";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onbording",
        element: <Onbording />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/jobs/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJob />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
