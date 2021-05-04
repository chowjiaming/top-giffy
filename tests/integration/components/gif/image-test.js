import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given gif', async function (assert) {

    await render(hbs`
      <Gif::Image
        src="https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4"
        alt="Test Gif"
      />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', 'https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4')
      .hasAttribute('alt', 'Test Gif');
  });

  test('clicking on the gif toggles its size', async function (assert) {
    await render(hbs`
      <Gif::Image
        src="https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4"
        alt="Test Gif"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });

});
