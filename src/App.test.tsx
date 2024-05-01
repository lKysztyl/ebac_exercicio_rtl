import { render, screen } from '@testing-library/react'
import App from './App'

describe('Teste para o componente App', () => {
    test('deve renderizar o comentario do post original', () => {
        render(<App/>);
        expect(screen.getByText('Olha só que fofo esse Rust!')).toBeInTheDocument()
    })
})

