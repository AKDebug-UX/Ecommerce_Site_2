import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";


export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "10px 10px",
  background: Colors.light_gray,
 
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0px",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 420,
  padding: "30px",
  position: "absolute",
  right: 76,
  top: 685,

[theme.breakpoints.down("sm")]: {
  right: 140,
  top: 400,
},
}));

export const BannerContent1 = styled(Box)(({theme}) => ({
  position: "absolute",
  width: "600px",
  height: "250px",
  left: 1200,
  top: 255,

[theme.breakpoints.down("sm")]: {
  display : "none" 
},
}));

export const BannerContent2 = styled(Box)(({theme}) => ({
  position: "absolute",
  width: "600px",
  height: "250px",
  left: 1200,
    top: 490,

[theme.breakpoints.down("sm")]: {
  // position: "relative",
  // padding: "10px 0px",
  // width: "400px",
  // height: "100px",
  // left: 0,
  // right:0,
  // top: 50,
  display:"none",
},
}));

export const BannerImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "900px",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    width: "700px",
    height: "200px",
    right: 500,
  },
  [theme.breakpoints.down("sm")]: {
    width: "450px",
    height: "300px",
  },
}));




export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  
  [theme.breakpoints.down('sm')]: {
    display : "none" ,   
  }
}));



export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  color: Colors.white,
  width: "200px",
    height: "50",
  [theme.breakpoints.down("sm")]: {
   
    width: "200px",
    height: "50px",
  },
}));

export const SimpleImageSlider = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "50px 0px 40px 0px",
  },
  width: "200px",
  height: "200px",
  display: "flex",
  overflow: "hidden",
  background: Colors.secondary,
  right: 0,
  top: 700,
  [theme.breakpoints.down("sm")]: {
    width: "550px",
    height: "300px",
    right: 0,
  top: 700,
  },
}));

export const PromotionsContain3 = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "50px 0px 40px 0px",
  },
  width: "200px",
  height: "200px",
  display: "flex",
  overflow: "hidden",
  background: Colors.secondary,
  right: 0,
  top: 700,
  [theme.breakpoints.down("sm")]: {
    display : "none" ,
  },
}));

export const PromotionsContain4 = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "50px 0px 40px 0px",
  },
  width: "200px",
  height: "200px",
  display: "flex",
  overflow: "hidden",
  background: Colors.secondary,
  right: 0,
  top: 700,
  [theme.breakpoints.down("sm")]: {
    display : "none" ,
  },
}));


export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
}));