(function(){

    function loadJSON() {
    
        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function(){
          if(this.status === 200) {
            if(this.readyState === 4)  {
              addressBook = JSON.parse(this.responseText);
              console.log("Data finished loading");
    
              add();
    
              //displayData();
            }
          }
        });
        XHR.open("GET", "/data.json");
        XHR.send();

      }
      
      

    function Start() {
        console.log(`%c App Started...`,"color:blue; font-size: 30px; font-weight:bold;");
       // Your Code goes here

    }

    window.addEventListener("load", Start);
})();