import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = { description: "", list: []}

        this.handleChanged = this.handleChanged.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

    }

    handleChanged(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        console.log(this.state.description)
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChanged}
                    description={this.state.description}
                />
                <TodoList />
            </div>
        )
    }
}