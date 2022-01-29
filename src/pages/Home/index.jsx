import { Button, Container, Title } from '@components/custom';
import { colors, fonts, styles } from '@themes';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { homeCreators } from './reducer';

const Todos = styled.div`
    margin-top: 2em;
    border-radius: ${styles.borderRadius};
    padding: 1.5em;
    background-color: ${colors.background};
    max-height: 70vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 5px; 
        
    }
    ::-webkit-scrollbar-thumb {
        background-color: dodgerblue;
        border-radius: ${styles.borderRadius};
    }
`;
const Todo = styled.div`
    padding: 1em;
    border-radius: ${styles.borderRadius};
    color: ${props => props.completed ? colors.white : colors.text};
    font-weight: ${fonts.weights.bold};
    margin: 1em 0;
    background-color: ${props => props.completed ? colors.primary : colors.layer};
`;
const Header = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

export default function Home() {
    const dispatch = useDispatch();
    const { loading, todos } = useSelector(store => store.homeReducer);
    return <Container>
        <br />
        <Todos>
            <Header>
                <Title color={colors.text}>Todos</Title>
                <Button disabled={loading} onClick={_ => {
                    todos ? dispatch(homeCreators.clear()) : dispatch(homeCreators.requestGetTodos())
                }}>
                    {todos ? 'Clear Todos' : 'Fetch Todos'}
                </Button>
            </Header>
            {todos ? todos.map(todo => <Todo key={JSON.stringify(todo)} completed={todo.completed}>{todo.title}</Todo>) : <p style={{ color: colors.text }}>No Todos, Fetch Some</p>}
        </Todos>
    </Container>;
}
