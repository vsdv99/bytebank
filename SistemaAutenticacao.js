export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {  
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function //verifica se tem algum método ou propriedade com esse nome dentro do autenticável e depois se é uma função e não apenas propriedade
    }

}
