function startgame() {
    

    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            s = (i+1)*1000 + (j+1);
            var positie = document.getElementById(s);
            if (positie!=null) {
                console.log(s);
                if (positie.childNodes.length>0) {
                    positie.removeChild(positie.childNodes[0]);
                }
        
            }
           }
        }
    
        console.log(" Alles is leeg");
    for(i=0;i<10;i++){
        for(j=0;j<5;j++){
            console.log((i+1) + " " + ((j+1)*2 -((i+1) %2)));
            if (i<4){
                s = (i+1)*1000 + ((j+1)*2 -((i+1) %2));
                console.log(s);
                verplaats1(s);

            }
            if (i>5){
                s = (i+1)*1000 + ((j+1)*2 -((i+1) %2));
                console.log(s);
                verplaats2(s);
            }
        }
    }
}



function verplaats1(xy){
    var steen = document.createElement("DIV"); 
    steen.setAttribute("class", "blackstone");
    steen.addEventListener("click", function(){alert("testy")});
    // .setAttribute("click", function(){alert("test")});
    console.log(xy);
    // steen.addEventListener("click"=function(e){

    //  })

    var positie = document.getElementById(xy);
    positie.appendChild(steen);
    console.log(positie);

}

function verplaats2(xy){
    var steen = document.createElement("DIV");
    steen.setAttribute("class", "whitestone");
    console.log(xy);
 
    var positie = document.getElementById(xy);
    positie.appendChild(steen);
    console.log(positie);

}

// function selectstone(){
//         document.getElementById("demo").innerHTML = "I'm selected";
//       }

