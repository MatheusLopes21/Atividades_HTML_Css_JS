const apiUrl = 'http://localhost:5000/produtos'
const listaProdutos = document.getElementById('lista-produtos');
const btnNovoProduto = document.getElementById('btn-novo-produto');
const modalNovoProduto = document.getElementById('modal-novo-produto');
const formNovoProduto = document.getElementById('form-novo-produto');
const modalEditarProduto = document.getElementById('modal-editar-produto');
const formEditarProduto = document.getElementById('form-editar-produto');
window.onload = () => {
    listarProdutos();
  };
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modalNovoProduto.style.display != 'none') {
            fecharModalNovoProduto();
        };
        if (modalEditarProduto.style.display != 'none') {
            fecharModalEdicaoProduto();
        };
    }
});
btnNovoProduto.addEventListener('click', abrirModalNovoProduto);
// Função para listar produtos
function listarProdutos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
            data.forEach(produto => {
                const li = document.createElement('li');
                li.innerHTML = `
                                <span class="nome">${produto.nome}</span><span class="preco">
                                ${'R$ ' + produto.preco.toFixed(2)}</span>
                                <button class="btn-editar" data-produto-id="${produto.id}">Editar</button>
                                <button class="btn-excluir" data-produto-id="${produto.id}">Excluir</button>
                            `;
                listaProdutos.appendChild(li);
                // Adicionar eventos de click para botões de editar e excluir
                const btnEditar = li.querySelector('.btn-editar');
                btnEditar.addEventListener('click', () => editarProduto(produto.id));
                const btnExcluir = li.querySelector('.btn-excluir');
                btnExcluir.addEventListener('click', () => excluirProduto(produto.id));
            });
        })
        .catch(error => console.error('Erro ao listar produtos:', error));
}
// Função para abrir modal de novo produto
function abrirModalNovoProduto() {
    modalNovoProduto.style.display = 'block';
    formNovoProduto.reset(); // Limpar campos do formulário
}
// Função para fechar modal de novo produto
function fecharModalNovoProduto() {
    modalNovoProduto.style.display = 'none';
}
// Função para abrir modal de editar produto
function abrirModalEditarProduto(produtoId) {
    fetch(`${apiUrl}/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
            document.getElementById('produto-id').value = produto.id;
            document.getElementById('nome-editar').value = produto.nome;
            document.getElementById('preco-editar').value = produto.preco;
            modalEditarProduto.style.display = 'block';
        })
        .catch(error => console.error('Erro ao buscar produto:', error));
}
// Função para fechar modal de editar produto
function fecharModalEdicaoProduto() {
    modalEditarProduto.style.display = 'none';
}
// Função para cadastrar novo produto
function cadastrarProduto(evento) {
    console.time(); 
    console.log('Entrou em cadastrarProduto()');
    evento.preventDefault(); // Evita o envio padrão do formulário
    const nome = document.getElementById('nome').value; 
    console.log(nome);
    const preco = document.getElementById('preco').value; 
    console.log(preco);
    const dados = {
        nome: nome,
        preco: parseFloat(preco)
    };
    console.log(dados);
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(response => {
            if (response.ok) {
                fecharModalNovoProduto();
                listarProdutos(); // Atualiza a lista de produtos
                alert('Produto cadastrado com sucesso!');
            } else {
                console.error('Erro ao cadastrar produto:', response.status);
            }
        }).catch(error => console.error('Erro ao cadastrar produto:', error));
        console.timeEnd(); 
}
// Função para editar produto
function editarProduto(produtoId) {
    abrirModalEditarProduto(produtoId);
}
// Função para salvar edição de produto
function salvarEdicaoProduto(evento) {
    evento.preventDefault();
    const produtoId = document.getElementById('produto-id').value;
    const nome = document.getElementById('nome-editar').value;
    const preco = document.getElementById('preco-editar').value;
    const dados = {
        nome: nome,
        preco: parseFloat(preco)
    };
}
function excluirProduto(evento) {
    console.log('entrou em excluirProduto()');    
}