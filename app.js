function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se estiver vazio, exibe uma mensagem informando que é necessário inserir uma palavra-chave
        section.innerHTML = "<p>Insira uma palavra-chave.</p>"
        return; // Interrompe a função
    }

    // Converte a palavra-chave para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' seja um array de objetos)
    for (let dado of dados) {
        // Converte as propriedades do objeto para minúsculas para facilitar a comparação
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let link = dado.link.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se a palavra-chave está presente em alguma das propriedades do objeto
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se a palavra-chave foi encontrada, constrói o HTML para exibir o resultado
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Inscreva-se</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados
    if (!resultados) {
        // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}



