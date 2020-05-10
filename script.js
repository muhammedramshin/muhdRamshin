function change() {

    var x = document.getElementById("p1");
    var y = document.getElementById("p2");
    var z = document.getElementById("p3");
    var a = document.getElementById("p4");
    if (x.className === "profile" && y.className === "name bold" && z.className === "links" &&  a.className === "details" ) {
      
        x.className += " dark";
        
      y.className += " dark";
      z.className += " dark";
      a.className += " dark";
      
      document.body.style.backgroundColor = "black";
      document.body.style.transition="1s ease-in-out";
    } else {
      x.className = "profile";
      y.className = "name bold";
      z.className = "links";
      a.className="details"
      document.body.style.backgroundColor = "white";
      document.body.style.transition="1s ease-in-out";
    }

    

  }



  
 
  function mouseOver1() {
    document.getElementById("n1").innerHTML = "Mail";
     
      setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }
  function mouseOver2() {
    document.getElementById("n1").innerHTML = "Linkedin";
    
     
      setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }
  
  function mouseOver3() {
    document.getElementById("n1").innerHTML = "Github";
    
     
        setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }

  function mouseOver4() {
    document.getElementById("n1").innerHTML = "My Works";
    
     
        setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }
  function mouseOver5() {
    document.getElementById("n1").innerHTML = "My Blog";
    
     
        setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }


  function mouseOver6() {
    document.getElementById("n1").innerHTML = "Social Links";
    
     
        setTimeout(function () {
                    document.getElementById('n1').style.visibility = 'hidden';
                }, 2000);
                document.getElementById('n1').style.visibility = 'visible';
  }

  