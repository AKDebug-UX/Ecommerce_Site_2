import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, styled, } from "@mui/material";

import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText><h2>Home</h2></ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <h2>OUR CATEGORIES</h2>
          </ListItemButton>
            <h4 style={{ margin : 15 }}><b>Supermarket</b></h4>
            <h4 style={{ margin : 15 }}><b>Health & Beauty</b></h4>
            <h4 style={{ margin : 15 }}><b>Home & Office</b></h4>
            <h4 style={{ margin : 15 }}><b>Phone & Tablets</b></h4>
            <h4 style={{ margin : 15 }}><b>Computing</b></h4>
            <h4 style={{ margin : 15 }}><b>Electronics</b></h4>
            <h4 style={{ margin : 15 }}><b>Gaming</b></h4>
            <h4 style={{ margin : 15 }}><b>Sporting</b></h4>
            <h4 style={{ margin : 15 }}><b>Automobile</b></h4>
                          
          <MiddleDivider />
          <ListItemButton>
            <h2>OUR SERVICES</h2>
          </ListItemButton>
            <h4 style={{ margin : 15 }}><b>Upraise Prime</b></h4>
            <h4 style={{ margin : 15 }}><b>Pay Airtime & Bills</b></h4>
            <h4 style={{ margin : 15 }}><b></b>Pay Electricity Bills</h4>
            <h4 style={{ margin : 15 }}><b>Pay Internet Bills</b></h4>
            <h4 style={{ margin : 15 }}><b>Buy Data</b></h4>
            <h4 style={{ margin : 15 }}><b>Upraise Food</b></h4>
    
          <MiddleDivider />
          <ListItemButton>
            <ListItemText><h2>About Us</h2></ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText><h2>Contact Us</h2></ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}
