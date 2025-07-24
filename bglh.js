const alunos = [
    {aluno: 'a' , idade: 19, matricula: 209809210, curso: 'si'},
    {aluno: 'b' , idade: 19, matricula: 20921, curso: 'cc'},
    {aluno: 'c' , idade: 20, matricula: 209009210, curso: 'ec'},
    {aluno: 'd' , idade: 25, matricula: 209509210, curso: 'ec'},
    {aluno: 'e' , idade: 50, matricula: 209509210, curso: 'ec'}

]

const adicionarAluno = (nomeRe,idadeRe,matriculaRe,cursoRe) => [
    {aluno: 'a', idade: 19, matricula: 209209210, curso: 'ec'}]

const turma = [
    ...alunos, adicionarAluno
    ]
const listarAlunos = (discente) => alunos.map((x)=> x.aluno == discente? x: null)

const buscarCurso = (curso) => alunos.map((x)=> x.curso == curso? x: null)

const remover = (nome) => alunos.filter((x) => x.aluno !== nome)

const mtr = alunos.sort((a, b)=> a.matricula - b.matricula)

// const numcur = (lista,nome) => {
//     const contagem = lista.filter((x) => x.curso == aluos.filter
// const numcur = alunos.filter((x) => x.curso == alunos.filter((d)=> ))
const numcur = (lista,nome) => {
    const contagem = lista.filter((x) => x.curso == nome)
    return contagem.lenght()
}
// console.log(numcur(alunos,'cc'))
const modificar = alunos.filter((a) => a.matricula == 20921)
const lista = [...modificar, modificar.aluno = 'José']
console.log(lista)



