<template>
  <div style="background:#000">
    <div class="cloudPos">
       <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    </div>
    
  </div>
</template>

 <style type="text/css">
        @-webkit-keyframes STAR-MOVE {
            from {
                background-position: 0% 0%
            }
            to {
                background-position: 600% 0%
            }
        }
        
        @keyframes STAR-MOVE {
            from {
                background-position: 0% 0%
            }
            to {
                background-position: 600% 0%
            }
        }
        
         .wall {
             /* position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0; 
             float: left; */
             width: 100%;
            height: 100%; 
        } 
        
        div#background {
            background: black url('../../assets/img/background.png') repeat-x 5% 0%;
            background-size: cover;
            -webkit-animation: STAR-MOVE 200s linear infinite;
            -moz-animation: STAR-MOVE 200s linear infinite;
            -ms-animation: STAR-MOVE 200s linear infinite;
            animation: STAR-MOVE 200s linear infinite;
            
        }
        
        div#midground {
            background: url('../../assets/img/midground.png')repeat 20% 0%;
            z-index: 1;
            -webkit-animation: STAR-MOVE 100s linear infinite;
            -moz-animation: STAR-MOVE 100s linear infinite;
            -ms-animation: STAR-MOVE 100s linear infinite;
            animation: STAR-MOVE 100s linear infinite;
            position: absolute;
            top: 0px;
              background-size: contain;
           
        }
        
        div#foreground {
            background: url('../../assets/img/foreground.png')repeat 35% 0%;
            z-index: 2;
            -webkit-animation: STAR-MOVE 50s linear infinite;
            -moz-animation: STAR-MOVE 50s linear infinite;
            -ms-animation: STAR-MOVE 50s linear infinite;
            animation: STAR-MOVE 50s linear infinite;
            position: absolute;
            top: 0px;
              background-size: contain;
           
        }
        .cloudPos{
          width: 80%;
          height: 500px;
          margin: auto;
          position: relative;
          background: crimson;
        }
    </style>
