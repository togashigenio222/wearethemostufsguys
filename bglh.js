//1
const alunos = [
    {aluno: 'Rhuan' , idade: 19, matricula: 202500035548, curso: 'EC'},
    {aluno: 'Pablo' , idade: 20, matricula: 202400045768, curso: 'SI'},
    {aluno: 'José' , idade: 31, matricula: 201900088976, curso: 'EC'},
    {aluno: 'Antônio' , idade: 29, matricula: 202100099876, curso: 'CC'},
    {aluno: 'Daví' , idade: 19, matricula: 202200078792, curso: 'EC'}
//console.log(alunos)
]

//2
const turma = (lista) => [...lista] //console.log(turma(alunos))

//3
const adicionarAluno = (lista) => (nomeRe,idadeRe,matriculaRe,cursoRe) => {
    const adicionarDiscente = [...lista, {aluno: nomeRe, idade: idadeRe, matricula: matriculaRe, curso: cursoRe}]
    return adicionarDiscente //console.log(adicionarAluno(alunos)('Arlindo', 19, 202500032509, 'SI'))
}

//4
const listarAlunos = (lista,discente) =>{
    const identificarAluno = lista.map((id)=> id.aluno == discente? id: '')
    const TirarOvazioAluno = identificarAluno.filter((aluno) => aluno != '')
    return TirarOvazioAluno
    //console.log(listarAlunos(alunos,'José'))
}

//5
const buscarCurso = (lista,curso) => {
    const indentificar = lista.map((aluno)=> aluno.curso == curso? aluno: '')
    const tirarOVazio = indentificar.filter((aluno) => aluno != '')
    return tirarOVazio
    //console.log(buscarCurso(alunos,'SI'))
}

//6
const removerAluno = (lista, nome) => lista.filter((del) => del.aluno !== nome) //console.log(removerAluno(alunos, 'Daví'))

//7
const ordenarMatricula = (lista) => lista.sort((primeira, segunda)=> primeira.matricula - segunda.matricula) //console.log(ordenarMatricula(alunos))

//8
const contagemDoCurso = (lista,nome) => {
    const contagem = lista.filter((graduacao) => graduacao.curso == nome)
    return contagem.length //console.log(contagemDoCurso(alunos, 'EC'))
};

//9 
const Alterador = (lista,matricula,tipodado,novodado) => {
    const AlterarDados = () => {
        const indentificaroAluno = lista.filter((aluno) => aluno.matricula == matricula)
        if(tipodado == 'nome'){
            return indentificaroAluno.map((d) => ({...d, aluno: novodado}))
        }
        else if(tipodado == 'matricula'){
            return indentificaroAluno.map((d) => ({...d, matricula: novodado}))
        }
        else if(tipodado == 'curso'){
            return indentificaroAluno.map((d) => ({...d, curso: novodado}))
        }
        else if(tipodado == 'idade'){
            return indentificaroAluno.map((d) => ({...d, idade: novodado}))
        }
        else{
                return 'erro'
        }

    }
    const removerdado = lista.filter((aluno) => aluno.matricula != matricula)
    const adicionarDado = [...removerdado, AlterarDados()[0]]
    return adicionarDado 
} //console.log(Alterador(alunos, 202100099876, 'curso', 'SI'))


