export class FormaterMessage {

    public static formatEmailContactMessage( message: string, name: string ):  string {
        return `
            <h1>Contato</h1>
            
            <p>Nome: ${name}</p>
            <p>Mensagem: ${message}</p>
            `;
    }

    public static formatEmailWantToBePartnerMessage( message: string, name: string ):  string {
        return `
            <h1>Quero ser parceiro</h1>
            
            <p>Nome: ${name}</p>
            <p>Mensagem: ${message}</p>
            `;
    }
}