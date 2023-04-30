import { render } from "@testing-library/react";
import BankList from "./BankList";

describe('BankList', () => {
  it('renders without crashing', () => {
    render(<BankList />);
  });
});