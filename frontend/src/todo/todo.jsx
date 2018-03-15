import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        // metodo obrigatório do construtor
        super(props)
        // definindo o estado inicial da aplicação
        this.state = {description: '', list: [] }
        // definindo o contexto do this
        this.handleAdd = this.handleAdd.bind(this) 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({description: e.target.value })
    }

    handleAdd(){
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}
