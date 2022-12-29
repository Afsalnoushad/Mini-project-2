(function(){
    "use strict";
    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        const key = event.code;
        if(key==='KeyK'){
            convertType = 'kilometers';
            heading.innerHTML='Kilometers to miles Converter';
            intro.innerHTML='Type in a number of kilometers and click the button to convert the distance to miles';

        }
        else if(key==='KeyM'){
            convertType = 'miles';
            heading.innerHTML='Miles to Kilometers Converter';
            intro.innerHTML='Type in a number of miles and click the button to convert the distance to kiloneters';

        }
        
    });

    form.addEventListener('submit', function(){

        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);

        if( distance ){
            if(convertType == 'miles'){

                const conversion = (distance * 1.689344).toFixed(3);
                answerDiv.innerHTML=`${distance} miles converts to ${conversion} kilometers`;

            }
            else {
                const conversion = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML=`${distance} kilometers converts to ${conversion} miles`;
            }

        }
        else{
            answerDiv.innerHTML="<h2>Please enter a number</h2>";
        }

    });
}());