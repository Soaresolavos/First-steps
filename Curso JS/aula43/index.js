// try {
//     console.log(a);
//     // É executada quando não há erros
// } catch (e) {
//     console.log('Tratando o erro');
//     // É executada quando há erros
// } finally {
//     console.log('Finally: Eu sempre sou executado.')
//     // Sempre
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date;
    }
    return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',     
    hour12: false   
    });
}
const hora = retornaHora();
console.log(hora);