import React from 'react'
import moment from 'moment'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove, markAsDone, markAsPending } from './todoActions'

import { Table, Button } from 'react-bootstrap'
import { FaCheck, FaUndo, FaTrashAlt } from 'react-icons/fa'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <Button variant='success' onClick={() => props.markAsDone(todo)} className={todo.done ? 'd-none' : ''}> <FaCheck /> </Button>{' '}
                    <Button variant='warning' onClick={() => props.markAsPending(todo)} className={!todo.done ? 'd-none' : ''}> <FaUndo /> </Button>{' '}
                    <Button variant='danger' onClick={() => props.remove(todo)}> <FaTrashAlt /> </Button>
                </td>
                <td>{moment(todo.createdAt).format('D-MM-YY, h:mm:ss')}</td>
                <td className={todo.finishedAt ? '' : 'text-hide'}>{moment(todo.finishedAt).format('D-MM-YY, h:mm:ss')}</td>
            </tr>
        ))
    }

    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                    <th className='tableTime'>Início</th>
                    <th className='tableTime'>Fim</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table >
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispathToProps = dispatch => bindActionCreators({ remove, markAsDone, markAsPending }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(TodoList)