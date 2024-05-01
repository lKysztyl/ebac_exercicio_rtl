import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
    
    test('Deve renderizar dois comentario', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('text-area-id'), {
            target: {
                value: 'Rust baby!'
            }
        });
        fireEvent.click(screen.getByTestId('button-id'));
        expect(screen.getByText('Rust baby!')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('text-area-id'), {
            target: {
                value: 'Golang baby!'
            }
        });
        fireEvent.click(screen.getByTestId('button-id'));
        expect(screen.getByText('Golang baby!')).toBeInTheDocument();
    });
});