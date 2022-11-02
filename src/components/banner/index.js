import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Slider from "../slider/Slider"
import Slider1 from "../slider/Slider1"
import {
  BannerContainer,
  BannerContent,
  BannerContent1,
  BannerContent2,
  BannerDescription,
  BannerImg, BannerImg2, BannerImg3,
  BannerShopButton,
  BannerTitle,
  SimpleImageSlider,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const images = [
  //   { url : "images/products/bag_04.jpg"},
  //   { url : "images/products/bag_05.jpg"},
  //   { url : "images/products/bag_03.jpg"},
  // ];


  return (
    <BannerContainer >
      <BannerTitle>
         <h2>OUR CATEGORIES</h2>
          
            <h4 style={{ margin : 15 }}><b>Supermarket</b></h4>
            <h4 style={{ margin : 15 }}><b>Health & Beauty</b></h4>
            <h4 style={{ margin : 15 }}><b>Home & Office</b></h4>
            <h4 style={{ margin : 15 }}><b>Phone & Tablets</b></h4>
            <h4 style={{ margin : 15 }}><b>Computing</b></h4>
            <h4 style={{ margin : 15 }}><b>Electronics</b></h4>
            <h4 style={{ margin : 15 }}><b>Gaming</b></h4>
            <h4 style={{ margin : 15 }}><b>Sporting</b></h4>
            <h4 style={{ margin : 15 }}><b>Automobile</b></h4>
        </BannerTitle>
        <BannerImg src="/images/banner/banner.png"/>
          
        <BannerContent1>
            <Slider/>
        </BannerContent1>
        <BannerContent2>
            <Slider1/>
        </BannerContent2>
        
      <BannerContent>
        <BannerShopButton color="primary">Shop Now</BannerShopButton>
       
      </BannerContent>
      
    </BannerContainer>
  );
}
