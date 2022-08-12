function calcular(tipo, valor){
    if(tipo === 'ação'){

        if(valor === 'c'){
            document.getElementById('resultado').innerText = ' ';
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').innerText += valor;
        }
        if(valor === '='){
            var res = document.getElementById('resultado').innerText;
            document.getElementById('resultado').innerText = eval(res);
        }

    } else if(tipo === 'valor'){
        document.getElementById('resultado').innerText += valor;
    }
}