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