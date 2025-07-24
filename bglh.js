//1
const alunos = [
    {aluno: 'Rhuan' , idade: 19, matricula: 202500035548, curso: 'EC'},
    {aluno: 'Pablo' , idade: 20, matricula: 202400045768, curso: 'SI'},
    {aluno: 'José' , idade: 31, matricula: 201900088976, curso: 'EC'},
    {aluno: 'Antônio' , idade: 29, matricula: 202100099876, curso: 'CC'},
    {aluno: 'Daví' , idade: 19, matricula: 202200078792, curso: 'EC'}

]
//2
const turma = [...alunos]
//3
const adicionarAluno = (lista) => (nomeRe,idadeRe,matriculaRe,cursoRe) => {
    const adicionarDiscente = [...lista, {aluno: nomeRe, idade: idadeRe, matricula: matriculaRe, curso: cursoRe}]
    return adicionarDiscente //'Arlindo', 19, 202500032509, 'SI'
}
    //4
const listarAlunos = (lista,discente) =>{
    const identificarAluno = lista.map((x)=> x.aluno == discente? x: '')
    const TirarOvazioAluno = identificarAluno.filter((aluno) => aluno != '')
    return TirarOvazioAluno
}
//5
const buscarCurso = (lista,curso) => {
    const indentificar = lista.map((aluno)=> aluno.curso == curso? aluno: '')
    const tirarOVazio = indentificar.filter((aluno) => aluno != '')
    return tirarOVazio
}
//6
const removerAluno = (lista, nome) => lista.filter((del) => del.aluno !== nome)
//7
const ordenarMatricula = (lista) => lista.sort((primeira, segunda)=> primeira.matricula - segunda.matricula)
//8
const contagemDoCurso = (lista,nome) => {
    const contagem = lista.filter((x) => x.curso == nome)
    return contagem.length
};
