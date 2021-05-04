import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a gif', async function (assert) {
    this.setProperties({
      gif: {
        type: 'gif',
        id: '2m58Jife4Uz0TSpAS4',
        url: 'https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4',
        slug: 'studiosoriginals-2m58Jife4Uz0TSpAS4',
        bitly_gif_url: 'https://gph.is/g/4AODKQO',
        bitly_url: 'https://gph.is/g/4AODKQO',
        embed_url: 'https://giphy.com/embed/2m58Jife4Uz0TSpAS4',
        username: 'studiosoriginals',
        source: '',
        title: 'You Got It Art GIF by GIPHY Studios Originals',
        rating: 'g',
        content_url: '',
        source_tld: '',
        source_post_url: '',
        is_sticker: 0,
        import_datetime: '2021-04-23 18:49:38',
        trending_datetime: '2021-05-04 05:15:08',
        images: {
          original: {
            height: '360',
            width: '480',
            size: '1492357',
            url:
              'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
            mp4_size: '255547',
            mp4:
              'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.mp4&ct=g',
            webp_size: '525554',
            webp:
              'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.webp&ct=g',
            frames: '45',
            hash: '088f051005ae592b1076bf897d8ab7a9',
          }
        },
        user: {
          avatar_url:
            'https://media0.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg',
          banner_image:
            'https://media0.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif',
          banner_url:
            'https://media0.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif',
          profile_url: 'https://giphy.com/studiosoriginals/',
          username: 'studiosoriginals',
          display_name: 'GIPHY Studios Originals',
          description: '',
          instagram_url: '',
          website_url: 'https://giphy.com/studios',
          is_verified: true,
        },
      },
    });

    await render(hbs`<Gif @gif={{this.gif}} />`);

    assert.dom('article').hasClass('gif');
    assert.dom('article h3').hasText('You Got It Art GIF by GIPHY Studios Originals');
    assert.dom('article h3 a').hasAttribute('href', '/gif/2m58Jife4Uz0TSpAS4');
    assert.dom('article .detail.owner').includesText('Creator: N/A');
    assert.dom('article .detail.type').includesText('GIPHY Profile: https://giphy.com/studiosoriginals/');
    assert.dom('article .detail.bedrooms').includesText('GIPHY Link: https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4');
    assert.dom('article .image').exists();
  });
});
