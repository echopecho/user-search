import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "./Search";
import { AppContext } from "../../context";

const mockDispatch = jest.fn();

afterEach(cleanup);

describe("Search component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppContext.Provider value={{ state: {}, dispatch: mockDispatch }}>
        <Search />
      </AppContext.Provider>
    );
  });

  test("it should render without error", () => {
    const { getByTestId } = wrapper;
    const component = getByTestId("search-component");
    expect(component).toBeTruthy();
  });

  test("it should render a search button", () => {
    const { getByTestId } = wrapper;
    const btn = getByTestId("search-btn");
    expect(btn).toBeTruthy();
  });

  test("it should render a search input", () => {
    const { getByTestId } = wrapper;
    const btn = getByTestId("search-input");
    expect(btn).toBeTruthy();
  });

  test("it should fire dispatch on form submit", () => {
    const { getByTestId } = wrapper;
    const form = getByTestId("search-form");
    fireEvent.submit(form);
    expect(mockDispatch).toHaveBeenCalled();
  });

  test("it should fire dispatch on button click", () => {
    const { getByTestId } = wrapper;
    const btn = getByTestId("search-btn");
    fireEvent.click(btn);
    expect(mockDispatch).toHaveBeenCalled();
  });

  test("it should clear the input on form submit", () => {
    const { getByTestId } = wrapper;
    const input = getByTestId("search-input");
    const form = getByTestId("search-form");
    const expectedString = "test string";
    fireEvent.change(input, { target: { value: expectedString } });
    fireEvent.submit(form);
    expect(input.value).not.toMatch(expectedString);
  });
});
