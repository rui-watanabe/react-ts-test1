import React from 'react'
import { Header } from "./Header"
import { fireEvent } from "@testing-library/react"

describe("Header", () => {
  it.todo("renders correctly")
  it("navigates to / on header title click", () => {
    const { getByText, history } = renderWithRouter(() => <Header />)
    fireEvent.click(getByText("Goblin Store"))
    expect(history.location.pathname).toEqual("/")
    })
})