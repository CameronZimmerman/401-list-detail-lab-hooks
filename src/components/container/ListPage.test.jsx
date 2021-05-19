import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import starTrekData from '../../TestData/startrek.json'
import ListPage from './ListPage'
describe('ListPage component', () => {
  const server = setupServer(
    rest.get('https://trek-dex.herokuapp.com/api/v1/characters', (req, res, ctx) => {
      res(ctx.json(starTrekData))
    })
  )
  
  const testProps = {

  }
  
  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('renders a list of Star Trek characters to the screen on load', async () => {
    render(<ListPage {...testProps} />)

    screen.getByText('Loading', {exact: false})
    const charList = await screen.findByRole('list', {name: 'characters'})
    screen.getByText('Scotty', {exact: false})
    expect(charList).not.toBeEmptyDOMElement()
  })
})