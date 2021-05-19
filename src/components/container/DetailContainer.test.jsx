import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import starTrekData from '../../TestData/startrek.json'
import DetailContainer from './DetailContainer'
describe('ListPage component', () => {
  const server = setupServer(
    rest.get('https://trek-dex.herokuapp.com/api/v1/characters', (req, res, ctx) => {
      res(ctx.json(starTrekData))
    })
  )

  const fakeProps = {
    match: {
      params: {
        id: '6'
      }
    }
  }

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  it('renders a specific Star Trek characters to the screen on load', async () => {
    render(<DetailContainer {...fakeProps}/>)

    screen.getByText('Loading', {exact: false})
    await screen.findByText('Human', {exact: false})
  })
})