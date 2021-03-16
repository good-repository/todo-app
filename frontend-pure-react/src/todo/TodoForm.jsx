import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import { FaPlus, FaSearch, FaTimes } from 'react-icons/fa';

export default props => {
    const shortCuts = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <Form className='mt-3 mb-4' >
            <Form.Row>
                <Col xs='12' sm='9' md='10'>
                    <Form.Group>
                        <Form.Control
                            placeholder='Digite uma tarefa'
                            onChange={props.handleChange}
                            value={props.description}
                            onKeyUp={shortCuts}
                        />
                    </Form.Group>
                </Col>
                <Col xs='12' sm='3' md='2'>
                    <Form.Group>
                        <Button variant='primary' onClick={props.handleAdd}> <FaPlus /> </Button>{' '}
                        <Button variant='info' onClick={props.handleSearch}> <FaSearch /> </Button>{' '}
                        <Button variant='secondary' onClick={props.handleClear}> <FaTimes /> </Button>
                    </Form.Group>
                </Col>
            </Form.Row>
        </Form>
    )
}