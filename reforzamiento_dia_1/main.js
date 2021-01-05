function fonos(){
    var telefono = document.getElementById('fono').value;
        if(telefono == ""){
            document.getElementById('fono').setAttribute('value', '569');
        }
}

function tabla(){
    var direc = document.getElementById('direcciones').value;
    
        for(let i = 1 ; i <= direc ; i++){
            var add = document.createElement('input'); 
                add.setAttribute('type', 'text');
                add.setAttribute('id','direccion'+i); // <input type="text" id="direccion1 (con el +i irá creando direccion2, direccion3 etc)">
                add.setAttribute('placeholder', 'Dirección');
            // ------------------------------------------ //
            var division = document.createElement('div');
                
                division.appendChild(add);

                document.getElementById('dirs').appendChild(division); 
        }
    var divisor = document.getElementById('des');
    divisor.parentNode.removeChild(divisor);
}
