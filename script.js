// Get the element to be moved
var floatingText = document.getElementById("floatingText");

// Variables to keep track of mouse position and element position
var offsetX, offsetY;

// Function to handle mouse down event
function mouseDown(event) {
  // Calculate the offset between mouse click position and element position
  offsetX = event.clientX - floatingText.offsetLeft;
  offsetY = event.clientY - floatingText.offsetTop;

  // Add event listeners for mouse move and mouse up events
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

// Function to handle mouse move event
function mouseMove(event) {
  // Calculate new element position based on mouse position and offset
  var newX = event.clientX - offsetX;
  var newY = event.clientY - offsetY;

  // Update element position
  floatingText.style.left = newX + "px";
  floatingText.style.top = newY + "px";
}

// Function to handle mouse up event
function mouseUp() {
  // Remove event listeners for mouse move and mouse up events
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);
}

// Add event listener for mouse down event on the draggable element
floatingText.addEventListener("mousedown", mouseDown);

$(document).ready(function(){ 

  $.each($('div.progress-bar'),function(){
      $(this).css('width', $(this).attr('aria-valuenow')+'%');
  });
  

});

function togglePlanet(Planet,gravity,diameter,length,mass) {
document.getElementById("planet-icon").style.backgroundImage="url('http://icons.veryicon.com/png/Nature/Solar%20System/"+Planet+".png')";
document.getElementById("glow").innerHTML=Planet;
  
  document.getElementById("gravity").innerHTML='Gravity';
  document.getElementById("diameter").innerHTML='Diameter';
  document.getElementById("length").innerHTML='Length of the Day';
  document.getElementById("mass").innerHTML='Mass';
  
  var grav=(gravity*100)/3;
  var diam=(diameter*100)/12;
  var len=(length*100)/180;
  var ma=(mass*100)/317;

  
   document.getElementById("gravprog").style.width= grav+'%';
   document.getElementById("diamprog").style.width= diam+'%';
   document.getElementById("lenprog").style.width= len+'%';
   document.getElementById("massprog").style.width= ma+'%';


  
  
  document.getElementById("gravprog").innerHTML='<span>'+gravity+' (m/s2) </span>';
  document.getElementById("diamprog").innerHTML='<span>'+Math.round(diameter*12.756).toFixed(2)+' (km) </span>';
  document.getElementById("lenprog").innerHTML='<span>'+Math.round(length*24).toFixed(2)+' (hours) </span>';
  document.getElementById("massprog").innerHTML='<span>'+(ma*5.97).toFixed(5)+' (10^24kg) </span>';

}

$(function() {
  var body = $('#starshine'),
      template = $('.template.shine'),
      stars =  500,
      sparkle = 20;
  
    
  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };
 
  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if(i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    
    createStar();
  }
});