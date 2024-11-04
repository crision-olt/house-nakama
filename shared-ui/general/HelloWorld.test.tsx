import { render } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
    it("should render Hello World", () => {
        const { getByText } = render(<HelloWorld />);
        expect(getByText("Hello World")).toBeInTheDocument();
    });
})
