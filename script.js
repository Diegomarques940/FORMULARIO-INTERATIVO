// Função principal para exibir área com base na escolha de profissão
function mostrarDivPai(areaEscolhida) {
    const colunaWeb = document.getElementById('colunaWeb');
    const colunaMobile = document.getElementById('colunaMobile');

    const areaEscolhaWeb = document.getElementById('areaEscolhaWeb');
    const areaEscolhaMobile = document.getElementById('areaEscolhaMobile');

    if (areaEscolhida === 'Mobile') {
        areaEscolhaMobile.style.display = 'block';
        areaEscolhaWeb.style.display = 'none';
        document.getElementById("botaoWeb").disabled = true;
    } else {
        areaEscolhaMobile.style.display = 'none';
        areaEscolhaWeb.style.display = 'block';
        document.getElementById("botaoMobile").disabled = true;
    }
}

// Mostra as opções de vantagem para Web
function mostrarDivWeb(area) {
    const vantagemWebBack = document.getElementById('vantagemWebBack');
    const vantagemWebFront = document.getElementById('vantagemWebFront');

    if (area === 'Back-end') {
        vantagemWebBack.style.display = 'block';
        vantagemWebFront.style.display = 'none';
    } else {
        vantagemWebBack.style.display = 'none';
        vantagemWebFront.style.display = 'block';
    }
}

// Exibe linguagens recomendadas com base na vantagem (Web Back-end)
function opcaoSelecionadaBackWeb(vantagem) {
    const resultadoWeb = document.getElementById('resultadoWeb');
    const linguagem1 = document.getElementById('linguagem1Web');
    const linguagem2 = document.getElementById('linguagem2Web');
    const linguagem3 = document.getElementById('linguagem3Web');

    resultadoWeb.style.display = 'block';

    if (vantagem === 'Rapidez') {
        linguagem1.textContent = 'C/C++';
        linguagem2.textContent = 'Rust';
        linguagem3.textContent = 'Go';
    } else if (vantagem === 'Programação') {
        linguagem1.textContent = 'Python';
        linguagem2.textContent = 'JavaScript';
        linguagem3.textContent = 'Scratch';
    } else {
        linguagem1.textContent = 'Python';
        linguagem2.textContent = 'JavaScript';
        linguagem3.textContent = 'Java';
    }
}

// Exibe linguagens recomendadas com base na vantagem (Web Front-end)
function opcaoSelecionadaFrontWeb(vantagem) {
    const resultadoWeb = document.getElementById('resultadoWeb');
    const linguagem1 = document.getElementById('linguagem1Web');
    const linguagem2 = document.getElementById('linguagem2Web');
    const linguagem3 = document.getElementById('linguagem3Web');

    resultadoWeb.style.display = 'block';

    if (vantagem === 'bibliotecas') {
        linguagem1.textContent = 'React';
        linguagem2.textContent = 'Vue';
        linguagem3.textContent = 'Angular';
    } else if (vantagem === 'compreensão') {
        linguagem1.textContent = 'JavaScript';
        linguagem2.textContent = 'Python';
        linguagem3.textContent = 'TypeScript';
    } else {
        linguagem1.textContent = 'JavaScript';
        linguagem2.textContent = 'Python';
        linguagem3.textContent = 'React';
    }
}

// Mostra as opções de vantagem para Mobile
function mostrarDivMob(area) {
    const vantagemMobileBack = document.getElementById('vantagemMobileBack');
    const vantagemMobileFront = document.getElementById('vantagemMobileFront');

    if (area === 'Back-end') {
        vantagemMobileBack.style.display = 'block';
        vantagemMobileFront.style.display = 'none';
    } else {
        vantagemMobileBack.style.display = 'none';
        vantagemMobileFront.style.display = 'block';
    }
}

// Exibe linguagens recomendadas com base na vantagem (Mobile Back-end)
function opcaoSelecionadaBackMob(vantagem) {
    const resultadoMobile = document.getElementById('resultadoMobile');
    const linguagem1 = document.getElementById('linguagem1Mobile');
    const linguagem2 = document.getElementById('linguagem2Mobile');
    const linguagem3 = document.getElementById('linguagem3Mobile');

    resultadoMobile.style.display = 'block';

    if (vantagem === 'Rapidez') {
        linguagem1.textContent = 'Dart (Flutter)';
        linguagem2.textContent = 'React';
        linguagem3.textContent = 'Java';
    } else if (vantagem === 'Programação') {
        linguagem1.textContent = 'Python';
        linguagem2.textContent = 'JavaScript';
        linguagem3.textContent = 'Dart (Flutter)';
    } else {
        linguagem1.textContent = 'Java';
        linguagem2.textContent = 'Dart (Flutter)';
        linguagem3.textContent = 'Swift';
    }
}

// Exibe linguagens recomendadas com base na vantagem (Mobile Front-end)
function opcaoSelecionadaFrontMob(vantagem) {
    const resultadoMobile = document.getElementById('resultadoMobile');
    const linguagem1 = document.getElementById('linguagem1Mobile');
    const linguagem2 = document.getElementById('linguagem2Mobile');
    const linguagem3 = document.getElementById('linguagem3Mobile');

    resultadoMobile.style.display = 'block';

    if (vantagem === 'bibliotecas') {
        linguagem1.textContent = 'Swift';
        linguagem2.textContent = 'Java';
        linguagem3.textContent = 'React Native';
    } else if (vantagem === 'compreensão') {
        linguagem1.textContent = 'Python (Kivy, BeeWare)';
        linguagem2.textContent = 'React Native';
        linguagem3.textContent = 'Dart (Flutter)';
    } else {
        linguagem1.textContent = 'Java';
        linguagem2.textContent = 'React Native';
        linguagem3.textContent = 'Swift';
    }
}