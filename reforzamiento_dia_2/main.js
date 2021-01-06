// Para que salgan los numeros 569 al hacer click en el input
function fonos(){
    var telefono = document.getElementById('fono').value;
        if(telefono == ""){
            document.getElementById('fono').setAttribute('value','569');
        }
}

// Validacion nombre sin espacios
function espaciosNom1(){
    var nombreUno = document.getElementById('nom1').value;
        if(nombreUno.indexOf(' ') > 0){ // Buscando espacios vacios
            alert('El nombre tiene, al menos, un espacio.');
        } 
}

function espaciosNom2(){
    var nombreDos = document.getElementById('nom2').value;
        if(nombreDos.indexOf(' ') > 0){ // Buscando espacios vacios
            alert('El segundo nombre tiene, al menos, un espacio.');
        } 
}
// Cantidad de numeros del telefono
function extension(){
    var extensionFono = document.getElementById('fono').value;
        if(extensionFono.length > 11){
            alert('El número de telefono es muy largo!');
        }else if(extensionFono.length < 11){
            alert('El número de telefono es muy corto');
        }
}

function tabla(){
    var direc = document.getElementById('direcciones').value;
    const resultado = Math.trunc(100 / direc);
    var bajo = 0;
    var alto = resultado;
        for(let i = 1 ; i <= direc ; i++){
            if(alto == 99){
                alto = 100;
            }
        var label = document.createElement('label'); // <label> </label>
        // label.setAttribute('for', 'chckbx', 15);
        label.textContent = bajo + '% - ' + alto + '%'; // Sí seleccionamos 5, resultado será 20 y alto tambien, por lo que quedará así; <label> 0% - 20% </label>
        document.getElementById('dirs').appendChild(label);

        var add = document.createElement('input'); // <input>
        add.setAttribute('type', 'checkbox'); // <input type="checkbox">
        add.setAttribute('id', 'chckbx'+1); // <input type="checkbox" id="chckbx1">
        var division = document.createElement('div'); // <div></div>
        division.appendChild(add); // <div> <input type="checkbox" id="chckbx1"> </div>
        document.getElementById('dirs').appendChild(division); // Acá lo enviamos al documento 

        bajo += resultado; // bajo = bajo + resultado;
        alto += resultado; // alto = altto + resultado;
    }
    var divisor = document.getElementById('des');
    divisor.parentNode.removeChild(divisor);
}

// Función para validar todo lo visto 
function revisar(){
    if(document.getElementById('nom1').value == "" 
    || document.getElementById('nom2').value == "" 
    || document.getElementById('ap1').value == ""
    || document.getElementById('ap2').value == ""
    || document.getElementById('fono').value == ""
    || document.getElementById('email').value == ""){

        alert('Uno de los campos de texto esta vacio, Por favor revise el formulario :)');
    }else{
        alert('Ok, borrare los campos :)')
    }
}