import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | top giffy', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('TopGiffy');
    assert.dom('h2').hasText('Welcome to Top Giffy!');
    assert.dom('.gif').exists({ count: 50 });
  });

  test('visiting /gif/2m58Jife4Uz0TSpAS4', async function (assert) {
    await visit('/gif/2m58Jife4Uz0TSpAS4');

    assert.equal(currentURL(), '/gif/2m58Jife4Uz0TSpAS4');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('TopGiffy');
    assert
      .dom('h2')
      .containsText('You Got It Art GIF by GIPHY Studios Originals');
    assert.dom('.gif.detailed').exists();
    assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
    assert.equal(tweetURL.host, 'twitter.com');

    assert.equal(
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/gif/2m58Jife4Uz0TSpAS4`
    );
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('TopGiffy');
    assert.dom('h2').hasText('About Top Giffy');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('TopGiffy');
    assert.dom('nav a.menu-about').hasText('About');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
