import React from 'react'
import styled from 'styled-components'

function About() {
   return (


      <Aboutcontainer>
          <p>NOS CATEGORIES</p>
         <div className="about">
           
           

            <div className="about-item ltr-effect" >
               <a className="img" >
                  <img src="/images/team/img2.jpg " width="100%" height='100%' />
               </a>
            </div>


            <div id="img2" className="about-item ltr-effect" >
               <a className="img" >
                  <img src="/images/team/img3.jpg " width="100%" height='100%' />
               </a>
            </div>

            <div id="img3" className="about-item ltr-effect">
               <a className="img" >
                  <img src="/images/team/img4.jpg " width="100%" height='100%' />
               </a>
            </div>

            <div id="img4" className="about-item ltr-effect">
               <a className="img" >
                  <img src="/images/team/img5.jpg " width="100%" height='100%' />
               </a>


            </div>
            <div id="img5" className="about-item ltr-effect" >
               <a className="img" >
                  <img src="/images/team/img6.jpg " width="100%" height='100%' />
               </a>


            </div>
            <div id="img6" className="about-item ltr-effect">
               <a className="img" >
                  <img src="/images/team/img1.jpg " width="100%" height='100%' />
               </a>


            </div>

         </div>





      </Aboutcontainer>




   )
}

export default About

const Aboutcontainer = styled.div`
margin: 183px;
width:100%;
height:100%;
font-size:60px;

  p{
     width:100%;
     height:30px;
     display:flex;
     justify-content: center;
     align-content: center;
}
  }

.about{
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-content: space-around;
   justify-content: space-evenly;
}
.about-item{
  

   width: 30%;
   height: 30%;
   border: 3px solid green;
   overflow: hidden;
   background-size: cover;
   
}
.ltr-effect{
   position: relative;
   
}

.ltr-effect:after{
   position: absolute; 
   content: "";
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-color: rgb(39, 38, 38); 
   transition: height 2s ;  
   z-index: 1;
   opacity: .3;
}
.ltr-effect:hover:after{
   height: 0;
   
}
.Apropos{
   color: rgb(245, 238, 238);
   display: block;
   width: 80%;
   height: 80px;
   display: block;
   text-align: center;
   margin:  20px auto;
   padding: auto;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
   font-size: 20px;
   line-height: 20px;
   overflow: hidden;
}
.img{
cursor: pointer;

}



`

