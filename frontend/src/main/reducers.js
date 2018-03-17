import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livros',
        list: [
            {
                _id: 1,
                description: 'Pagar fatura do cartão',
                done: true
            },
            {
                _id: 2,
                description: 'Reunião com a equipe',
                done: false
            },
            {
                _id: 3,
                description: 'Teste de React',
                done: false
            },
        ]
    }) 
})

export default rootReducer