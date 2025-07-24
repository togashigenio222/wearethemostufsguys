//1
const alunos = [
    {aluno: 'Rhuan' , idade: 18, matricula: 202500035548, curso: 'SI'},
    {aluno: 'Pablo' , idade: 20, matricula: 202400045768, curso: 'CC'},
    {aluno: 'José' , idade: 31, matricula: 201900088976, curso: 'SI'},
    {aluno: 'Antônio' , idade: 29, matricula: 202100099876, curso: 'EC'},
    {aluno: 'Daví' , idade: 19, matricula: 202200078792, curso: 'CC'}

]
//2
const adicionarAluno = (nomeRe,idadeRe,matriculaRe,cursoRe) => [
    {aluno: 'Arlindo', idade: 19, matricula: 202500032509, curso: 'EC'}]
//3
const turma = [
    ...alunos, adicionarAluno
    ]
    //4
const listarAlunos = (discente) => alunos.map((x)=> x.aluno == discente? x: null)
//5
const buscarCurso = (curso) => alunos.map((x)=> x.curso == curso? x: null)
//6
const remover = (nome) => alunos.filter((x) => x.aluno !== nome)
//7
const ordenarMatricula = alunos.sort((a, b)=> a.matricula - b.matricula)

const numcur = (lista,nome) => {
    const contagem = lista.filter((x) => x.curso == nome)
    return contagem.length
}
console.log(numcur(alunos,'CC'))




