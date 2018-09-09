import { mount } from '@vue/test-utils';

import InputButtons from './InputButtons.vue';

describe('InputButtons', () => {
  it('has buttons', () => {
    const wrapper = mount(InputButtons);
    const buttons = wrapper.findAll('.button');

    expect(buttons).toHaveLength(6);
  });
});
