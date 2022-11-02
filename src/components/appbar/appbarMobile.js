import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import TextField from "@mui/material/TextField";


export default function AppbarMobile({ matches }) {
  const { setDrawerOpen} = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Upraise
      </AppbarHeader>
      
      <Actions matches={matches} />
      <br/>
      <SearchIcon
          id="outlined-basic"
          variant="outlined"
          label="Search"
        />
        
    </AppbarContainer>
    
  );
}
