import Component1 from './Component1.svelte';
import {render} from '@testing-library/svelte'

it('it works', async () => {
  const {getByText} = render(Component1);
  expect(getByText((content) => content.startsWith('My name is'))).toBeTruthy()
  //
  // // with jest-dom
  // expect(counter).toHaveTextContent('2');
});
