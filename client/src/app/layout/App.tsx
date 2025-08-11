import { Box, Container, CssBaseline } from "@mui/material"
import Navbar from "./Navbar"
import { Outlet, ScrollRestoration, useLocation } from "react-router"
import HomePage from "../../features/home/HomePage"

const App = () => {
  const location = useLocation()
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <ScrollRestoration />
      {location.pathname === "/" ? <HomePage /> : (
        <>
          <CssBaseline />
          <Navbar />
          <Container maxWidth="xl" sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}

    </Box>
  )
}

export default App