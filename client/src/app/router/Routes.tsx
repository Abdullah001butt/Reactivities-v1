import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../counter/Counter";
import TestErrors from "../errors/TestErrors";
import ServerError from "../errors/ServerError";

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
            { path: "activities/:id", element: <ActivityDetailPage /> },
            { path: "createActivity", element: <ActivityForm key='create'/> },
            { path: "manage/:id", element: <ActivityForm /> },
            { path: "counter", element: <Counter /> },
            { path: "errors", element: <TestErrors /> },
            { path: "server-error", element: <ServerError /> },
            { path: "*", element: <ErrorPage /> }
        ]
    }
])
