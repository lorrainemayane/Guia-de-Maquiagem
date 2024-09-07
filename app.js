function searchProduct() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Verifica se o campo está vazio
    if (input.trim() === '') {
        resultsDiv.innerHTML = '<p>Campo vazio. Por favor, digite algo para pesquisar.</p>';
        return; // Para a execução se o campo estiver vazio
    }

    const resultados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(input) || 
        produto.descricao.toLowerCase().includes(input)
    );

    if (resultados.length > 0) {
        resultados.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <a href="${produto.link}" target="_blank">Saiba mais</a>
            `;
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.innerHTML = '<p>Produto não encontrado.</p>';
    }
}