var contaner = document.getElementById("contaner");
var addbtn = document.getElementById("addbtn");


document.addEventListener(
    "keydown",
    function(e){
        if( e.key =="Enter" ){
            e.preventDefault();
            addbtn.click();
        }
        // else if (e.key == "back"){
        //     e.preventDefault();
        //     addbtn.click();
        //     box.remove();

        // }

    }
);


addbtn.addEventListener(
    "click",
    function (){
        var box = document.createElement("div");
        box.classList.add("box")
        box.innerHTML =  `<DIV class="TREY">
             <button id="button">delete</button>
         </DIV>
         <textarea name="" id=""></textarea>`;

        var btn = box.children[0].children[0];


        btn.addEventListener(
            "click",
            function  () {
                // btn.parentNode.parentNode.remove();

                box.remove();
                
            }
        )
     
       contaner.append(box);
  
    }
)