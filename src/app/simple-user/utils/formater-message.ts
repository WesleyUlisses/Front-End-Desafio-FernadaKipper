export class FormaterMessage {

    public static formatEmailContactMessage( message: string, name: string, phoneNumber: string, email: string ):  string {
        return `
            <h1>Contato</h1>
            <p>Mensagem: ${message}</p>
            <h2>Informações do contato</h2>
            <p>Nome: ${name}</p>
            <p>Telefone: ${phoneNumber}</p>
            <p>Email: ${email}</p>
            `;
    }

    public static formatEmailWantToBePartnerMessage( message: string, name: string, phoneNumber: string, email: string ):  string {
        return `
            <h1>Quero ser parceiro</h1>
            <p>Mensagem: ${message}</p>
            <h2>Informações do contato</h2>
            <p>Nome: ${name}</p>
            <p>Telefone: ${phoneNumber}</p>
            <p>Email: ${email}</p>
            `;
    }
}