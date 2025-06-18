const calcularValorHospedagem = (diarias, valorDiaria, taxaLimpeza) => {
    return diarias * valorDiaria + taxaLimpeza;
};

let valorHospedagem = calcularValorHospedagem(9, 500, 300);
console.log(`O valor total da reserva é: R$ ${valorHospedagem.toFixed(2)}`);

valorHospedagem = calcularValorHospedagem(10, 1500, 100);
console.log(`O valor total da reserva é: R$ ${valorHospedagem.toFixed(2)}`);

console.log('____________________________');

const validarLogin = (usuario, senha) => {
    const usuarioRegistrado = 'admin';
    const senhaRegistrada = 'senha123';

    if (usuario ===  usuarioRegistrado && senha === senhaRegistrada) {
        console.log('Login realizado com sucesso!');
        return true;
    } else {
        console.log('Usuário ou senha inválidos. Tente novamente.');
        return false;
    }
};

const user1 = validarLogin('joao', 'senha123');
const user2 = validarLogin('admin', 'senha123');
console.log(user1, user2);

console.log('------------------------------');

//declarando a variável e criando a função 
const gerarSenha = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrsuvwxyz1234567890!@#$%&amp;*';
     let novaSenha = '';
     for (let i = 0; i <= 19; i++) {
        const indice = Math.round(Math.random() * caracteres.length);
        novaSenha += caracteres[indice];
    }
return novaSenha;
}
//chamando a função atribuída à variável
console.log(`A senha gerada foi: ${gerarSenha()}`);
console.log(`A senha gerada foi: ${gerarSenha()}`);
console.log(`A senha gerada foi: ${gerarSenha()}`);