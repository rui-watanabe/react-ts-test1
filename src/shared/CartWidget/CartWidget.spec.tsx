import React from "react"
import { CartWidget } from './CartWidget'
import { fireEvent } from "@testing-library/react"

describe("CartWidget", () => {
  it.todo("shows the amount of products in the cart")
  it("navigates to cart summary page on click", () => {
      const { getByRole, history } = renderWithRouter(() => (<CartWidget />))
      fireEvent.click(getByRole("link"))
      expect(history.location.pathname).toEqual("/cart")
    })
})