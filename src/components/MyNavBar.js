import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Menu,
    MenuItem,
    Button,
  } from "@mui/material";
  import {Link} from 'react-router-dom'
import MyNavBarDropdown from "./MyNavBarDropdown";

function MyNavBar(props) {
    return (
        <AppBar position="relative">
        <Container maxWidth="lg">
          <Toolbar disableGutters="true">
          <Box display='flex' flexGrow={1}>
            <Typography variant="h6" nowrap="false" sx={{ mr: 2 }}>
              PaintED
            </Typography>
            <MenuItem component={Link} to="/" >Home</MenuItem>
            {props.pages.map((page) => (
                      <MenuItem component={Link} to={"/" +page} >{page}</MenuItem>
                  ))}
            </Box>

                <MyNavBarDropdown></MyNavBarDropdown>
                
          </Toolbar>
        </Container>
      </AppBar>
    )
}
export default MyNavBar;