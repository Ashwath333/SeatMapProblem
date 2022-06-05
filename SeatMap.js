
function createTable(array){
          var finalstr=""
          var length = array.length;


            for(const [index,input] of array.entries()){

                    let [rows,cols]= input;

                   var final = createTabStructure(rows,cols,index,length)
                   
                   finalstr = finalstr + final;
                   document.getElementById('container').innerHTML = finalstr;
            }                                  
        }

function createTabStructure(rows,cols,index,length){
            
            var output='<table border="1" class="table">'


            if(index==0){

               if(cols == 2){

                for(var i=1;i<=rows;i++){
                               output=output+'<tr>'
                               for(var j=1;j<=cols;j++){
                                if(j==1){
                                    output=output+'<td>'+'<input class="input window" type="text" value=" " >'+'</td>'
                                   }else{
                                    if(j==1 || j == cols){
                                                    output=output+'<td>'+'<input class="input aisle" type="text" value=" " >'+'</td>'
                                            }else{
                                                   output=output+'<td>'+'<input class="input center" type="text" value=" ">'+'</td>'
                                            }
                                    }
                                }
                                output=output+'</tr>'
                }

             }else{
                for(var i=1;i<=rows;i++){
                               output=output+'<tr>'
                               for(var j=1;j<=cols;j++){
                                   if(j==1){
                                    output=output+'<td>'+'<input class="input window" type="text" value=" " >'+'</td>'
                                   }else{
                                    if(j==1 || j == cols){
                                                    output=output+'<td>'+'<input class="input aisle" type="text" value=" " >'+'</td>'
                                            }else{
                                                   output=output+'<td>'+'<input class="input center" type="text" value=" ">'+'</td>'
                                            }
                                    }
                                }
                                output=output+'</tr>'
                }
             }
                

            }else if(index !=0  && index != length-1){
                           
                if(cols == 2){

                for(var i=1;i<=rows;i++){
                               output=output+'<tr>'
                               for(var j=1;j<=cols;j++){
                                   output=output+'<td>'+'<input class="input aisle" type="text" value=" " >'+'</td>'
                                }
                                output=output+'</tr>'
                }

             }

             else {

                for(var i=1;i<=rows;i++){
                           
                               output=output+'<tr>'
                               for(var j=1;j<=cols;j++){

                                            if(j==1 || j == cols){
                                                    output=output+'<td>'+'<input class="input aisle" type="text" value=" " >'+'</td>'
                                            }else{
                                                   output=output+'<td>'+'<input class="input center" type="text" value=" ">'+'</td>'
                                            }
                                  
                                }
                                output=output+'</tr>'
                    }

             }
                        

            
            }else if(index == length-1){

                for(var i=1;i<=rows;i++){
                               output=output+'<tr>'
                               for(var j=1;j<=cols;j++){
                                   if(j==cols){
                                    output=output+'<td>'+'<input class="input window" type="text" value=" " >'+'</td>'
                                   }else{
                                    if(j==1 || j == cols){
                                                    output=output+'<td>'+'<input class="input aisle" type="text" value=" " >'+'</td>'
                                            }else{
                                                   output=output+'<td>'+'<input class="input center" type="text" value=" ">'+'</td>'
                                            }
                                    }
                                }
                                output=output+'</tr>'
                }

            }

                output=output+'</table>'           
                return output; 
        }
         
function fillSeats(seatsToFill){
            
            const aisleSeats = document.querySelectorAll(".table td input.aisle").length;
            const centerSeats= document.querySelectorAll(".table td input.center").length;
            const windowSeats = document.querySelectorAll(".table td input.window").length;

               let i=0;
               var lastValue=1;
               var seatRemain=seatsToFill;

               if (seatsToFill >= aisleSeats){
                            for (i=1;i<= aisleSeats; i++){
                                    document.querySelectorAll(".table td input.aisle")[i-1].value=lastValue;
                                        lastValue++
                            }
                            seatRemain = seatRemain - aisleSeats  
               }else{

                       for (i=1;i<= seatRemain; i++){
                                    document.querySelectorAll(".table td input.aisle")[i-1].value=lastValue;
                                    lastValue++
                            }
                            seatRemain = 0; 
               }


            if(seatRemain){  

               if (seatRemain >= windowSeats){
                            for (i=1;i<= windowSeats; i++){
                                    document.querySelectorAll(".table td input.window")[i-1].value=lastValue;
                                        lastValue++
                            }
                            seatRemain = seatRemain - windowSeats 
               }else{

                       for (i=1;i<= seatRemain; i++){
                                    document.querySelectorAll(".table td input.window")[i-1].value=lastValue;
                                    lastValue++
                            }
                            seatRemain = 0; 

               }
            }   

          if(seatRemain){

            if (seatRemain >= centerSeats){
                            for (i=1;i<= centerSeats; i++){
                                    document.querySelectorAll(".table td input.center")[i-1].value=lastValue;
                                        lastValue++
                            }
                            seatRemain = seatRemain - centerSeats  
               }else{

                       for (i=1;i<= seatRemain; i++){
                                    document.querySelectorAll(".table td input.center")[i-1].value=lastValue;
                                    lastValue++
                            }

               }
          }
               

        }
   
createTable([[2,3],[3,4],[3,2],[4,3]]);  //Modify to change the Layout


document.getElementById("fill").addEventListener("click",function(e){
    let seatsToFill = document.getElementById("quantity").value;
    let totalSeats = document.querySelectorAll(".table td input").length;

    if(seatsToFill > totalSeats ){
        alert("seats to be filled exceed seats,kindly proceed to fill available seats")
        fillSeats(seatsToFill); // Number of seats to be filled 
    }
    fillSeats(seatsToFill); // Number of seats to be filled 
});
