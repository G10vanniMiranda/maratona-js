var usuarios = [
    { id: 1, nome: "Ana Caraolina",    idade: 18, status: true,  salario: 1800, sexo: 'f' },
    { id: 2, nome: "Claudia Oliveira", idade: 20, status: true,  salario: 1600, sexo: 'f' },
    { id: 3, nome: "Aline Silva",      idade: 22, status: false, salario: 1700, sexo: 'f' },
    { id: 4, nome: "Ronaldo Fenomeno", idade: 25, status: true,  salario: 1900, sexo: 'm' },
    { id: 5, nome: "Ronaldo Silva",    idade: 30, status: false, salario: 2200, sexo: 'm' },
    { id: 6, nome: "Giovanni Miranda", idade: 29, status: true,  salario: 3300, sexo: 'm' },
]

function listarTodos(){
    usuarios.forEach( item => {
        console.log( item.id, item.nome, item.idade, item.status, item.salario, item.sexo )
    })
}

function listarTodosValidos(){
    usuarios.forEach( item => {
        if(item.status == true){
            console.log( item.id, item.nome, item.idade, item.salario, item.status )
        }
    })
}

function listarMasculino(){
    usuarios.forEach( item => {
        if(item.sexo == 'm'){
            console.log( item.id, item.nome, item.idade, item.salario, item.status )
        }
    })
}

function listarFeminino(){
    usuarios.forEach( item => {
        if(item.sexo == 'f'){
            console.log( item.id, item.nome, item.idade, item.salario, item.status )
        }
    })
}
// listarTodosValidos()
// listarMasculino()
// listarTodos()
listarFeminino()
