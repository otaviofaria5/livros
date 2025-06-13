export interface Emprestimos {
    id?: string;
    livroId: string;
    usuarioId: string;
    dataEmprestimo: Date;
    DataDevolucaoPrevista: Date;
    dataDevolucaoReal: Date;
}

