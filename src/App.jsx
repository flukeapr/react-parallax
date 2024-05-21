import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParallaxBanner
        style={{ aspectRatio: "2 / 1" }}
        layers={[
          {
            image: "hill1.png",
            speed:-25
          },
          {
            image: "hill2.png",
          
          },
          {
            image: "hill3.png",
           
          },
          {
            image: "hill4.png",
            translateX: [50, -50],
          },
          {
            image: "hill5.png",
            translateX: [-50, 50],
          },
          {
            image: "tree.png",
            
          },
          {
            speed:-50,
            children:(<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}><h1 style={{color:'white',fontSize:68,fontWeight:'bold'}}>PARALLAX SCROLL</h1></div>
          )
          },
          {
            image: "leaf.png",

            easing: "easeInQuad",
            translateX: [-30, 100],
          },
          {
            image: "plant.png",
          }
        ]}
      >

      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1",backgroundColor:'#38A695' }}
        layers={[{
          translateX:[-50,75],
          children:(<div style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'flex'}}><h1 style={{fontSize:58,color:'white'}}>What Is Parallax</h1></div>),
        },{
          translateX:[50,-50],
          children:(<div style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'flex',marginTop:150}}><p style={{fontSize:24,color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore rem repellendus iste corrupti, repellat iusto facere vel vero dignissimos modi dolorum ratione repudiandae accusamus veritatis quasi est, beatae sunt!<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos placeat debitis neque culpa harum suscipit nisi laborum esse, molestiae odit optio fugiat corporis ea ut voluptatem porro, facilis ex!<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae excepturi rem nobis alias placeat aut sequi harum quae, vel hic pariatur repellendus officia quaerat! Voluptatem dolores ea ducimus ipsam?</p></div>)
        }]}
      >
       
      </ParallaxBanner>
    </>
  );
}

export default App;
