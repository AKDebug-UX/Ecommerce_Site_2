import { ListItemIcon } from "@mui/material";
import { AppbarContainer, AppbarHeader} from "../../styles/appbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@mui/system";


export default function AppbarDesktop({ matches }) {
  const theme = useTheme();
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Upraise</AppbarHeader>
        
        <TextField 
          id="outlined-basic"
          variant="outlined"
          style={{ width : 900 }}
          label="Search">
        
        </TextField>
        <button style={{ width : 50, height : 55 }}><SearchIcon/></button>
          <ListItemIcon>
          </ListItemIcon>
        
         
       <Actions matches={matches} />  
    </AppbarContainer>
  
  );
                          
}
