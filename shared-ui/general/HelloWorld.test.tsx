import { render } from "@testing-library/react";
import {HelloWorld} from "./HelloWorld";

describe("HelloWorld", () => {
    it("should render Hello World", () => {
        const { findByText } = render(<HelloWorld />);
        expect(findByText("Hello World")).toBeTruthy();
    });
})
