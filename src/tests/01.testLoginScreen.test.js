import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

describe('Test the <Login.js /> pages', () => {
  it('Verifica se existe um input name e email', ()=> {
    renderWithRouter(<Login />);
    const inputName = screen.getByLabelText(/nome:/i);
    const inputEmail = screen.getByLabelText(/email:/i);
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
  })
  it(`Verifica se existe um botão e se ele está desabilitado
  quando os inputs estiverem vazios`, ()=> {
    renderWithRouter(<Login />);
    const buttonPlay = screen.getByRole('button', { name: /play/i });
    expect(buttonPlay).toBeInTheDocument();
    expect(buttonPlay).toBeDisabled();
    const email = 'email@email.com';
    const inputEmail = screen.getByLabelText(/email:/i);
    userEvent.type(inputEmail, email);
    const name = screen.getByLabelText(/email:/i);
    const inputName = screen.getByLabelText(/nome:/i);
    userEvent.type(inputName, 'F');
    expect(buttonPlay).toBeEnabled();
  })
  
  // Testar se encaminha para a page Games
})