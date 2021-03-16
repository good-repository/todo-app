import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [], createdAt: '', finishedAt: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ description, list: resp.data }))
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        if (description === '') {
            alert('Insira uma tarefa válida!')
        } else {
            axios.post(URL, { description })
                .then(resp => this.refresh())
        }
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { done: true, finishedAt: Date.now() })
        this.refresh()
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { done: false, finishedAt: null })
        this.refresh()
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}