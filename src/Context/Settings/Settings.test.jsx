import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';
import App from '../../App';


describe('App Tests', () => {

    test('default values', () => {
      render(
      <SettingsProvider>
        <App />
      </SettingsProvider>
      )
      expect(screen.getByTestId('header')).toHaveTextContent('To Do List: 0 items pending')
    })

    test('context values', () => {
      render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({sort}) => {
              return (
                <h1 data-testid="test-h1">Test: {sort}</h1>
              )
            }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
      )
      const h1 = screen.getByTestId('test-h1')
      expect(h1).toHaveTextContent('Test: difficulty')
    })

    // test('child component tests', () => {
    //   render(
    //   <SettingsProvider>
    //     <App />
    //   </SettingsProvider>
    //   )
    //   expect(screen.getByTestId('list-div')).toHaveTextContent('')
    // })
    
  });