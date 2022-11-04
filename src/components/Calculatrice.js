import '../style/Calculatrice.css';
function getValue() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input1").value;
    alert(parseInt(input) + parseInt(input2))
}

function getValue2() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input1").value;
    alert(parseInt(input) - parseInt(input2))
}


function getValue3() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input1").value;
    alert(parseInt(input) * parseInt(input2))
}


function getValue4() {
    var input = document.getElementById("input").value;
    var input2 = document.getElementById("input1").value;
    alert(parseInt(input) / parseInt(input2))
}



function Calculatrice(){
	return<div className='Calculatrice'>
         <input type='number' id='input' placeholder="Entrez une valeur ici"/>
         <input type='number' id='input1' placeholder="Entrez une valeur ici"/>

        <button onClick={() => getValue()}>+</button>
        <button onClick={() => getValue2()}>-</button>
        <button onClick={() => getValue3()}>x</button>
        <button onClick={() => getValue4()}>/</button>

    </div> 
}

export default Calculatrice;