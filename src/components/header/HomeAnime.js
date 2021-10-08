import React from 'react'
import styled from 'styled-components';




function HomeAnime() {
 let blocks=[];
 


 
    const addBlocks=()=>{
      for(var i=0;i<400;i++){
        blocks .push(<div className="blocks" style={{animationDelay:`${i*0.05}s`}}></div>)
      }
        
  }

 addBlocks();

   
 


    return (
        <Section>       
        <div className="banner" >  
        {blocks.map((e)=>{
          
            return e
        })}     
            
        </div>
          
        </Section>
    )
            
}

export default HomeAnime

const Section=styled.div`
  width:100vw;
  height:100vh;
  position:absolute;

 .banner{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    display:flex;
    overflow:hiden; 
    flex-wrap: wrap;
    
 }
 .banner .blocks{
    
     position:relative;
     display:flex;
     width:5vw;
     height:5.5vh;
     animation:animate 0.75s ease-in-out forwards;
     
 }
 .banner .blocks :nth-child(event){
    animation:animate 1s ease-in-out forwards; 
 }
 @keyframes animate {
     0%{
         opacity:0;
         transform:scale(0) translateY(1000px);
     }
     50%{
        opacity:1;
        background-image:url("/images/background/jab14.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat:no-repeat;
    }
    100%{
        opacity:1;
        transform:scale(1) translateY(0px);
        background-image:url("/images/background/jab14.jpg");
        background-size: cover;
       background-position: center;
        background-attachment: fixed;
        background-repeat:no-repeat;
    }
 }

`
