import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
  Box,
  Menu,
} from "@mui/material";
import MyNavBar from "./MyNavBar";

function Layout(props) {
    const pages = ['Tutorial']
    const dropdown = ['Planner','Worker']

  return (
    <>
      <CssBaseline />
      <MyNavBar pages={pages} dropdown={dropdown}></MyNavBar>
      <main>
       
      <Container maxWidth="sm">{props.children} </Container>
      </main>

    </>
  );
}
export default Layout;
