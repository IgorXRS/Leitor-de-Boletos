function processarCodigoDeBarras() {
    const codigoDeBarras = document.getElementById('codigoDeBarrasInput').value;
    const infoBoleto = document.getElementById('info-boleto');

    if (codigoDeBarras) {
        // Use a função lerCodigoDeBarras do exemplo anterior para obter os dados do boleto
        lerCodigoDeBarras(codigoDeBarras)
            .then((codigoDeBarrasDecodificado) => {
                // Exiba os detalhes do boleto no elemento #info-boleto
                infoBoleto.innerHTML = `
                    <p><strong>Beneficiário:</strong> ${codigoDeBarrasDecodificado.beneficiario}</p>
                    <p><strong>Valor:</strong> ${codigoDeBarrasDecodificado.valor}</p>
                    <p><strong>Vencimento:</strong> ${codigoDeBarrasDecodificado.vencimento}</p>
                `;
            })
            .catch((erro) => {
                console.error('Erro ao ler código de barras:', erro);
                infoBoleto.innerHTML = '<p>Erro ao processar o boleto. Verifique o console para mais detalhes.</p>';
            });
    } else {
        infoBoleto.innerHTML = '<p>Por favor, digite o código de barras.</p>';
    }
}
