// WEB303 Assignment 3
// Mansimran Kaur
let glitchTeam = $.getJSON("glitchTeam.json").done(function(data){
    $.each(data.members,function(a,b){
        console.log("data a:",a,"and data b:",b);
  
        $('#glitchTeam').append(`
        <h2>${b.name}</h2>
        <h5>${b.position}</h5>
        <p>${b.bio}</p>
        `);
    })  ;
  
  });
  console.log("the glitchTeam :", glitchTeam);
  
  $(function usingAjax() {
      $.ajax({url: "glitchTeam.json", 
      beforeSend: function() {
          let loadText = $("<h2></h2>").text("Loading...");
          $(`div#glitchTeam`).append(loadText);
      },
      error: function(){
          
      },
      timeout: 5000,
  
      
      success: function(data){
          $(`div#glitchTeam`).empty();
          $.each(data.members,function(a,b){
              console.log("data a:",a,"and data b:",b);
        
              $('#glitchTeam').append(`
              <h2>${b.name}</h2>
              <h5>${b.position}</h5>
              <p>${b.bio}</p>
              `);
          })  
      }
  });
  });
  
  
