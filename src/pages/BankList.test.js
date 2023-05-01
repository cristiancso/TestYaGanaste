import { render } from '@testing-library/react';
import BankList from './BankList';

describe('BankList', () => {
  test('renders without crashing', () => {
    const { container } = render(<BankList />)

    expect(container).toMatchSnapshot();
  });
});