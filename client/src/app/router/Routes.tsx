import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";

// Error component for 404 handling
const ErrorPage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! Something went wrong</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ color: '#1976d2', textDecoration: 'none' }}>Go back to Home</a>
    </div>
  );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "activities", element: <ActivityDashboard /> },
            { path: "activities/:id", element: <ActivityDetail /> },
            { path: "createActivity", element: <ActivityForm key='create'/> },
            { path: "manage/:id", element: <ActivityForm /> },
            { path: "*", element: <ErrorPage /> }
        ]
    }
])
