import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Search from 'srcRoot/components/Search';

let searchElement: RenderResult;
describe('Testing <Search/>', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    searchElement = render(<Search onClick={handleClick} onChange={handleChange} />);
  });

  const settup = () => {
    return {
      input: searchElement.getByPlaceholderText('Search'),
    };
  };

  it('Show placeholder', () => {
    const { input } = settup();
    expect(input).toBeInTheDocument();
  });

  it('Call onClick when click', () => {
    const { input } = settup();

    fireEvent.click(input);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Return exactly value when change native input', () => {
    const { input } = settup();

    fireEvent.change(input, { target: { value: 'Hà Nội' } });
    expect(input['value']).toBe('Hà Nội');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
