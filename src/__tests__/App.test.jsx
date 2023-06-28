import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import App from '../App';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from '../Context/Settings';

describe('App Tests', ()  => {

  test('render a header element as expected', () => {
    render(
    <MantineProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </MantineProvider>
    );

    let header = screen.getByTestId('header');
    let h1 = screen.getByTestId('header-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  })

  test('render a footer element as expected', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer');

    expect(footer).toBeTruthy();
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('©2023 Ike Steoger');
  })

})
