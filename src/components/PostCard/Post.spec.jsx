/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should reder postcard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: "title1" })).toHaveAttribute(
      "src",
      "img/img.png"
    );

    expect(screen.getByRole("heading", { name: "title1" })).toBeInTheDocument();

    expect(screen.getByText("body1")).toBeInTheDocument();
  });

  it('should match snapshot', () => {
     const {container} = render(<PostCard {...props} />)
     expect(container.firstChild).toMatchSnapshot();
  })
});
