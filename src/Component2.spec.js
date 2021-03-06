import Component1 from './Component2.svelte';
import {fireEvent, render} from '@testing-library/svelte'

it('it works', async () => {
  const {getByText} = render(Component1);

  const submit = getByText('Submit');

  await fireEvent.click(submit);
});
