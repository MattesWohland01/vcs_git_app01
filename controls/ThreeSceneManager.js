
jQuery.sap.registerModulePath('thirdparty/three', 'libs/three');
jQuery.sap.registerModulePath('thirdparty/ColladaLoader', 'libs/ColladaLoader');
// jQuery.sap.registerModulePath('thirdparty/TDSLoader', 'libs/TDSLoader');
// OrbitControls.js from https://gist.githubusercontent.com/jonathanlurie/bcedf6153a33ec64ab0f7c45e4e6fb70/raw/e559cc482f1d6dbc9eca1da789bbe40d1d0929e1/OrbitControls.js
jQuery.sap.registerModulePath('thirdparty/OrbitControls', 'libs/OrbitControls');
//jQuery.sap.registerModulePath('thirdparty/Interaction', 'libs/three.interaction');
// jQuery.sap.registerModulePath('thirdparty/InteractionMap', 'libs/three.interaction.map');

sap.ui.define([
                'sap/ui/core/Control',
                'sap/ui/core/HTML',
                "sap/f/Card",                
                'thirdparty/three',
                'thirdparty/ColladaLoader',                
                'thirdparty/OrbitControls'
//                ,
//                'thirdparty/TDSLoader'                                
//                'thirdparty/Interaction',                                
//                'thirdparty/InteractionMap'                                                
            ]
            , 
            function(
                        Control, 
                        HTML
                )
{
    'use strict';

    return Control.extend('wohland.de.ThreeJS_SceneManager.controls.ThreeSceneManager.js',
    {
        metadata: 
        {
            properties:
            {
                title:{
                    type: "string",
                    defaultValue: "Persons"
                },
                control:{
                    type: "string",
                    defaultValue: "Control"
                },
            },
            aggregations : {
                _HTMLSlidertemp01         : {type : "sap.ui.core.HTML", multiple : false}                                             
 // Obj Pos               
                 ,
                _HTMLControlHeaderObjPos   : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjPosX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjPosX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLSliderObjPosX         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjPosY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjPosY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLSliderObjPosY         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjPosZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjPosZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLSliderObjPosZ         : {type : "sap.ui.core.HTML", multiple : false}                                             

// Obj Scale      
                ,
                _HTMLControlHeaderObjScale   : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLLabelObjScaleX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjScaleX         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderObjScaleX         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjScaleY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjScaleY         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderObjScaleY         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjScaleZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjScaleZ         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderObjScaleZ         : {type : "sap.ui.core.HTML", multiple : false}           
// Obj Props                                                  
                ,
                _HTMLControlHeaderObjProps   : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,               
                _HTMLLabelObjRotationX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjRotationX         : {type : "sap.ui.core.HTML", multiple : false}                  

                ,
                _HTMLSliderObjRotationX         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelObjRotationY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjRotationY         : {type : "sap.ui.core.HTML", multiple : false}                  

                ,
                _HTMLSliderObjRotationY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLLabelObjRotationZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputObjRotationZ         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderObjRotationZ               : {type : "sap.ui.core.HTML", multiple : false}      

                ,
                _HTMLControlHeaderCameraPos   : {type : "sap.ui.core.HTML", multiple : false}          

                ,
                _HTMLLabelCameraPosX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraPosX         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraPosX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLLabelCameraPosY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraPosY         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraPosY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,

                _HTMLLabelCameraPosZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraPosZ         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraPosZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
// Camera LookAt
                ,
                _HTMLControlHeaderCameraLookAt   : {type : "sap.ui.core.HTML", multiple : false}    
                
                ,
                _HTMLLabelCameraLookAtX         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraLookAtX         : {type : "sap.ui.core.HTML", multiple : false}                  
                
                ,
                _HTMLSliderCameraLookAtX         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelCameraLookAtY         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraLookAtY         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraLookAtY         : {type : "sap.ui.core.HTML", multiple : false}    

                ,
                _HTMLLabelCameraLookAtZ         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraLookAtZ         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraLookAtZ         : {type : "sap.ui.core.HTML", multiple : false}    

                ,
                _HTMLControlHeaderCameraProps   : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelCameraAngle         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraAngle         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraAngle         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelCameraRatio         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraRatio         : {type : "sap.ui.core.HTML", multiple : false}                  

                ,
                _HTMLSliderCameraRatio         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelCameraNearPane         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraNearPane         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraNearPane         : {type : "sap.ui.core.HTML", multiple : false}                                             

                ,
                _HTMLLabelCameraFarPane         : {type : "sap.ui.core.HTML", multiple : false}                                             
                ,
                _HTMLInputCameraFarPane         : {type : "sap.ui.core.HTML", multiple : false}                  
                ,
                _HTMLSliderCameraFarPane         : {type : "sap.ui.core.HTML", multiple : false}                                             

            },
            events : 
            {
                buy          : {enablePreventDefault : true},
                changeSlider : {enablePreventDefault : false}
            }                
        },
        cameraPositionX    : 10,
        cameraPositionY    : 10,        
        cameraPositionZ    : 10,     
        cameraLookAtX      : 10,
        cameraLookAtY      : 10,        
        cameraLookAtZ      : 10,     
        cameraAngle        : 45,
        cameraRatio        : .666,        
        cameraNearPane     : .1,     
        cameraFarPane      : 10000,     

        objectPositionX    : 50,
        objectPositionY    : 70,        
        objectPositionZ    : -20,     
        objectScaleX       : 6,
        objectScaleY       : 6,        
        objectScaleZ       : 1,     
        objectRotationX    : 0,
        objectRotationY    : 180 * Math.PI / 180,        
        objectRotationZ    : 0,   
        
        mouseX : 0,
        mouseY : 0,

        init: function() 
        {
            var oControl = this, 




                            oHTMLControlHeaderObjPos,                            
                            oHTMLInputObjPosX,                            
                            oHTMLLabelObjPosX,                                                        
                            oHTMLSliderObjPosX,                            

                            oHTMLInputObjPosY,                            
                            oHTMLLabelObjPosY,                                                        
                            oHTMLSliderObjPosY,                                                        

                            oHTMLInputObjPosZ,                            
                            oHTMLLabelObjPosZ,                                                        
                            oHTMLSliderObjPosZ,  

                            oHTMLControlHeaderObjScale,                            
                            oHTMLInputObjScaleX,                            
                            oHTMLLabelObjScaleX,                                                        
                            oHTMLSliderObjScaleX,                            

                            oHTMLInputObjScaleY,                            
                            oHTMLLabelObjScaleY,                                                        
                            oHTMLSliderObjScaleY,                                                        

                            oHTMLInputObjScaleZ,                            
                            oHTMLLabelObjScaleZ,                                                        
                            oHTMLSliderObjScaleZ,                                                        

                            oHTMLControlHeaderObjProps,                            
                            oHTMLInputObjRotationX,                            
                            oHTMLLabelObjRotationX,                                                        
                            oHTMLSliderObjRotationX,                            

                            oHTMLInputObjRotationY,                            
                            oHTMLLabelObjRotationY,                                                        
                            oHTMLSliderObjRotationY,                                                        

                            oHTMLInputObjRotationZ,                            
                            oHTMLLabelObjRotationZ,                                                        
                            oHTMLSliderObjRotationZ,

                            oHTMLControlHeaderCameraPos,

//                            oHTMLSliderCameraPosX,      
//                            oHTMLSliderCameraPosY,                                                        
//                            oHTMLSliderCameraPosZ,                                                        

                            oHTMLInputCameraPosX,                            
                            oHTMLLabelCameraPosX,                                                        
                            oHTMLSliderCameraPosX,      

                            oHTMLInputCameraPosY,                            
                            oHTMLLabelCameraPosY,                                                        
                            oHTMLSliderCameraPosY,                                                        

                            oHTMLInputCameraPosZ,                            
                            oHTMLLabelCameraPosZ,                                                        
                            oHTMLSliderCameraPosZ,                                                        

                            oHTMLControlHeaderCameraLookAt,

                            oHTMLInputCameraLookAtX,                            
                            oHTMLLabelCameraLookAtX,                                                        
                            oHTMLSliderCameraLookAtX,                            

                            oHTMLInputCameraLookAtY,                            
                            oHTMLLabelCameraLookAtY,                                                        
                            oHTMLSliderCameraLookAtY,                                                        

                            oHTMLInputCameraLookAtZ,                            
                            oHTMLLabelCameraLookAtZ,                                                        
                            oHTMLSliderCameraLookAtZ,                                                        


                            oHTMLControlHeaderCameraProps,        
                            
                            oHTMLInputCameraAngle,                            
                            oHTMLLabelCameraAngle,                                                        
                            oHTMLSliderCameraAngle,                            

                            oHTMLInputCameraRatio,                            
                            oHTMLLabelCameraRatio,                                                        
                            oHTMLSliderCameraRatio,                                                        

                            oHTMLInputCameraNearPane,                            
                            oHTMLLabelCameraNearPane,                                                        
                            oHTMLSliderCameraNearPane,                                                        

                            oHTMLInputCameraFarPane,                            
                            oHTMLLabelCameraFarPane,                                                        
                            oHTMLSliderCameraFarPane,                                                        


                            oHTMLSlidertemp01
                            ;            

                            oHTMLSlidertemp01 = new sap.ui.core.HTML({
                                content: "<div class='slidecontainer'><input type='range' min='0' max='90' value='45' class='slider'></div>"                
                            });
                
                
                
                

// Object Pos            
            oHTMLControlHeaderObjPos = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='THSM_row THSM_controlHeader'>	Pfeil Position  </div></div>"                
            });
/*            
oHTMLControlHeaderObjPos.attachBrowserEvent("mouseenter", function(oEvent) 
{
    console.log('oHTMLControlHeaderObjPos mouseenter : ' + oEvent.target);   

// debugger;                
//              var targetElement = oControl.getAggregation("_HTMLControlHeaderObjectPosition");
//              targetElement.addStyleClass("activeControl");                
//              console.log('oHTMLControlHeaderObjectPosition targetElement : ' + targetElement);  
    var all = $( ".controlAreaObjPos" )
    .map(function() {
      this.classList.toggle('controlAreaObjPos_active');
//                  return this.innerHTML;
    })
    .get();
//                console.log(all.join());                
//                $.each( all, function( key, value )
//                {
//                    console.log(key, value);                
//                } );
});
*/            
            oHTMLControlHeaderObjPos.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderObjPos click : ' + oEvent.target);   
                var all2 = $( ".THSM_controlAreaObjPos-s" ).map(function() {this.classList.toggle('THSM_controlAreaObjPos-s_active');}).get();         
                var all  = $( ".THSM_controlAreaObjPos" ).map(function() {this.classList.toggle('THSM_controlAreaObjPos_active');}).get();
                var all3 = $( ".THSM_slidecontainerObjPos" ).map(function() {this.classList.toggle('THSM_slidecontainerObjPos-s');}).get();         
                var all4 = $( ".THSM_inputcontainerObjPos" ).map(function() {this.classList.toggle('THSM_inputcontainerObjPos-s');}).get();         
                var all5 = $( ".THSM_labelcontainerObjPos" ).map(function() {this.classList.toggle('THSM_labelcontainerObjPos-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();                                             
            });
// ObjPosX
            oHTMLLabelObjPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjPos'><input type='text' id='labelObjPosX' value='X' class='THSM_labelObjPos'></div>"                
            });

            oHTMLInputObjPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjPos'><input type='number' id='inputObjPosX' value='50' class='THSM_inputObjPos'></div>"                
            });
            oHTMLInputObjPosX.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjPosX change : ' + oEvent.target.value);             
               $( "#sliderObjPosX" ).val(oEvent.target.value);                                
               oControl.setObjectPositionX(oEvent.target.value);
            });

            oHTMLSliderObjPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjPos'><input id='sliderObjPosX' type='range' min='-30' max='150' value='50' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjPosX.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjX input : ' + oEvent.target.value);             
                $( "#inputObjPosX" ).val(oEvent.target.value);                                
                oControl.setObjectPositionX(oEvent.target.value);
            });
// ObjPosY
            oHTMLLabelObjPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjPos'><input type='text' id='labelObjPosY' value='Y' class='THSM_labelObjPos'></div>"                
            });

            oHTMLInputObjPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjPos'><input type='number' id='inputObjPosY' value='70' class='THSM_inputObjPos'></div>"                
            });
            oHTMLInputObjPosY.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjPosY change : ' + oEvent.target.value);             
               $( "#sliderObjPosY" ).val(oEvent.target.value);                                
               oControl.setObjectPositionY(oEvent.target.value);
            });
            oHTMLSliderObjPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjPos'><input id='sliderObjPosY' type='range' min='1' max='200' value='70' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjPosY.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjY input : ' + oEvent.target.value);                
                $( "#inputObjPosY" ).val(oEvent.target.value);                                                    
                oControl.setObjectPositionY(oEvent.target.value);
            });
// ObjPosZ
            oHTMLLabelObjPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjPos'><input type='text' id='labelObjPosZ' value='Z' class='THSM_labelObjPos'></div>"                
            });

            oHTMLInputObjPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjPos'><input type='number' id='inputObjPosZ' value='-20' class='THSM_inputObjPos'></div>"                
            });
            oHTMLInputObjPosZ.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputObjPosZ change : ' + oEvent.target.value);             
                $( "#sliderObjPosZ" ).val(oEvent.target.value);                                
                oControl.setObjectPositionZ(oEvent.target.value);
            });

            oHTMLSliderObjPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjPos'><input id='sliderObjPosZ' type='range' min='-30' max='200' value='-20' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjPosZ.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjZ input : ' + oEvent.target.value);                    
                $( "#inputObjPosZ" ).val(oEvent.target.value);                                                
                oControl.setObjectPositionZ(oEvent.target.value);
            });

//  Object Pos Ende

// Object Scale
            oHTMLControlHeaderObjScale = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='THSM_row THSM_controlHeader'>Pfeil Scale</div></div>"                
            });
            oHTMLControlHeaderObjScale.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderObjScale click : ' + oEvent.target);   
//                var all = $( ".THSM_controlAreaObjScale" ).map(function() {this.classList.toggle('THSM_controlAreaObjScale_active');}).get();
                var all2 = $( ".THSM_controlAreaObjScale-s" ).map(function() {this.classList.toggle('THSM_controlAreaObjScale-s_active');}).get();         
                var all  = $( ".THSM_controlAreaObjScale" ).map(function() {this.classList.toggle('THSM_controlAreaObjScale_active');}).get();
                var all3 = $( ".THSM_slidecontainerObjScale" ).map(function() {this.classList.toggle('THSM_slidecontainerObjScale-s');}).get();         
                var all4 = $( ".THSM_inputcontainerObjScale" ).map(function() {this.classList.toggle('THSM_inputcontainerObjScale-s');}).get();         
                var all5 = $( ".THSM_labelcontainerObjScale" ).map(function() {this.classList.toggle('THSM_labelcontainerObjScale-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();               

            });

            oHTMLLabelObjScaleX = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjScale'><input type='text' id='labelObjScaleX' value='X' class='THSM_labelObjScale'></div>"                
            });

            oHTMLInputObjScaleX = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjScale'><input type='number' id='inputObjScaleX' value='6' class='THSM_inputObjScale'></div>"                
            });
            oHTMLInputObjScaleX.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputScaleX change : ' + oEvent.target.value);             
               $( "#sliderObjScaleX" ).val(oEvent.target.value);                                
               oControl.setObjectScaleY(oEvent.target.value);
            });


            oHTMLSliderObjScaleX = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjScale'><input id='sliderObjScaleX' type='range' min='0' max='6' value='6' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjScaleX.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjScaleX input : ' + oEvent.target.value);    
                $( "#inputObjScaleX" ).val(oEvent.target.value);                                                                                
                oControl.setObjectScaleX(oEvent.target.value);
            });


            oHTMLLabelObjScaleY = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjScale'><input type='text' id='labelObjScaleY' value='Y' class='THSM_labelObjScale'></div>"                
            });

            oHTMLInputObjScaleY = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjScale'><input type='number' id='inputObjScaleY' value='6' class='THSM_inputObjScale'></div>"                
            });
            oHTMLInputObjScaleY.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjScaleY change : ' + oEvent.target.value);             
               $( "#sliderObjScaleY" ).val(oEvent.target.value);                                
               oControl.setObjectScaleY(oEvent.target.value);
            });

            oHTMLSliderObjScaleY = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjScale'><input id='sliderObjScaleY' type='range' min='0' max='6' value='6' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjScaleY.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjScaleY input : ' + oEvent.target.value);                    
                $( "#inputObjScaleY" ).val(oEvent.target.value);                                                                                                
                oControl.setObjectScaleY(oEvent.target.value);
            });
  
            oHTMLLabelObjScaleZ = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjScale'><input type='text' id='labelObjScaleZ' value='Z' class='THSM_labelObjScale'></div>"                
            });

            oHTMLInputObjScaleZ = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjScale'><input type='number' id='inputObjScaleZ' value='1' class='THSM_inputObjScale'></div>"                
            });
            oHTMLInputObjScaleZ.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjScaleZ change : ' + oEvent.target.value);             
               $( "#sliderObjScaleZ" ).val(oEvent.target.value);                                
               oControl.setObjectScaleZ(oEvent.target.value);
            });
            

            oHTMLSliderObjScaleZ = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjScale'><input id='sliderObjScaleZ' type='range' min='0' max='6' value='1' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjScaleZ.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjScaleZ input : ' + oEvent.target.value);                    
                $( "#inputObjScaleZ" ).val(oEvent.target.value);                                                                                                
                oControl.setObjectScaleZ(oEvent.target.value);
            });



// Object Props
// ersetzt durch 
// Obj Rotation

            oHTMLControlHeaderObjProps = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='THSM_row THSM_controlHeader'>Pfeil Rotation</div></div>"                
            });
            oHTMLControlHeaderObjProps.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderObjProps click : ' + oEvent.target);   

//                var all = $( ".THSM_controlAreaObjProps" ).map(function() {this.classList.toggle('THSM_controlAreaObjProps_active');}).get();
                var all2 = $( ".THSM_controlAreaObjProps-s" ).map(function() {this.classList.toggle('THSM_controlAreaObjProps-s_active');}).get();         
                var all  = $( ".THSM_controlAreaObjProps" ).map(function() {this.classList.toggle('THSM_controlAreaObjProps_active');}).get();
                var all3 = $( ".THSM_slidecontainerObjProps" ).map(function() {this.classList.toggle('THSM_slidecontainerObjProps-s');}).get();         
                var all4 = $( ".THSM_inputcontainerObjProps" ).map(function() {this.classList.toggle('THSM_inputcontainerObjProps-s');}).get();         
                var all5 = $( ".THSM_labelcontainerObjProps" ).map(function() {this.classList.toggle('THSM_labelcontainerObjProps-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();               
            

            });

// X            
            oHTMLLabelObjRotationX = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjProps'><input type='text' id='labelObjRotationX' value='X' class='THSM_labelObjProps'></div>"                
            });

            oHTMLInputObjRotationX = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjProps'><input type='number' id='inputObjRotationX' value='0' class='THSM_inputObjProps'></div>"                
            });
            oHTMLInputObjRotationX.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjRotationX change : ' + oEvent.target.value);             
               $( "#sliderObjRotationX" ).val(oEvent.target.value);                                
               oControl.setObjectRotationX(oEvent.target.value);
            });

            oHTMLSliderObjRotationX = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjProps'><input id='sliderObjRotationX' type='range' min='-180' max='180' value='0' class='THSM_slider'></div>"                
            });

            oHTMLSliderObjRotationX.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjRotationX input : ' + oEvent.target.value);                    
                $( "#inputObjRotationX" ).val(oEvent.target.value);                                                                                                
                oControl.setObjectRotationX(oEvent.target.value);
            });

// Y
            oHTMLLabelObjRotationY = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjProps'><input type='text' id='labelObjRotationY' value='Y' class='THSM_labelObjProps'></div>"                
            });

            oHTMLInputObjRotationY = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjProps'><input type='number' id='inputObjRotationY' value='180' class='THSM_inputObjProps'></div>"                
            });
            oHTMLInputObjRotationY.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjRotationY change : ' + oEvent.target.value);             
               $( "#sliderObjRotationY" ).val(oEvent.target.value);                                
               oControl.setObjectRotationY(oEvent.target.value);
            });


            oHTMLSliderObjRotationY = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjProps'><input id='sliderObjRotationY' type='range' min='-180' max='180' value='180' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjRotationY.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderObjRotationY input : ' + oEvent.target.value);  
                $( "#inputObjRotationY" ).val(oEvent.target.value);                                      
                oControl.setObjectRotationY(oEvent.target.value);
            });

// Z            
            oHTMLLabelObjRotationZ = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerObjProps'><input type='text' id='labelObjRotationZ' value='Z' class='THSM_labelObjProps'></div>"                
            });

            oHTMLInputObjRotationZ = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerObjProps'><input type='number' id='inputObjRotationZ' value='0' class='THSM_inputObjProps'></div>"                
            });
            oHTMLInputObjRotationZ.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputObjRotationZ change : ' + oEvent.target.value);             
               $( "#sliderObjRotationZ" ).val(oEvent.target.value);                                
               oControl.setObjectRotationZ(oEvent.target.value);
            });
            oHTMLSliderObjRotationZ = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerObjProps'><input id='sliderObjRotationZ' type='range' min='-180' max='180' value='0' class='THSM_slider'></div>"                
            });
            oHTMLSliderObjRotationZ.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderRotationZ input : ' + oEvent.target.value);                    
                $( "#inputObjRotationZ" ).val(oEvent.target.value);                     
                oControl.setObjectRotationZ(oEvent.target.value);
            });

//  OBj Props Ende
// Camera LookAt
            oHTMLControlHeaderCameraLookAt = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='row THSM_controlHeader'>Camera Look At</div></div>"                
            });
            oHTMLControlHeaderCameraLookAt.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderCameraLookAt click : ' + oEvent.target);   
//                var all = $( ".THSM_controlAreaCameraLookAt" ).map(function() {this.classList.toggle('THSM_controlAreaCameraLookAt_active');}).get();
                var all2 = $( ".THSM_controlAreaCameraLookAt-s" ).map(function() {this.classList.toggle('THSM_controlAreaCameraLookAt-s_active');}).get();         
                var all  = $( ".THSM_controlAreaCameraLookAt" ).map(function() {this.classList.toggle('THSM_controlAreaCameraLookAt_active');}).get();
                var all3 = $( ".THSM_slidecontainerCameraLookAt" ).map(function() {this.classList.toggle('THSM_slidecontainerCameraLookAt-s');}).get();         
                var all4 = $( ".THSM_inputcontainerCameraLookAt" ).map(function() {this.classList.toggle('THSM_inputcontainerCameraLookAt-s');}).get();         
                var all5 = $( ".THSM_labelcontainerCameraLookAt" ).map(function() {this.classList.toggle('THSM_labelcontainerCameraLookAt-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();               
            });

// X
            oHTMLLabelCameraLookAtX = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraLookAt'><input type='text' id='labelCameraLookAtX' value='X' class='THSM_labelCameraLookAt'></div>"                
            });

            oHTMLInputCameraLookAtX = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraLookAt'><input type='number' id='inputCameraLookAtX' value='30' class='THSM_inputCameraLookAt'></div>"                
            });
            oHTMLInputCameraLookAtX.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputCameraLookAtX change : ' + oEvent.target.value);             
               $( "#sliderCameraLookAtX" ).val(oEvent.target.value);                                
               oControl.setCameraLookAtX(oEvent.target.value);
            });


            oHTMLSliderCameraLookAtX = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraLookAt'><input id='sliderCameraLookAtX' type='range' min='-180' max='180' value='30' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraLookAtX.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraLookAtX input : ' + oEvent.target.value);                    
                $( "#inputCameraLookAtX" ).val(oEvent.target.value);                      
                oControl.setCameraLookAtX(oEvent.target.value);
            });
// Y                

            oHTMLLabelCameraLookAtY = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraLookAt'><input type='text' id='labelCameraLookAtY' value='Y' class='THSM_labelCameraLookAt'></div>"                
            });

            oHTMLInputCameraLookAtY = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraLookAt'><input type='number' id='inputCameraLookAtY' value='75' class='THSM_inputCameraLookAt'></div>"                
            });
            oHTMLInputCameraLookAtY.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraLookAtY change : ' + oEvent.target.value);             
                $( "#sliderCameraLookAtY" ).val(oEvent.target.value);                                
                oControl.setCameraLookAtY(oEvent.target.value);
            });


            oHTMLSliderCameraLookAtY = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraLookAt'><input id='sliderCameraLookAtY' type='range' min='-180' max='180' value='30' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraLookAtY.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraLookAtY input : ' + oEvent.target.value);                    
                $( "#inputCameraLookAtY" ).val(oEvent.target.value);                                      
                oControl.setCameraLookAtY(oEvent.target.value);
            });
                   
// Z            
            oHTMLLabelCameraLookAtZ = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraLookAt'><input type='text' id='labelCameraLookAtZ' value='Z' class='THSM_labelCameraLookAt'></div>"                
            });

            oHTMLInputCameraLookAtZ = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraLookAt'><input type='number' id='inputCameraLookAtZ' value='30' class='THSM_inputCameraLookAt'></div>"                
            });
            oHTMLInputCameraLookAtY.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraLookAtZ change : ' + oEvent.target.value);             
                $( "#sliderCameraLookAtZ" ).val(oEvent.target.value);                                
                oControl.setCameraLookAtZ(oEvent.target.value);
            });


            oHTMLSliderCameraLookAtZ = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraLookAt'><input id='sliderCameraLookAtZ' type='range' min='-180' max='180' value='30' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraLookAtZ.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraLookAtZ input : ' + oEvent.target.value);                    
                $( "#inputCameraLookAtZ" ).val(oEvent.target.value);                                      
                oControl.setCameraLookAtZ(oEvent.target.value);
            });

// Camera LookAt Ende
// Camera Pos

            oHTMLControlHeaderCameraPos = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='THSM_row THSM_controlHeader'>Camera Pos</div></div>"                
            });
            oHTMLControlHeaderCameraPos.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderCameraPos click : ' + oEvent.target);   
//                var all = $( ".THSM_controlAreaCameraPos" ).map(function() {this.classList.toggle('THSM_controlAreaCameraPos_active');}).get();
                var all2 = $( ".THSM_controlAreaCameraPos-s" ).map(function() {this.classList.toggle('THSM_controlAreaCameraPos-s_active');}).get();         
                var all  = $( ".THSM_controlAreaCameraPos" ).map(function() {this.classList.toggle('THSM_controlAreaCameraPos_active');}).get();
                var all3 = $( ".THSM_slidecontainerCameraPos" ).map(function() {this.classList.toggle('THSM_slidecontainerCameraPos-s');}).get();         
                var all4 = $( ".THSM_inputcontainerCameraPos" ).map(function() {this.classList.toggle('THSM_inputcontainerCameraPos-s');}).get();         
                var all5 = $( ".THSM_labelcontainerCameraPos" ).map(function() {this.classList.toggle('THSM_labelcontainerCameraPos-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();               
            });
// X
            oHTMLLabelCameraPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraPos'><input type='text' id='labelCameraPosX' value='X' class='THSM_labelCameraPos'></div>"                
            });

            oHTMLInputCameraPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraPos'><input type='number' id='inputCameraPosX' value='-80' class='THSM_inputCameraPos'></div>"                
            });
            oHTMLInputCameraPosX.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputCameraPosX change : ' + oEvent.target.value);             
               $( "#sliderCameraPosX" ).val(oEvent.target.value);                                
               oControl.setCameraPositionX(oEvent.target.value);
            });

            oHTMLSliderCameraPosX = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraPos'><input id='sliderCameraPosX' type='range' min='-200' max='200' value='-80' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraPosX.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraX input : ' + oEvent.target.value);                    
                $( "#inputCameraPosX" ).val(oEvent.target.value);                     
                oControl.setCameraPositionX(oEvent.target.value);
            });

// Y            
            oHTMLLabelCameraPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraPos'><input type='text' id='labelCameraPosY' value='Y' class='THSM_labelCameraPos'></div>"                
            });

            oHTMLInputCameraPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraPos'><input type='number' id='inputCameraPosY' value='75' class='THSM_inputCameraPos'></div>"                
            });
            oHTMLInputCameraPosY.attachBrowserEvent("change", function(oEvent) 
            {
               console.log('oHTMLInputCameraPosY change : ' + oEvent.target.value);             
               $( "#sliderCameraPosY" ).val(oEvent.target.value);                                
               oControl.setCameraPositionY(oEvent.target.value);
            });

            oHTMLSliderCameraPosY = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraPos'><input id='sliderCameraPosY' type='range' min='-200' max='200' value='40' class='THSM_slider'></div>"                
            });

            oHTMLSliderCameraPosY.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraY input : ' + oEvent.target.value);                    
                $( "#inputCameraPosY" ).val(oEvent.target.value);                      
                oControl.setCameraPositionY(oEvent.target.value);
            });
                      
// Z            
            oHTMLLabelCameraPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraPos'><input type='text' id='labelCameraPosZ' value='Z' class='THSM_labelCameraPos'></div>"                
            });

            oHTMLInputCameraPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraPos'><input type='number' id='inputCameraPosZ' value='-60' class='THSM_inputCameraPos'></div>"                
            });
            oHTMLInputCameraPosZ.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraPosZ change : ' + oEvent.target.value);             
                $( "#sliderCameraPosZ" ).val(oEvent.target.value);                                
                oControl.setCameraPositionZ(oEvent.target.value);
            });

            oHTMLSliderCameraPosZ = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraPos'><input id='sliderCameraPosZ' type='range' min='-200' max='200' value='-60' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraPosZ.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraZ input : ' + oEvent.target.value);                    
                $( "#inputCameraPosZ" ).val(oEvent.target.value);                  
                oControl.setCameraPositionZ(oEvent.target.value);
            });



// Camera Props
            oHTMLControlHeaderCameraProps = new sap.ui.core.HTML({
                content: "<div class='THSM_row THSM_controlHeader THSM_tooltip'>  <div class='THSM_row THSM_controlHeader'>Camera Props</div></div>"                
            });
            oHTMLControlHeaderCameraProps.attachBrowserEvent("click", function(oEvent) 
            {
                console.log('oHTMLControlHeaderCameraProps click : ' + oEvent.target);   
//                var all = $( ".THSM_controlAreaCameraProps" ).map(function() {this.classList.toggle('THSM_controlAreaCameraProps_active');}).get();
                var all2 = $( ".THSM_controlAreaCameraProps-s" ).map(function() {this.classList.toggle('THSM_controlAreaCameraProps-s_active');}).get();         
                var all  = $( ".THSM_controlAreaCameraProps" ).map(function() {this.classList.toggle('THSM_controlAreaCameraProps_active');}).get();
                var all3 = $( ".THSM_slidecontainerCameraProps" ).map(function() {this.classList.toggle('THSM_slidecontainerCameraProps-s');}).get();         
                var all4 = $( ".THSM_inputcontainerCameraProps" ).map(function() {this.classList.toggle('THSM_inputcontainerCameraProps-s');}).get();         
                var all5 = $( ".THSM_labelcontainerCameraProps" ).map(function() {this.classList.toggle('THSM_labelcontainerCameraProps-s');}).get();                         
                var all6 = $( ".THSM_tooltip" ).map(function() {this.classList.toggle('THSM_tooltip');}).get();               
            });

// Angle
            oHTMLLabelCameraAngle = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraProps'><input type='text' id='labelCameraAngle' value='A' class='THSM_labelCameraProps'></div>"                
            });

            oHTMLInputCameraAngle = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraProps'><input type='number' id='inputCameraAngle' value='90' class='THSM_inputCameraProps'></div>"                
            });
            oHTMLInputCameraAngle.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraAngle change : ' + oEvent.target.value);             
                $( "#sliderCameraAngle" ).val(oEvent.target.value);                                
                oControl.setCameraAngle(oEvent.target.value);
            });


            oHTMLSliderCameraAngle = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraProps'><input id='sliderCameraAngle' type='range' min='0' max='90' value='90' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraAngle.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraAngle input : ' + oEvent.target.value);                    
                $( "#inputCameraAngle" ).val(oEvent.target.value);                   
                oControl.setCameraAngle(oEvent.target.value);
            });

// Ratio
            oHTMLLabelCameraRatio = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraProps'><input type='text' id='labelCameraRatio' value='R' class='THSM_labelCameraProps'></div>"                
            });

            oHTMLInputCameraRatio = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraProps'><input type='number' id='inputCameraRatio' value='1' class='THSM_inputCameraProps'></div>"                
            });
            oHTMLInputCameraRatio.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraRatio change : ' + oEvent.target.value);             
                $( "#sliderCameraRatio" ).val(oEvent.target.value);                                
                oControl.setCameraRatio(oEvent.target.value);
            });


            oHTMLSliderCameraRatio = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraProps'><input id='sliderCameraRatio' type='range' min='0' max='3' value='1' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraRatio.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraRatio input : ' + oEvent.target.value);                    
                $( "#inputCameraRatio" ).val(oEvent.target.value);                                   
                oControl.setCameraRatio(oEvent.target.value);
            });

// Near Pane
            oHTMLLabelCameraNearPane = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraProps'><input type='text' id='labelCameraNearPane' value='NP' class='THSM_labelCameraProps'></div>"                
            });

            oHTMLInputCameraNearPane = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraProps'><input type='number' id='inputCameraNearPane' value='0.1' class='THSM_inputCameraProps'></div>"                
            });
            oHTMLInputCameraNearPane.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraNearPane change : ' + oEvent.target.value);             
                $( "#sliderCameraNearPane" ).val(oEvent.target.value);                                
                oControl.setCameraNearPane(oEvent.target.value);
            });


            oHTMLSliderCameraNearPane = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraProps'><input id='sliderCameraNearPane' type='range' min='.1' max='1' value='.1' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraNearPane.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraNearPane input : ' + oEvent.target.value);                    
                $( "#inputCameraNearPane" ).val(oEvent.target.value);                                   
                oControl.setCameraNearPane(oEvent.target.value);
            });

// Far Pane
            oHTMLLabelCameraFarPane = new sap.ui.core.HTML({
                content: "<div class='THSM_labelcontainerCameraProps'><input type='text' id='labelCameraFarPane' value='FP' class='THSM_labelCameraProps'></div>"                
            });

            oHTMLInputCameraFarPane = new sap.ui.core.HTML({
                content: "<div class='THSM_inputcontainerCameraProps'><input type='number' id='inputCameraFarPane' value='1000' class='THSM_inputCameraProps'></div>"                
            });
            oHTMLInputCameraFarPane.attachBrowserEvent("change", function(oEvent) 
            {
                console.log('oHTMLInputCameraFarPane change : ' + oEvent.target.value);             
                $( "#sliderCameraFarPane" ).val(oEvent.target.value);                                
                oControl.setCameraFarPane(oEvent.target.value);
            });

            oHTMLSliderCameraFarPane = new sap.ui.core.HTML({
                content: "<div class='THSM_slidecontainerCameraProps'><input id='sliderCameraFarPane' type='range' min='10' max='1000' value='1000' class='THSM_slider'></div>"                
            });
            oHTMLSliderCameraFarPane.attachBrowserEvent("input", function(oEvent) 
            {
                console.log('oHTMLSliderCameraFarPane input : ' + oEvent.target.value);                    
                $( "#inputCameraFarPane" ).val(oEvent.target.value);                                   
                oControl.setCameraFarPane(oEvent.target.value);
            });






//  Objekte Aggregationen zuordnen
//  -------------------------------------------            


// Obj Pos
            this.setAggregation("_HTMLControlHeaderObjPos", oHTMLControlHeaderObjPos);               
            this.setAggregation("_HTMLLabelObjPosX", oHTMLLabelObjPosX);
            this.setAggregation("_HTMLInputObjPosX", oHTMLInputObjPosX);            
            this.setAggregation("_HTMLSliderObjPosX", oHTMLSliderObjPosX);

            this.setAggregation("_HTMLLabelObjPosY", oHTMLLabelObjPosY);
            this.setAggregation("_HTMLInputObjPosY", oHTMLInputObjPosY);            
            this.setAggregation("_HTMLSliderObjPosY", oHTMLSliderObjPosY);

            this.setAggregation("_HTMLLabelObjPosZ", oHTMLLabelObjPosZ);
            this.setAggregation("_HTMLInputObjPosZ", oHTMLInputObjPosZ);            
            this.setAggregation("_HTMLSliderObjPosZ", oHTMLSliderObjPosZ);                        

// Obj Scale            
            this.setAggregation("_HTMLControlHeaderObjScale", oHTMLControlHeaderObjScale);   
            this.setAggregation("_HTMLLabelObjScaleX", oHTMLLabelObjScaleX);
            this.setAggregation("_HTMLInputObjScaleX", oHTMLInputObjScaleX);            
            this.setAggregation("_HTMLSliderObjScaleX", oHTMLSliderObjScaleX);

            this.setAggregation("_HTMLLabelObjScaleY", oHTMLLabelObjScaleY);
            this.setAggregation("_HTMLInputObjScaleY", oHTMLInputObjScaleY);            
            this.setAggregation("_HTMLSliderObjScaleY", oHTMLSliderObjScaleY);

            this.setAggregation("_HTMLLabelObjScaleZ", oHTMLLabelObjScaleZ);
            this.setAggregation("_HTMLInputObjScaleZ", oHTMLInputObjScaleZ);            
            this.setAggregation("_HTMLSliderObjScaleZ", oHTMLSliderObjScaleZ);                        


//  Obj Props            
            this.setAggregation("_HTMLControlHeaderObjProps", oHTMLControlHeaderObjProps);   

            this.setAggregation("_HTMLLabelObjRotationX", oHTMLLabelObjRotationX);
            this.setAggregation("_HTMLInputObjRotationX", oHTMLInputObjRotationX);            
            this.setAggregation("_HTMLSliderObjRotationX", oHTMLSliderObjRotationX);

            this.setAggregation("_HTMLLabelObjRotationY", oHTMLLabelObjRotationY);
            this.setAggregation("_HTMLInputObjRotationY", oHTMLInputObjRotationY);            
            this.setAggregation("_HTMLSliderObjRotationY", oHTMLSliderObjRotationY);

            this.setAggregation("_HTMLLabelObjRotationZ", oHTMLLabelObjRotationZ);
            this.setAggregation("_HTMLInputObjRotationZ", oHTMLInputObjRotationZ);            
            this.setAggregation("_HTMLSliderObjRotationZ", oHTMLSliderObjRotationZ);                        




            this.setAggregation("_HTMLControlHeaderCameraPos", oHTMLControlHeaderCameraPos);   

            this.setAggregation("_HTMLLabelCameraPosX", oHTMLLabelCameraPosX);
            this.setAggregation("_HTMLInputCameraPosX", oHTMLInputCameraPosX);            

            this.setAggregation("_HTMLSliderCameraPosX", oHTMLSliderCameraPosX);

            this.setAggregation("_HTMLLabelCameraPosY", oHTMLLabelCameraPosY);
            this.setAggregation("_HTMLInputCameraPosY", oHTMLInputCameraPosY);            
            this.setAggregation("_HTMLSliderCameraPosY", oHTMLSliderCameraPosY);

            this.setAggregation("_HTMLLabelCameraPosZ", oHTMLLabelCameraPosZ);
            this.setAggregation("_HTMLInputCameraPosZ", oHTMLInputCameraPosZ);            
            this.setAggregation("_HTMLSliderCameraPosZ", oHTMLSliderCameraPosZ);                        

// Camera LookAt
            this.setAggregation("_HTMLControlHeaderCameraLookAt", oHTMLControlHeaderCameraLookAt); 
            
            this.setAggregation("_HTMLLabelCameraLookAtX", oHTMLLabelCameraLookAtX);
            this.setAggregation("_HTMLInputCameraLookAtX", oHTMLInputCameraLookAtX);            
            
            this.setAggregation("_HTMLSliderCameraLookAtX", oHTMLSliderCameraLookAtX);

            this.setAggregation("_HTMLLabelCameraLookAtY", oHTMLLabelCameraLookAtY);
            this.setAggregation("_HTMLInputCameraLookAtY", oHTMLInputCameraLookAtY);            

            this.setAggregation("_HTMLSliderCameraLookAtY", oHTMLSliderCameraLookAtY);

            this.setAggregation("_HTMLLabelCameraLookAtZ", oHTMLLabelCameraLookAtZ);
            this.setAggregation("_HTMLInputCameraLookAtZ", oHTMLInputCameraLookAtZ);            

            this.setAggregation("_HTMLSliderCameraLookAtZ", oHTMLSliderCameraLookAtZ);                        


// Camera Props
            this.setAggregation("_HTMLControlHeaderCameraProps", oHTMLControlHeaderCameraProps);       
            
            this.setAggregation("_HTMLLabelCameraAngle", oHTMLLabelCameraAngle);
            this.setAggregation("_HTMLInputCameraAngle", oHTMLInputCameraAngle);            
            this.setAggregation("_HTMLSliderCameraAngle", oHTMLSliderCameraAngle);

            this.setAggregation("_HTMLLabelCameraRatio", oHTMLLabelCameraRatio);
            this.setAggregation("_HTMLInputCameraRatio", oHTMLInputCameraRatio);            
            this.setAggregation("_HTMLSliderCameraRatio", oHTMLSliderCameraRatio);

            this.setAggregation("_HTMLLabelCameraNearPane", oHTMLLabelCameraNearPane);
            this.setAggregation("_HTMLInputCameraNearPane", oHTMLInputCameraNearPane);            
            this.setAggregation("_HTMLSliderCameraNearPane", oHTMLSliderCameraNearPane);                        

            this.setAggregation("_HTMLLabelCameraFarPane", oHTMLLabelCameraFarPane);
            this.setAggregation("_HTMLInputCameraFarPane", oHTMLInputCameraFarPane);            
            this.setAggregation("_HTMLSliderCameraFarPane", oHTMLSliderCameraFarPane);                                    

            


            this.setAggregation("_HTMLSlidertemp01", oHTMLSlidertemp01);           
            


        },
        

        renderer: function(oRm, oControl)            
        {
//          Darstellung ThreeJS-Objekt            
            oRm.openStart('div', oControl);
            oRm.class('THSM_vizArea');
            oRm.openEnd();

            oRm.close('div');

//          Control-Pad            
            oRm.openStart('div');
            oRm.class('THSM_controlPad');
            oRm.openEnd();

//            oRm.openStart('div', oControl);
//            oRm.class('THSM_vizArea');
//            oRm.openEnd();
                oRm.renderControl(new HTML().setDOMContent(oControl.getWebGLRenderer().domElement));                
//            oRm.close('div');       


//          Panels
//              ??ussere Zeile
                oRm.openStart("div");
                oRm.addClass("THSM_row");
                oRm.writeClasses();
                oRm.openEnd();
// 1. Element (Object Position)
// debugger;
                    oRm.openStart("div");
//                    oRm.write(" id01 ");
                    oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaObjPos THSM_controlAreaObjPos-s");
                    oRm.writeClasses();
                    oRm.openEnd();
//  ??berschrift                    
                        oRm.openStart("div");
                        oRm.addClass("THSM_row THSM_controlHeader" );
                        oRm.writeClasses();
                        oRm.openEnd();
                            oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderObjPos"));                        
                        oRm.close('div');                 
// 1. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row" );
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
//                            oRm.addClass("controlLabel");                            
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjPosX"));

                            oRm.close('div');   
                            
                            oRm.openStart("div");
//   slideColumnSliderObjPos                          
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjPosX"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjPosX"));
                            oRm.close('div');   

                        oRm.close('div');  
                        
// 2. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('Y');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjPosY"));                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjPosY"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjPosY"));                                
                            oRm.close('div');   

                        oRm.close('div');  
// 3. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();
                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjPosZ"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjPosZ"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjPosZ"));                                                                
                            oRm.close('div');   

                        oRm.close('div');  
// 1. Steuerelement Ende
                    oRm.close('div');         
// ----------------------------------------------
// 2. Element (Object Scale)
                    oRm.openStart("div");
//                    oRm.addClass("col-2 col-s-2 controlArea controlAreaObjScale");
                    oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaObjScale THSM_controlAreaObjScale-s");                    
                    oRm.writeClasses();
                    oRm.openEnd();
//  ??berschrift                    
                        oRm.openStart("div");
                        oRm.addClass("THSM_row THSM_controlHeader" );
                        oRm.writeClasses();
                        oRm.openEnd();
                        oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderObjScale"));        
                        oRm.close('div');                           
// 1. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('X');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjScaleX"));                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjScaleX"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');                            
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjScaleX"));                                                                
                            oRm.close('div');   

                        oRm.close('div');  
    
// 2. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('Y');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjScaleY"));                                                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjScaleY"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjScaleY"));                                        
                            oRm.close('div');   

                        oRm.close('div');  


// 3. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('Z');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjScaleZ"));                                                                                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjScaleZ"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjScaleZ"));                                                                        
                            oRm.close('div');   

                        oRm.close('div');  
// 2. Steuerelement Ende
                    oRm.close('div');         

// ----------------------------------------------
// 3. Element (Object Props)
                    oRm.openStart("div");
//                    oRm.addClass("col-2 col-s-2   controlArea controlAreaObjProps");
                    oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaObjProps THSM_controlAreaObjProps-s");                                        
                    oRm.writeClasses();
                    oRm.openEnd();

//  ??berschrift                    
                        oRm.openStart("div");
                        oRm.addClass("THSM_row THSM_controlHeader" );
                        oRm.writeClasses();
                        oRm.openEnd();
                        oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderObjProps"));        

                        oRm.close('div');                                                    
// 1. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('O');     
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjRotationX"));                                                                                            
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjRotationX"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');        
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjRotationX"));                                                                                                                            
                            oRm.close('div');   

                        oRm.close('div');  
    
// 2. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('U');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelObjRotationY"));                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjRotationY"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjRotationY"));                                
                            oRm.close('div');   
                        oRm.close('div');  


// 3. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                            oRm.write('H');                                 
                              oRm.renderControl(oControl.getAggregation("_HTMLLabelObjRotationZ"));                                                            
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderObjRotationZ"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('50');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputObjRotationZ"));                                    
                            oRm.close('div');   

                        oRm.close('div');  
// 3. Steuerelement Ende
                    oRm.close('div');         

// ----------------------------------------------
// 4. Element (Camera LookAt)
                    oRm.openStart("div");
//                    oRm.addClass("col-2 col-s-2  controlArea controlAreaCameraLookAt");
                    oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaCameraLookAt THSM_controlAreaCameraLookAt-s");         
                    oRm.writeClasses();
                    oRm.openEnd();

//  ??berschrift                    
                        oRm.openStart("div");
                        oRm.addClass("THSM_row THSM_controlHeader" );
                        oRm.writeClasses();
                        oRm.openEnd();
                        oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderCameraLookAt"));    
                        oRm.close('div');                            
// 1. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('X');     
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraLookAtX"));                                                                                                                                                                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraLookAtX"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('0');    
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraLookAtX"));                                                                                                                    
                            oRm.close('div');   

                        oRm.close('div');  
    
// 2. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('Y');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraLookAtY"));                                                                                                                                                                                                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraLookAtY"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('0');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraLookAtY"));
                            oRm.close('div');   

                        oRm.close('div');  


// 3. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('Z');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraLookAtZ"));                                                                                                                                                                                                                                                
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraLookAtZ"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('0');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraLookAtZ"));                                
                            oRm.close('div');   

                            oRm.close('div');  
// 4. Steuerelement Ende
                        oRm.close('div');         

// ----------------------------------------------
// 5. Element (Camera Pos)
                        oRm.openStart("div");
//                        oRm.addClass("col-2 col-s-2  controlArea controlAreaCameraPos");
                        oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaCameraPos THSM_controlAreaCameraPos-s");                                                                
                        oRm.writeClasses();
                        oRm.openEnd();

//  ??berschrift                    
                            oRm.openStart("div");
                            oRm.addClass("THSM_row THSM_controlHeader" );
                            oRm.writeClasses();
                            oRm.openEnd();
                            oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderCameraPos"));    
                            oRm.close('div');                            

// 1. Zeile im Element
                            oRm.openStart("div");
                            oRm.addClass("THSM_row");
                            oRm.writeClasses();
                            oRm.openEnd();

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-1 THSM_col-s-3");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('X');      
                                    oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraPosX"));                                                                                               
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-9 THSM_col-s-6");
                                oRm.writeClasses();
                                oRm.openEnd();
                                    oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraPosX"));
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-2 THSM_col-s-2");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('-10');                            
                                    oRm.renderControl(oControl.getAggregation("_HTMLInputCameraPosX"));                                                                                                                                   
                                oRm.close('div');   

                            oRm.close('div');  

// 2. Zeile im Element
                            oRm.openStart("div");
                            oRm.addClass("THSM_row");
                            oRm.writeClasses();
                            oRm.openEnd();

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-1 THSM_col-s-3");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('Y');                                 
                                    oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraPosY"));                                    
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-9 THSM_col-s-6");
                                oRm.writeClasses();
                                oRm.openEnd();
                                    oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraPosY"));
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-2 THSM_col-s-2");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('-10');
                                    oRm.renderControl(oControl.getAggregation("_HTMLInputCameraPosY"));                                                                                                                                                                       
                                oRm.close('div');   

                            oRm.close('div');  


// 3. Zeile im Element
                            oRm.openStart("div");
                            oRm.addClass("THSM_row");
                            oRm.writeClasses();
                            oRm.openEnd();

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-1 THSM_col-s-3");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('Z');        
                                    oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraPosZ"));                                                                                                 
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-9 THSM_col-s-6");
                                oRm.writeClasses();
                                oRm.openEnd();
                                    oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraPosZ"));
                                oRm.close('div');   

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-2 THSM_col-s-2");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('-10');
                                    oRm.renderControl(oControl.getAggregation("_HTMLInputCameraPosZ"));                                                                                                                                                                                                           
                                oRm.close('div');   

                            oRm.close('div');  
// 5. Steuerelement Ende
                        oRm.close('div');         


// 6. Element (Camera Props)
                        oRm.openStart("div");
                        oRm.addClass("THSM_col-2 THSM_col-s-2 THSM_controlAreaCameraProps THSM_controlAreaCameraProps-s");                        
                        oRm.writeClasses();
                        oRm.openEnd();
//  ??berschrift                    
                            oRm.openStart("div");
                            oRm.addClass("THSM_row THSM_controlHeader" );
                            oRm.writeClasses();
                            oRm.openEnd();
                            oRm.renderControl(oControl.getAggregation("_HTMLControlHeaderCameraProps"));    
/*                            
                                oRm.openStart("div");
                                oRm.addClass("col-12 col-s-12");
                                oRm.writeClasses();
                                oRm.openEnd();
                                    oRm.write('Camera Props');    
                                oRm.close('div');   
*/                                
                            oRm.close('div');               
// 1. Zeile im Element
                            oRm.openStart("div");
                            oRm.addClass("THSM_row");
                            oRm.writeClasses();
                            oRm.openEnd();

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-1 THSM_col-s-3");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('A');                                 
                                    oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraAngle"));                                                                                                                                     
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraAngle"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('45');                            
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraAngle"));                                                                                                                                                                     
                            oRm.close('div');   

                            oRm.close('div');  

// 2. Zeile im Element
                            oRm.openStart("div");
                            oRm.addClass("THSM_row");
                            oRm.writeClasses();
                            oRm.openEnd();

                                oRm.openStart("div");
                                oRm.addClass("THSM_col-1 THSM_col-s-3");
                                oRm.writeClasses();
                                oRm.openEnd();
//                                    oRm.write('R');                                 
                                    oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraRatio"));                                                                                                                                                                         
                                oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraRatio"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('.666');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraRatio"));                                                                                                                                                                                                     
                            oRm.close('div');   

                        oRm.close('div');  


// 3. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("THSM_row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('NP');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraNearPane"));                                                                                                                                                                                                         
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-9 THSM_col-s-6");
                            oRm.writeClasses();
                            oRm.openEnd();
                                oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraNearPane"));
                            oRm.close('div');   

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-2 THSM_col-s-2");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('.1');
                                oRm.renderControl(oControl.getAggregation("_HTMLInputCameraNearPane"));                                                                                                                                                                                                                                     
                            oRm.close('div');   

                        oRm.close('div');  

// 4. Zeile im Element
                        oRm.openStart("div");
                        oRm.addClass("row");
                        oRm.writeClasses();
                        oRm.openEnd();

                            oRm.openStart("div");
                            oRm.addClass("THSM_col-1 THSM_col-s-3");
                            oRm.writeClasses();
                            oRm.openEnd();
//                                oRm.write('FP');                                 
                                oRm.renderControl(oControl.getAggregation("_HTMLLabelCameraFarPane"));                                                                                                                                                                                                                                         
                            oRm.close('div');   

                        oRm.openStart("div");
                        oRm.addClass("THSM_col-9 THSM_col-s-6");
                        oRm.writeClasses();
                        oRm.openEnd();
                            oRm.renderControl(oControl.getAggregation("_HTMLSliderCameraFarPane"));
                        oRm.close('div');   

                        oRm.openStart("div");
                        oRm.addClass("THSM_col-2 THSM_col-s-2");
                        oRm.writeClasses();
                        oRm.openEnd();
//                            oRm.write('1000');
                            oRm.renderControl(oControl.getAggregation("_HTMLInputCameraFarPane"));                                                                                                                                                                                                                                                                 
                        oRm.close('div');   
                    oRm.close('div');  
// 4. Steuerelement Ende
                oRm.close('div');         
// ControlPanel Ende
                oRm.close('div');          
//  Ende Spielplatz               
            oRm.close('div');                




        },
        _onResize: function()
        {
            console.log('resize to width:', this.$().width());
        },

        onBeforeRendering: function() 
        {
//          ResizeHandler.deregister(this._sResizeHandlerId) 
            this.setupScene();            

        },

        exit: function() {
//            ResizeHandler.deregister(this._sResizeHandlerId) 
         },

        onAfterRendering: function() 
        {
            
            $( "#inputObjPosX" ).val(this.getObjectPositionX());                                     
            $( "#inputObjPosY" ).val(this.getObjectPositionY());                                     
            $( "#inputObjPosZ" ).val(this.getObjectPositionZ());                                     
            $( "#sliderObjPosX" ).val(this.getObjectPositionX());                                     
            $( "#sliderObjPosY" ).val(this.getObjectPositionY());                                     
            $( "#sliderObjPosZ" ).val(this.getObjectPositionZ());                                     

            $( "#inputObjScaleX" ).val(this.getObjectScaleX());                                     
            $( "#inputObjScaleY" ).val(this.getObjectScaleY());                                     
            $( "#inputObjScaleZ" ).val(this.getObjectScaleZ());                                     
            $( "#sliderObjScaleX" ).val(this.getObjectScaleX());                                     
            $( "#sliderObjScaleY" ).val(this.getObjectScaleY());                                     
            $( "#sliderObjScaleZ" ).val(this.getObjectScaleZ());                                     

            $( "#inputObjRotationX" ).val(this.getObjectRotationX());                                     
            $( "#inputObjRotationY" ).val(this.getObjectRotationY());                                     
            $( "#inputObjRotationZ" ).val(this.getObjectRotationZ());                                     
            $( "#sliderObjRotationX" ).val(this.getObjectRotationX());                                     
            $( "#sliderObjRotationY" ).val(this.getObjectRotationY());                                     
            $( "#sliderObjRotationZ" ).val(this.getObjectRotationZ());                                     

            $( "#inputCameraLookAtX" ).val(this.getCameraLookAtX());                                     
            $( "#inputCameraLookAtY" ).val(this.getCameraLookAtY());                                     
            $( "#inputCameraLookAtZ" ).val(this.getCameraLookAtZ());                                     
            $( "#sliderCameraLookAtX" ).val(this.getCameraLookAtX());                                     
            $( "#sliderCameraLookAtY" ).val(this.getCameraLookAtY());                                     
            $( "#sliderCameraLookAtZ" ).val(this.getCameraLookAtZ());                                     
                        
            $( "#inputCameraPosX" ).val(this.getCameraPositionX());                                     
            $( "#inputCameraPosY" ).val(this.getCameraPositionY());                                     
            $( "#inputCameraPosZ" ).val(this.getCameraPositionZ());                                     
            $( "#sliderCameraPosX" ).val(this.getCameraPositionX());                                     
            $( "#sliderCameraPosY" ).val(this.getCameraPositionY());                                     
            $( "#sliderCameraPosZ" ).val(this.getCameraPositionZ());                                     

            $( "#inputCameraAngle" ).val(this.getCameraAngle());                                     
            $( "#sliderCameraAngle" ).val(this.getCameraAngle());                                                 

            $( "#inputCameraRatio" ).val(this.getCameraRatio());                                     
            $( "#sliderCameraRatio" ).val(this.getCameraRatio());             
            
            $( "#inputCameraNearPane" ).val(this.getCameraNearPane());                                                 
            $( "#sliderCameraNearPane" ).val(this.getCameraNearPane());                         
            
            $( "#inputCameraFarPane" ).val(this.getCameraFarPane());                                                 
            $( "#sliderCameraFarPane" ).val(this.getCameraFarPane());                         

//            this._sResizeHandlerId =  ResizeHandler.register(this, this._onResize.bind(this));
        },

//      ---------------------------------------------------
        getMouseX() 
        {
            return this.mouseX;
        },

        setMouseX(iPosx) 
        {
            console.log('setMouseX  : ', iPosx);            
            this.MouseX  = iPosx;
        },       

        getMouseY() 
        {
            return this.mouseY;
        },
        setMouseY(iPosx) 
        {
            console.log('setMouseY  : ', iPosx);            
            this.MouseY  = iPosx;
        },       



        getWebGLRenderer() 
        {
            return this.webGLRenderer;
        },
        getScene() 
        {
            return this.scene;
        },
        getCamera() 
        {
            return this.camera;
        },
//      ---------------------------------------------------
        onChangeSlider: function(iValue) 
        {
            console.log('iValue: ' + iValue);
            this.setObjectPositionX(iValue)             
        },

		incObjectPositionX : function(oEvent)
        {
            this.objectPositionX += (5);
            console.log('this.objectPositionX ' + this.objectPositionX);            
		}  
        ,        
		dimObjectPositionX : function(oEvent)
        {
            this.objectPositionX += (-5);            
        }  
        , 
		incObjectPositionY : function(oEvent)
        {
            this.objectPositionY += (5);
            console.log('this.objectPositionY ' + this.objectPositionY);            
		}  
        ,        
		dimObjectPositionY : function(oEvent)
        {
            this.objectPositionY += (-5);            
        },  
/*
        onclick: function(oEvent) 
        {
            console.log('onclick ' );                
           this.fireSayHello(
               {
                   message: 
//                   this.getLastName() + " says Hello."
                            " says Hello."                   
               }
           )
        },
		onSayHelloHandler: function(oEvent)
		{
			alert("Scene Manager + ", oEvent.getParameter("message"));
		}  
        ,           
*/        
//      ---------------------------------------------------

        getCameraAngle() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.cameraAngle ;
        },
        setCameraAngle(iPosx) 
        {
            console.log('setCameraAngle  : ', iPosx);            
            this.cameraAngle  = iPosx;
        },       
        getCameraRatio() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraRatio;
        },
        setCameraRatio(iPosx) 
        {
            console.log('setCameraRatio  : ', iPosx);            
            this.cameraRatio = iPosx;
        },       
        getCameraNearPane() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraNearPane;
        },
        setCameraNearPane(iPosx) 
        {
            console.log('setCameraNearPane : ', iPosx);            
            this.cameraNearPane = iPosx;
        },               

        getCameraFarPane() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraFarPane;
        },
        setCameraFarPane(iPosx) 
        {
            console.log('setCameraFarPane : ', iPosx);            
            this.cameraFarPane = iPosx;
        },               

        


//      ---------------------------------------------------

        getCameraPositionX() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.cameraPositionX;
        },
        setCameraPositionX(iPosx) 
        {
            console.log('setCameraPositionX  : ', iPosx);            
            this.cameraPositionX = iPosx;
        },       
        getCameraPositionY() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraPositionY;
        },
        setCameraPositionY(iPosx) 
        {
            console.log('setCameraPositionY  : ', iPosx);            
            this.cameraPositionY = iPosx;
        },       
        getCameraPositionZ() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraPositionZ;
        },
        setCameraPositionZ(iPosx) 
        {
            console.log('setCameraPositionZ  : ', iPosx);            
            this.cameraPositionZ = iPosx;
        },               

//      ---------------------------------------------------

        getCameraLookAtX() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.cameraLookAtX;
        },
        setCameraLookAtX(iPosx) 
        {
            console.log('setCameraLookAtX  : ', iPosx);            
            this.cameraLookAtX = iPosx;
        },       
        getCameraLookAtY() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraLookAtY;
        },
        setCameraLookAtY(iPosx) 
        {
            console.log('setCameraLookAtY  : ', iPosx);            
            this.cameraLookAtY = iPosx;
        },       
        getCameraLookAtZ() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.cameraLookAtZ;
        },
        setCameraLookAtZ(iPosx) 
        {
            console.log('setCameraLookAtZ  : ', iPosx);            
            this.cameraLookAtZ = iPosx;
        },               
//      ---------------------------------------------------

        getObjectPositionX() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.objectPositionX;
        },
        setObjectPositionX(iPosx) 
        {
            console.log('setObjectPositionX  : ', iPosx);            
            this.objectPositionX = iPosx;
        },       
        getObjectPositionY() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectPositionY;
        },
        setObjectPositionY(iPosx) 
        {
            console.log('setobjectPositionY  : ', iPosx);            
            this.objectPositionY = iPosx;
        },       
        getObjectPositionZ() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectPositionZ;
        },
        setObjectPositionZ(iPosx) 
        {
            console.log('setobjectPositionZ  : ', iPosx);            
            this.objectPositionZ = iPosx;
        },               
        
//      ---------------------------------------------------

        getObjectScaleX() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.objectScaleX;
        },
        setObjectScaleX(iPosx) 
        {
            console.log('setObjectScaleX  : ', iPosx);            
            this.objectScaleX = iPosx;
        },       
        getObjectScaleY() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectScaleY;
        },
        setObjectScaleY(iPosx) 
        {
            console.log('setobjectScaleY  : ', iPosx);            
            this.objectScaleY = iPosx;
        },       
        getObjectScaleZ() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectScaleZ;
        },
        setObjectScaleZ(iPosx) 
        {
            console.log('setobjectScaleZ  : ', iPosx);            
            this.objectScaleZ = iPosx;
        },               


//      ---------------------------------------------------

        getObjectRotationX() 
        {
//            console.log('getObjectPositionX  : ', this.ObjectPositionX);                        
            return this.objectRotationX;
        },
        setObjectRotationX(iPosx) 
        {
            console.log('setObjectRotationX  : ', iPosx);    
//            180 * Math.PI / 180                    
//            this.objectRotationX = iPosx  * Math.PI / 180;
            this.objectRotationX = iPosx;            
        },       
        getObjectRotationY() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectRotationY;
        },
        setObjectRotationY(iPosx) 
        {
            console.log('setObjectRotationY  : ', iPosx);            
//            this.objectRotationY = iPosx  * Math.PI / 180;
            this.objectRotationY = iPosx;            
        },       
        getObjectRotationZ() 
        {
//            console.log('getObjectPositionY  : ', this.ObjectPositionY);                        
            return this.objectRotationZ;
        },
        setObjectRotationZ(iPosx) 
        {
            console.log('setobjectRotationZ  : ', iPosx);            
//            this.objectRotationZ = iPosx  * Math.PI / 180;
            this.objectRotationZ = iPosx;            
        },               

//      ---------------------------------------------------


        setupScene: function(  
                            ) 
        {

//            var padding_horiz            = (window.innerWidth / 10) * 2;
            var padding_horiz            = 0;            
            var padding_vert             = (window.innerHeight / 4) * 2;
//            var padding_grid_horiz       = (window.innerWidth / 2);
            var padding_grid_horiz       = 0;

            var padding_grid_vert        = (window.innerHeight / 6) * 2;

            var renderAreaHeight         = window.innerHeight;
            var renderAreaWidth          = window.innerWidth;

            console.log('setupScene : renderAreaWidth  : ', renderAreaWidth);
            console.log('setupScene : renderAreaHeight  : ', renderAreaHeight);

//  max renderAreaWidth 1280    
            if (renderAreaWidth  >= 1280  )
            {
                console.log('setupScene : renderAreaWidth >= 1280 : ', renderAreaWidth);           
                renderAreaWidth          = 1280;           
                padding_grid_horiz       = (( window.innerWidth ) / 2);       
                padding_horiz            =  (1280 - 1152 ) / 2.1;                                    
            }

            if (renderAreaWidth  < 1280 && renderAreaWidth  >= 1024  )
            {
                console.log('setupScene : renderAreaWidth >= 1024 : ', renderAreaWidth);                
                padding_grid_horiz       = (( window.innerWidth  + ( 1280 - renderAreaWidth)) / 2);       
                padding_horiz            =  (renderAreaWidth - 1152 ) / 2.1;                                    
            }

            if (renderAreaWidth  < 1024 && renderAreaWidth  >= 320 )
            {
                console.log('setupScene : renderAreaWidth >= 320 : ', renderAreaWidth);                                
//                padding_horiz       = (window.innerWidth / 9) * 2;                
                padding_horiz       =  0 ;                                
//                padding_grid_horiz       = 0;                      
                padding_grid_horiz       = (window.innerWidth / 4);                          
                act_CameraPositionX     = -80;
                act_CameraPositionZ     = -40;
                act_CameraAngle         = 75;    
            }
            if (renderAreaWidth  < 320)
            {
                console.log('setupScene : renderAreaWidth < 320 : ', renderAreaWidth);                                
                padding_horiz           =  0 ;                    
//                padding_grid_horiz      = 0;                
                padding_grid_horiz       = (window.innerWidth / 4);                                          
                act_CameraPositionX     = -200;
                act_CameraPositionZ     = -200;
                act_CameraAngle         = 40;
            }


            console.log('setupScene : window.innerWidth  : ', window.innerWidth);
            console.log('setupScene : window.innerHeight  : ', window.innerHeight);

            console.log('setupScene : padding_horiz  : ', padding_horiz);
            console.log('setupScene : padding_grid_horiz  : ', padding_grid_horiz);
            console.log('setupScene : padding_vert  : ', padding_vert);


            renderAreaHeight    = window.innerHeight -  padding_vert ;
            renderAreaWidth     = window.innerWidth  -  padding_horiz - padding_grid_horiz;

            console.log('setupScene : renderAreaWidth  : ', renderAreaWidth);
            console.log('setupScene : renderAreaHeight  : ', renderAreaHeight);


//          wird initial aufgerufen  (onBeforeRendering)         
//          Rand links/ Rechts berechnen
//          f??r die AspectRatio der Camera            
            const cameraAreaHeight    = window.innerHeight;
            const cameraAreaWidth     = window.innerWidth;

            const act_CameraRatio     = renderAreaWidth / renderAreaHeight;
            console.log('setupScene : window.innerWidth  : ', window.innerWidth);
            console.log('setupScene : window.innerHeight  : ', window.innerHeight);

            console.log('setupScene : renderAreaWidth  : ', renderAreaWidth);
            console.log('setupScene : renderAreaHeight  : ', renderAreaHeight);


//            const act_CameraRatio     = 0.4;            
//            const act_CameraRatio       = 1;                        
//            var  iradiusTop = 10;

//          passender Bildausschnitt f??r Devices
            var act_CameraPositionX     = -60;
            var act_CameraPositionZ     = -80;
            var act_CameraAngle         = 90;


            console.log('setupScene : act_CameraPositionX  : ', act_CameraPositionX);
            console.log('setupScene : act_CameraPositionZ  : ', act_CameraPositionZ);
            console.log('setupScene : act_CameraAngle  : ', act_CameraAngle);

            this.setCameraPositionX(act_CameraPositionX);
            this.setCameraPositionY(75);            
            this.setCameraPositionZ(act_CameraPositionZ);

            this.setCameraLookAtX(30);
            this.setCameraLookAtY(75);            
            this.setCameraLookAtZ(30);

            this.setCameraAngle(act_CameraAngle);
//            this.setCameraRatio(.666);            

            this.setCameraRatio(act_CameraRatio);                        
            this.setCameraNearPane(.10);
            this.setCameraFarPane(1000);
    

            this.setObjectPositionX(50); 
            this.setObjectPositionY(70);             
            this.setObjectPositionZ(-20);    

            this.setObjectScaleX(3); 
            this.setObjectScaleY(3);             
            this.setObjectScaleZ(3);    
            
            this.setObjectRotationX(-90); 
            this.setObjectRotationY(0);             
            this.setObjectRotationZ(0);    
            
            this.setMouseX(0);
            this.setMouseY(0);            

//  Control-Input initialisieren
//            control.oHTMLInputCameraRatio.value()  = act_CameraRatio;
//            this.getAggregation("_HTMLInputCameraRatio").value = act_CameraRatio;
//            document.getElementByID("inputCameraRatio").value = act_CameraRatio;
 // $( "#inputCameraRatio" ).val(act_CameraRatio); 
            
            console.log('setupScene : renderAreaHeight  : ', renderAreaHeight);
            console.log('setupScene : renderAreaWidth   : ', renderAreaWidth);         
            console.log('setupScene : this.getCameraRatio()   : ', this.getCameraRatio());         
//          Clock f??r Messung des FrameUpdates initialisieren
            this.clock = new THREE.Clock();               
  

//          Scene anlegen
            this.scene = new THREE.Scene();
            // Ersatz f??r : this.webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
//            this.scene.background = new THREE.Color( 0xeeeeee );            
            this.scene.background = new THREE.Color( 0xd4e5f7 );            


            

//          create a camera, which defines where we're looking at.
//          PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
//          .fov : Float
//          Camera frustum vertical field of view, from bottom to top of view, in degrees. Default is 50.
//          .aspect : Float
//          Camera frustum aspect ratio, usually the canvas width / canvas height. Default is 1 (square canvas).
//          .near : Float
//          Camera frustum near plane. Default is 0.1.
//          .far : Float
//          Camera frustum far plane. Default is 2000.

            this.camera      = new THREE.PerspectiveCamera(this.getCameraAngle(), this.getCameraRatio(), this.getCameraNearPane(), this.getCameraFarPane());            
            this.camera.name = "Camera01";   
// Camera   positionieren und ausrichten
            this.getCamera().position.x = this.getCameraPositionX();
            this.getCamera().position.y = this.getCameraPositionY();
            this.getCamera().position.z = this.getCameraPositionZ();
            this.getCamera().lookAt(new THREE.Vector3(this.getCameraLookAtX(), this.getCameraLookAtY(), this.getCameraLookAtZ()));

// -----------------------------------------            
// Licht
// -----------------------------------------
//            this.scene.add(new THREE.AmbientLight(0x777777));
            this.scene.add(new THREE.AmbientLight(0xDDDDDD));


//          Licht Zielscheibe     

            var light1 = new THREE.DirectionalLight(0xdfebff, 0.5);
            light1.position.set(50, 90, 90);
//            light1.position.multiplyScalar(1.3);
            light1.castShadow = true;
            this.scene.add(light1);
            const targetObjectlight1       = new THREE.Object3D( 50, 50, 5);
//          Hilfsobjekt zum Sichtbarmachen der Lichttargets            
//            const targetObjectlight1Box      = new THREE.BoxGeometry( 50, 50, 5 );            
//            const targetObjectlight1material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );         
//            const targetObjectlight1         = new THREE.Mesh( targetObjectlight1Box, targetObjectlight1material );      
            targetObjectlight1.position.x = 50;
			targetObjectlight1.position.y = 75;
			targetObjectlight1.position.z = 100;            
            this.scene.add(targetObjectlight1);
            light1.target = targetObjectlight1;
            this.scene.add(light1.target);

//          Zeigt Position des Lichtes an            
//            const helper1 = new THREE.DirectionalLightHelper( light1, 1 );
//            this.scene.add(helper1);

// Licht Seitenwand            
//              0xdfebff
            var light2 = new THREE.DirectionalLight(0x0000ff, 0.75);
            light2.position.set(90, 70, 30);
//            light2.position.multiplyScalar(1.3);
            light2.castShadow = true;
            this.scene.add(light2);

            const targetObjectlight2       = new THREE.Object3D( 5, 50, 50);
//          Hilfsobjekt zum Sichtbarmachen der Lichttargets            
//            const targetObjectlight2Box      = new THREE.BoxGeometry( 5, 50, 50 );            
//            const targetObjectlight2material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );         
//            const targetObjectlight2         = new THREE.Mesh( targetObjectlight2Box, targetObjectlight2material );      
            targetObjectlight2.position.x = 100;
			targetObjectlight2.position.y = 70;
			targetObjectlight2.position.z = 30;            
            this.scene.add(targetObjectlight2);
            light2.target = targetObjectlight2;
            this.scene.add(light2.target);
//          Zeigt Position des Lichtes an            
//            const helper = new THREE.DirectionalLightHelper( light2, 1 );
//            this.scene.add(helper);




// vielleicht liegt's am material ?
// Beispiel mi funktionierendem Marterial
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_text.html
//            var particleLight = new THREE.Mesh(
//                                                new THREE.SphereGeometry( 4, 8, 8 ),
//                                                new THREE.MeshBasicMaterial( { color: 0xffffff } )
//            );
//            this.scene.add( particleLight );

//            const pointLight = new THREE.PointLight( 0xffffff, 2, 800 );
/*
            const pointLight = new THREE.PointLight( 0xffffff, 2, 30, 1 );            

            this.scene.add( pointLight );
            pointLight.position.x = 100;
			pointLight.position.y = 70;
			pointLight.position.z = 30;
*/
//          particleLight.position.x = Math.sin( timer * 7 ) * 300;
//			particleLight.position.y = Math.cos( timer * 5 ) * 400;
//			particleLight.position.z = Math.cos( timer * 3 ) * 300;

//            particleLight.position.x = 90;
//			particleLight.position.y = 70;
//			particleLight.position.z = 30;

//            particleLight.add( pointLight );
// Licht Ende


//           this.webGLRenderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas")});
           this.webGLRenderer = new THREE.WebGLRenderer();      
/*
           this.webGLRenderer = new THREE.WebGLRenderer({
            antialias: "true",
            alpha: "true"
           });       
*/        
           
           this.resizeCanvasToDisplaySize();
//          create a render and set the size
/*
            this.webGLRenderer = new THREE.WebGLRenderer({
               antialias: "true",
               alpha: "true"
              });       
          
              

//          veraltet : zieht nicht mehr
            this.webGLRenderer.setClearColor(0xFFeeee, 0);            
            this.webGLRenderer.setSize(renderAreaWidth, renderAreaHeight);       
*/    
            this.webGLRenderer.shadowMapEnabled = true;
            this.webGLRenderer.shadowMapEnabled = false;

//            https://stackoverflow.com/questions/7956442/detect-clicked-object-in-three-js

//            https://stackoverflow.com/questions/17638933/three-js-clickable-objects            
//            https://github.com/jasonChen1982/three.interaction.js
//          new a interaction, then you can add interaction-event with your free style
//            const interaction = new THREE.Interaction(this.webGLRenderer, this.scene, this.camera);
//            var interaction = new THREE.Interaction(this.webGLRenderer, this.scene, this.camera);
//          Inhalt aufbauen

//          const controls = new THREE.OrbitControls( this.camera, this.webGLRenderer.domElement );
//          controls.minDistance = 2;
//          controls.maxDistance = 20;
//          controls.addEventListener( 'change', this.renderScene.bind(this) );            


//          Eventlistener f??r Mausbewegung
//          Beispiel : https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_bumpmap.html
//         https://www.mediaevent.de/javascript/event-listener.html
            document.mouseY = 0;
            document.addEventListener( 'mousedown', this.onDocumentMouseMove );


            this._sceneContent();     
//          ThreeJS renderer            
            this.renderScene();            
        }
        ,
        resizeCanvasToDisplaySize : function () {
//            https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container            
            const canvas = this.webGLRenderer.domElement;
//            const width = canvas.clientWidth;
//            const height = canvas.clientHeight;

            var width  = canvas.width;
            var height = canvas.width * 1.5;

            console.log('resizeCanvasToDisplaySize : canvas.clientWidth  : ', canvas.clientWidth);
            console.log('resizeCanvasToDisplaySize : canvas.width  : ', canvas.width);
            console.log('resizeCanvasToDisplaySize : canvas.clientHeight  : ', canvas.clientHeight);
            console.log('resizeCanvasToDisplaySize : canvas.height  : ', canvas.height);


//            if (canvas.width !== width ||canvas.height !== height) {
              // you must pass false here or three.js sadly fights the browser
//              this.webGLRenderer.setSize(width, height, false);
              this.webGLRenderer.setSize(width, height, false);              
//              camera.aspect = width / height;
//              camera.updateProjectionMatrix();
          
              // set render target sizes here
//            }
          }        


        ,
        onDocumentMouseMove : function ( event ) 
        {
//          this.mouseX = ( event.clientX - windowHalfX );
//          this.mouseY = ( event.clientY - windowHalfY );
//          this.setMouseX(event.clientX - 200);
//          this.setMouseY(event.clientY - 200);     

//            this.mouseX = ( event.clientX - 200 );
            document.mouseY = ( event.clientY - 200 );

//            _privMouseX = ( event.clientX - 200 );
//            _privMouseY = ( event.clientY - 200 );

//          console.log('onDocumentMouseMove this.getMouseX() : ', this.getMouseX() , this.getMouseY());                        
//            console.log('onDocumentMouseMove this.getMouseX() : ', this.mouseX , this.mouseY);                                    
//            console.log('onDocumentMouseMove _privMouseY : ', _privMouseX , _privMouseY);                                                
            console.log('onDocumentMouseMove document.mouseY : ', document.mouseY);                                                
//            this._privateMethod();
        },        

//      from THREE.SceneUtils.createMultiMaterialObject
        createMultiMaterialObject : function ( geometry, materials ) 
        {
            const group = new THREE.Group();
            for ( let i = 0, l = materials.length; i < l; i ++ ) {
                group.add( new THREE.Mesh( geometry, materials[ i ] ) );
            }
            return group;
        },

        _sceneContent: function( ) 
        {
//          Boden einziehen            
            var geoFloor                = new THREE.PlaneGeometry(100, 150, 40, 40);
//            var matFloor                = new THREE.MeshBasicMaterial( {color: 0xCCCCEE, side: THREE.DoubleSide } );      
            var matFloor                = new THREE.MeshBasicMaterial( {color: 0x051424, side: THREE.DoubleSide } );                  
            var wireFrameMatFloor       = new THREE.MeshBasicMaterial();
            wireFrameMatFloor.wireframe = false;      

//          ehedem ThreeJS Methode, jetzt lokal
//          var floor                   = THREE.SceneUtils.createMultiMaterialObject(geoFloor, [matFloor, wireFrameMatFloor]);                                    
            var floor                   = this.createMultiMaterialObject(geoFloor, [matFloor, wireFrameMatFloor]);  
            floor.name                  = "floor";                                              
            floor.position.x            = 50;
            floor.position.y            = -1;                     
            floor.position.z            = 25;            
            floor.rotation.x            = 90 * (Math.PI / 180);
            floor.receiveShadow         = true;
            this.getScene().add(floor);			
            
//          W??nde
//          ---------------------------------------------------------------
            const gradientformat =  THREE.LuminanceFormat;                    
//          const format = ( this.webGLRenderer.capabilities.isWebGL2 ) ? THREE.RedFormat : THREE.LuminanceFormat;               
            var alphaIndex = 1;
//          Farben aus ColorMap            
            const colors = new Uint8Array( alphaIndex + 2 );
            for ( let c = 0; c <= colors.length; c ++ ) {
                colors[ c ] = ( c / colors.length ) * 256;
            }
            const gradientMap = new THREE.DataTexture( colors, colors.length, 1, gradientformat );
            gradientMap.needsUpdate = true;


//          Rueckwand
//          Beispiel mit .2 Schritten            
            var diffuseColorAlpha      = .6;
            var diffuseColorBeta       = .6;
            var diffuseColorGamma      = .9;
//            const diffuseColor = new THREE.Color().setHSL( alpha, 0.5, gamma * 0.5 + 0.1 ).multiplyScalar( 1 - beta * 0.2 );
            var diffuseColor         = new THREE.Color().setHSL( diffuseColorAlpha, 0.5, diffuseColorGamma * 0.5 + 0.1 ).multiplyScalar( 1 - diffuseColorBeta * 0.2 );            

/*
            const rueckwandmaterial    = new THREE.MeshToonMaterial( 
            {
                color: diffuseColor,
                gradientMap: gradientMap
            } );
*/            
const rueckwandmaterial = [
    new THREE.MeshToonMaterial( {color: diffuseColor, gradientMap: gradientMap} ),
    new THREE.MeshToonMaterial( {color: diffuseColor, gradientMap: gradientMap} )
    // side
];
/*
            const rueckwandmaterial = [
                new THREE.MeshPhongMaterial( { color: 0x123456 , flatShading: true} ), // front
                new THREE.MeshPhongMaterial( { color: 0x123456 } )              
                // side
            ];
*/
            const rueckwandgeometry       = new THREE.BoxGeometry( 1, 200, 100 )                       
            const rueckwandmesh           = this.createMultiMaterialObject(rueckwandgeometry, [rueckwandmaterial, wireFrameMatFloor]);              
            rueckwandmesh.position.x      = 50;
            rueckwandmesh.position.y      = 100;                     
            rueckwandmesh.position.z      = 100;     

            rueckwandmesh.rotation.y      = 90  * (Math.PI / 180);                 
            rueckwandmesh.receiveShadow   = true;
            this.getScene().add(rueckwandmesh);          
            
//          Seitenwand  
            diffuseColorAlpha      = .2;
            diffuseColorBeta       = .2;
            diffuseColorGamma      = .8;
//            const diffuseColor = new THREE.Color().setHSL( alpha, 0.5, gamma * 0.5 + 0.1 ).multiplyScalar( 1 - beta * 0.2 );
            diffuseColor         = new THREE.Color().setHSL( diffuseColorAlpha, 0.5, diffuseColorGamma * 0.5 + 0.1 ).multiplyScalar( 1 - diffuseColorBeta * 0.2 );            

/*            
            const seitenwandmaterial    = new THREE.MeshToonMaterial( 
            {
                color: diffuseColor,
                gradientMap: gradientMap
            } );
*/
//         , flatShading: true

//  Seitenwand als MultiMaterialObject
/*
            const seitenwandmaterial = [
                new THREE.MeshPhongMaterial( { color: 0x333333 } ), // front
                new THREE.MeshPhongMaterial( { color: 0x123456 } ) // side
            ];
            const seitenwandgeometry       = new THREE.BoxGeometry( 1, 200, 150 )                       
            const seitenwandmesh           = this.createMultiMaterialObject(seitenwandgeometry, [seitenwandmaterial, wireFrameMatFloor]);        
*/           

//  Seitenwand als Objekt mit Textures 
    const texLoader = new THREE.TextureLoader();
    const mat1 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/HotMocka-CT-060-033_5.jpg')});
	const mat2 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/Tiamat-CT-060-085_5.jpg')});
	const mat3 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/ParadiseJungle-112456_4.jpg')});
	const mat4 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/ParadiseJungle-112456_4.jpg')});
	const mat5 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/ParadiseJungle-112456_4.jpg')});
	const mat6 = new THREE.MeshBasicMaterial({color: 0xffffff, map: texLoader.load('assets/img/ParadiseJungle-112456_4.jpg')});

	var material = [
		mat1,
		mat2,
		mat3,
		mat4,
		mat5,
		mat6,
	];    
    const seitenwandgeometry       = new THREE.BoxGeometry( 1, 200, 150 )                       
//    const seitenwandmesh           = this.createMultiMaterialObject(seitenwandgeometry, [seitenwandmaterial, wireFrameMatFloor]);        
    const seitenwandmesh           = new THREE.Mesh( seitenwandgeometry, material );



            seitenwandmesh.position.x      = 100;
            seitenwandmesh.position.y      = 100;                     
            seitenwandmesh.position.z      = 25;     
            seitenwandmesh.receiveShadow   = true;
            this.getScene().add(seitenwandmesh);          






//  https://stackoverflow.com/questions/10747510/how-to-rotate-a-three-js-vector3-around-an-axis
//            https://codepen.io/arpo/pen/LkXYGQ/?editors=0010
// ---------------------------
//var pos = new THREE.Vector3(-150, -20, 0);

//var alteredDir = dir.clone();
//var axis = new THREE.Vector3( 0, 0, 1 );
//var deg = 90;
//var angle = deg * (Math.PI / 180);
//alteredDir.applyAxisAngle( axis, angle ); 
//var arrow2 = new THREE.ArrowHelper(alteredDir, pos, 150, 0xff0000);

//          Richtungspfeile
            var pos = new THREE.Vector3(0, 0, 0);
            var dirX = new THREE.Vector3(1, 0, 0);
            var arrowX = new THREE.ArrowHelper(dirX, pos, 100, 0x00ff00);
            this.getScene().add(arrowX);

            var dirY = new THREE.Vector3(0, 1, 0);
            var arrowY = new THREE.ArrowHelper(dirY, pos, 150, 0xff0000);
            this.getScene().add(arrowY);
            var dirZ = new THREE.Vector3(0, 0, 1);
            var arrowZ = new THREE.ArrowHelper(dirZ, pos, 100, 0x0000ff);
            this.getScene().add(arrowZ);

//          Collada-Model laden 
//          Verhalten von Async Loader siehe :            
//          https://stackoverflow.com/questions/34374023/three-js-collada-load-multiple-collada-objects-in-three-js            

            var StartTime  = new Date();            
            var colLoader  = new THREE.ColladaLoader();
//          ------------------------------------------------------------------------------
//          Schriftzug            
            var dae1;
//          Zugriff auf die Scene in anonymer Methode gew??hrleisten
            var loc_scene   = this.scene;
// where_software_meets_design_text02.dae           
            colLoader.load('assets/models/ThreeSceneManager/where_software_meets_design_text03.dae', function (collada)
            {
                dae1 = collada.scene;
            }, 
            function(xhr )
            {
               if(xhr.loaded >= xhr.total)
               {
                 var EndTime = new Date(), TotalTime;
                 EndTime     = StartTime - EndTime;
                 TotalTime   = Math.abs(EndTime);
//                 console.log("Object 2 loaded\nLoaded in: " + TotalTime + "ms.");
                 setTimeout(function()
                 {
                    try{                     

                        var dae1_diffuseColorAlpha      = .6;
                        var dae1_diffuseColorBeta       = .6;
                        var dae1_diffuseColorGamma      = .9;
                        var dae1_diffuseColor           = new THREE.Color().setHSL( dae1_diffuseColorAlpha, 0.5, dae1_diffuseColorGamma * 0.5 + 0.1 ).multiplyScalar( 1 - dae1_diffuseColorBeta * 0.2 );            
                        const dae1_material = [
                            new THREE.MeshToonMaterial( {color: dae1_diffuseColor, gradientMap: gradientMap} ),
                            new THREE.MeshToonMaterial( {color: dae1_diffuseColor, gradientMap: gradientMap} )
                        ];

/*                               
                        const dae1_mesh           = this.createMultiMaterialObject(dae1, [dae1_material, wireFrameMatFloor]);              
                        dae1_mesh.scale.x = 30;
                        dae1_mesh.scale.y = 50;
                        dae1_mesh.scale.z = 100;

                        dae1_mesh.position.x = 50;                   
                        dae1_mesh.position.y = 150;      
                        dae1_mesh.position.z = 95;          
                        dae1_mesh.rotation.z = 180 * (Math.PI / 180);                                 
                        dae1_mesh.name    = "claim01";         
//                 Wenn geladen, der Scene hinzuf??gen                   
                        loc_scene.add(dae1_mesh);         
 */                           
  
                        var textureLoader = new THREE.TextureLoader();
                        var texture = textureLoader.load('assets/img/Dummy02.jpg');

//                        loader.load( './car.dae', function ( collada ) {
//    dae1.scene.traverse(function (node) 
                        dae1.traverse(function (node) 
                        {

                            if (node.isMesh) {
//                                debugger    
                                console.log("node.name : " + node.name);                                                             
                                node.material.map = texture;
                                console.log("node.material.map.uuid : " + node.material.map.uuid);                                                                                             
                            }
                        });

//});
// where_software_meets_design_text02.dae           
dae1.scale.x = 30;
dae1.scale.y = 50;
dae1.scale.z = 100;


                        dae1.scale.x = 3;
                        dae1.scale.y = 5;
                        dae1.scale.z = 10;

                        dae1.position.x = 50;                   
//                        dae1.position.y = 150;      
                        dae1.position.y = 120;                              
                        dae1.position.z = 95;        
// where_software_meets_design_text02.dae                                     
//                        dae1.rotation.z = 180 * (Math.PI / 180);        

                        dae1.rotation.y = 180 * (Math.PI / 180);                                                         
                        dae1.name    = "claim01";         
//                 Wenn geladen, der Scene hinzuf??gen                   
                        loc_scene.add(dae1);         


                    } catch (error)                              
                    {}
//                       console.log("Object 2 adjusted scales");
                    }, TotalTime);
               }
            });             
//          ------------------------------------------------------------------------------
//          Dartboard            
            var board01;
//          Zugriff auf die Scene in anonymer Methode gew??hrleisten
            var loc_scene   = this.scene;  
//            colLoader.load('assets/models/ThreeSceneManager/Dartboard_1_4.dae', function (collada)
            colLoader.load('assets/models/ThreeSceneManager/Scheibe_1_5.dae', function (collada)            
            {
                board01 = collada.scene;
            }, 
            function(xhr )
            {
               if(xhr.loaded >= xhr.total)
               {
                 var EndTime = new Date(), TotalTime;
                 EndTime     = StartTime - EndTime;
                 TotalTime   = Math.abs(EndTime);
//                 console.log("Object 2 loaded\nLoaded in: " + TotalTime + "ms.");
                 setTimeout(function()
                 {
                    try{                                      
                    board01.scale.x = 3;
                    board01.scale.y = 1;
                    board01.scale.z = 3;

                    board01.position.x = 50;                   
                    board01.position.y = 75;      
                    board01.position.z = 97;          
//                    board01.rotation.y = 180 * (Math.PI / 180);                                 
                    board01.rotation.x = -90 * (Math.PI / 180);                                                     
//                    board01.rotation.y = -30 * (Math.PI / 180);                                                     
                    board01.name    = "board01";     
                } catch (error)                              
                {}                                                    
//                 Wenn geladen, der Scene hinzuf??gen                   
                   loc_scene.add(board01);                   
                   console.log("board01 adjusted scales");
                 }, TotalTime);
               }
            });             
//          ------------------------------------------------------------------------------
//          Pfeil            
            var cylinder;
//            var pfeil01;
//          Zugriff auf die Scene in anonymer Methode gew??hrleisten
//  Pfeil01_1_4.dae
            var loc_scene   = this.scene;
//            colLoader.load('assets/models/ThreeSceneManager/Pfeil_1_4.dae', function (collada)
            colLoader.load('assets/models/ThreeSceneManager/Pfeil01_1_5.dae', function (collada)            
            {
                cylinder = collada.scene;
            }, 
            function(xhr )
            {
               if(xhr.loaded >= xhr.total)
               {
                 var EndTime = new Date(), TotalTime;
                 EndTime     = StartTime - EndTime;
                 TotalTime   = Math.abs(EndTime);

//                 console.log("Object 2 loaded\nLoaded in: " + TotalTime + "ms.");
                 setTimeout(function()
                 {
                   cylinder.name    = "Cylinder01";                                     
//                 Wenn geladen, der Scene hinzuf??gen                   
                   loc_scene.add(cylinder);          

                   cylinder.rotation.x = 0;                    
                   cylinder.rotation.z = 90;
                   cylinder.rotation.y = -45;                                                      
//                   cylinder.rotation.y = 180 * (Math.PI / 180);                                                                         
                   console.log("pfeil01 adjusted scales");
                 }, TotalTime);
               }
            });             



// ---------------------------
/*   ersetzt durch Pfeil         
// ---------------------------
//          Objekt erzeugen
            var cylinder = this._createMesh(new THREE.CylinderGeometry(this.getObjectRadiusTop(), this.getObjectRadiusBottom(), this.getObjectHeight(), 32));
//          Objekt der scene hinzuf??gen
            this.getScene().add(cylinder);
//          mesh positionieren            
            cylinder.position.set(this.getObjectPositionZ(), this.getObjectPositionY(), this.getObjectPositionX());
//          mesh skalieren
            cylinder.scale.set(this.getObjectScaleX(),this.getObjectScaleY(),this.getObjectScaleZ());

//            cylinder.cursor = 'pointer';
//            cylinder.on('click', function(ev) {});            
//            cylinder.attachBrowserEvent("click", function(oEvent) 
//            {
//                console.log('cylinder click : ' + oEvent.target);   
//            });

//            this.scene.on('click', ev => {
//                console.log(ev);
//            })
*/
        } ,  


        _createMesh: function(geom)
        {
// assign two materials
            var meshMaterial       = new THREE.MeshBasicMaterial( {color: 0x222222} );            
            meshMaterial.side      = THREE.DoubleSide;
            var wireFrameMat       = new THREE.MeshBasicMaterial();
            wireFrameMat.wireframe = true;


// create a multimaterial (lokale Funktion)
            var mesh = this.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);                                                
            mesh.name = "Cylinder01";
            return mesh;
        },

        renderScene: function () 
        {
            requestAnimationFrame(this.renderScene.bind(this));

            var claim01 = this.getScene().getObjectByName( "claim01", true );  
            try 
            {

//                var delta = this.clock.getDelta();
//                console.log("delta : ", delta);     
//              30 Grad / sek                
//                claim01.rotation.z += delta * 30 * Math.PI / 180;            
//                claim01.rotation.y += .001;                                 
            } catch (error) 
            {
                console.error(error.message);
            } finally {
                // clean up
            }            

            var board01 = this.getScene().getObjectByName( "board01", true );  
            try 
            {

//              var time  = clock.getElapsedTime();
//                var delta = this.clock.getDelta();
//                console.log("delta : ", delta);     
//              30 Grad / sek                
//                board01.rotation.x += delta * 30 * Math.PI / 180;            
//                board01.position.x += .1;                            
//                claim01.rotation.y += .001;                                 
            } catch (error) 
            {
                console.error(error.message);
            } finally {
                // clean up
            }            


            var cylinder = this.getScene().getObjectByName( "Cylinder01", true );     
            try 
            {
//          altes Objekt l??schen            
//            this.getScene().remove(cylinder);
//            cylinder = this._createMesh(new THREE.CylinderGeometry(this.getObjectRadiusTop(), this.getObjectRadiusBottom(), this.getObjectHeight(), 32));
//            // neues Object hinzu
//            this.getScene().add(cylinder);
//          Objekt positionieren            
//                var delta = this.clock.getDelta();
                cylinder.scale.set(this.getObjectScaleX(),this.getObjectScaleY(),this.getObjectScaleZ());
                cylinder.position.set(this.getObjectPositionX(), this.getObjectPositionY(), this.getObjectPositionZ());
                cylinder.rotation.set(this.getObjectRotationX() * Math.PI / 180, this.getObjectRotationY() * Math.PI / 180, this.getObjectRotationZ() * Math.PI / 180);
//                console.log("this.getObjectPositionX() ", this.getObjectPositionX());                
//                console.log("this.getObjectPositionY() ", this.getObjectPositionY());                                
//                console.log("this.getObjectPositionZ() ", this.getObjectPositionZ());                                
//                cylinder.rotation.y += delta * 30 * Math.PI / 180;                          
//                cylinder.rotation.y = 180 * Math.PI / 180;                          
//                cylinder.rotation.set(this.getObjectRotationZ() , this.getObjectRotationY(), this.getObjectRotationX());                
            } catch (error) 
            {
                console.error(error.message);
            } finally {
                // clean up
            }            

            if(this.getObjectPositionX() == 100 && this.getObjectPositionY() == 50 && this.getObjectPositionZ() == 50)
            {
               console.log("Der Kandidat hat 100 Punkte !");

            }

            var pfeil01 = this.getScene().getObjectByName( "pfeil01", true );  
            try 
            {

                var targetX = this.getMouseX() * .001;
				var targetY = this.getMouseY() * .001;
//                console.log("renderScene this.getMouseX() : " + this.getMouseX() + " this.getMouseY() : " + this.getMouseY());
//                console.log("renderScene this.getMouseX() : " + this.MouseX + " this.getMouseY() : " + this.MouseY);
if (this.MouseX != 0 && this.MouseY != 0)
//                if (document.mouseY != 0 )
                {
                    console.log("renderScene document.mouseY : " + document.mouseY);                    
//                    console.log("renderScene setObjectPositionX : " + (this.getObjectPositionX() + ( 0.05 * targetX )));                    
//                    this.scene.rotation.y += 0.05 * ( targetX - pfeil01.rotation.y );
//                    this.getScene().rotation.y += 0.05 * ( pfeil01.rotation.y );                    
//                    this.setObjectPositionX(this.getObjectPositionX() +  targetX );
                    this.getScene().position.x =  ( document.mouseX );
                    this.getScene().position.y =  ( document.mouseY );
//                    this.getCamera().position.x  += ( document.mouseX );         
//                    this.getCamera().position.y  += ( document.mouseY );         

//                    this.mouseX = 0;
//                    this.mouseY = 0;        
                    document.mouseY  = 0;          
                }
                else
                {
                    this.getCamera().position.x = this.getCameraPositionX();
                    this.getCamera().position.y = this.getCameraPositionY();
                    this.getCamera().position.z = this.getCameraPositionZ();
                    this.getCamera().lookAt(new THREE.Vector3(this.getCameraLookAtX(), this.getCameraLookAtY(), this.getCameraLookAtZ()));            
                    this.getCamera().fov        = this.getCameraAngle();
                    this.getCamera().aspect     = this.getCameraRatio();
                    this.getCamera().near       = this.getCameraNearPane();
                    this.getCamera().far        = this.getCameraFarPane();         
//  f??r angle,ratio, ...
                    this.getCamera().updateProjectionMatrix();   
                }
                
                
            } catch (error) 
            {
                console.error(error.message);
            } finally {
                // clean up
            }            


//          render aufrufen
            this.getWebGLRenderer().render(this.getScene(), this.getCamera());
        }

    });
}
)