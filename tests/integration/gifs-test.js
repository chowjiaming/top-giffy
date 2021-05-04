import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gifs', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      gifs: [
        {
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
            },
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
        {
          type: 'gif',
          id: 'SsUdK5PMJri8QutNok',
          url: 'https://giphy.com/gifs/cat-spring-garden-SsUdK5PMJri8QutNok',
          slug: 'cat-spring-garden-SsUdK5PMJri8QutNok',
          bitly_gif_url: 'https://gph.is/g/Zkz93Oa',
          bitly_url: 'https://gph.is/g/Zkz93Oa',
          embed_url: 'https://giphy.com/embed/SsUdK5PMJri8QutNok',
          username: 'chibird',
          source: 'https://chibird.com/',
          title: 'May Day GIF by Chibird',
          rating: 'g',
          content_url: '',
          source_tld: 'chibird.com',
          source_post_url: 'https://chibird.com/',
          is_sticker: 0,
          import_datetime: '2019-05-01 04:14:16',
          trending_datetime: '2021-05-04 05:00:13',
          images: {
            original: {
              height: '480',
              width: '480',
              size: '31914',
              url:
                'https://media2.giphy.com/media/SsUdK5PMJri8QutNok/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
              mp4_size: '33355',
              mp4:
                'https://media2.giphy.com/media/SsUdK5PMJri8QutNok/giphy.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.mp4&ct=g',
              webp_size: '24888',
              webp:
                'https://media2.giphy.com/media/SsUdK5PMJri8QutNok/giphy.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.webp&ct=g',
              frames: '14',
              hash: 'b6f81a028170d7b33f25183443af3b5a',
            },
          },
          user: {
            avatar_url:
              'https://media1.giphy.com/avatars/chibird/Y5Id1jkAgQmj.gif',
            banner_image:
              'https://media1.giphy.com/headers/chibird/DcKR6vFwkwto.gif',
            banner_url:
              'https://media1.giphy.com/headers/chibird/DcKR6vFwkwto.gif',
            profile_url: 'https://giphy.com/chibird/',
            username: 'chibird',
            display_name: 'Chibird',
            description: 'Cute and motivational animations!',
            instagram_url: 'https://instagram.com/chibirdart',
            website_url: 'http://chibird.com',
            is_verified: true,
          },
        },
        {
          type: 'gif',
          id: 'fsQ0GEvATlVuKgEQa7',
          url:
            'https://giphy.com/gifs/helloall-flower-may-flowers-happy-fsQ0GEvATlVuKgEQa7',
          slug: 'helloall-flower-may-flowers-happy-fsQ0GEvATlVuKgEQa7',
          bitly_gif_url: 'https://gph.is/g/Z5LVNKG',
          bitly_url: 'https://gph.is/g/Z5LVNKG',
          embed_url: 'https://giphy.com/embed/fsQ0GEvATlVuKgEQa7',
          username: 'helloall',
          source: '',
          title: 'Flower Greeting GIF by Hello All',
          rating: 'g',
          content_url: '',
          source_tld: '',
          source_post_url: '',
          is_sticker: 0,
          import_datetime: '2021-04-27 13:47:32',
          trending_datetime: '2021-05-04 04:45:08',
          images: {
            original: {
              height: '480',
              width: '480',
              size: '2446651',
              url:
                'https://media4.giphy.com/media/fsQ0GEvATlVuKgEQa7/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
              mp4_size: '372771',
              mp4:
                'https://media4.giphy.com/media/fsQ0GEvATlVuKgEQa7/giphy.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.mp4&ct=g',
              webp_size: '1530658',
              webp:
                'https://media4.giphy.com/media/fsQ0GEvATlVuKgEQa7/giphy.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.webp&ct=g',
              frames: '138',
              hash: 'e37f6d7511e213787f3929ac72f6372e',
            },
          },
          user: {
            avatar_url:
              'https://media4.giphy.com/avatars/helloall/hGrSqJDMUajv.gif',
            banner_image:
              'https://media4.giphy.com/headers/helloall/YF5eJMrkcjmM.gif',
            banner_url:
              'https://media4.giphy.com/headers/helloall/YF5eJMrkcjmM.gif',
            profile_url: 'https://giphy.com/helloall/',
            username: 'helloall',
            display_name: 'Hello All',
            description:
              'Hello All is an initiative to bring diversity and representation into conversational content.',
            instagram_url: 'https://instagram.com/HelloAllArt',
            website_url: 'https://helloall.co',
            is_verified: true,
          },
        },
      ],
    });
  });

  test('it renders all gifs by default', async function (assert) {
    await render(hbs`<Gifs @gifs={{this.gifs}} />`);

    assert.dom('.gifs').exists();
    assert.dom('.gifs input').exists();

    assert.dom('.gifs .results').exists();
    assert.dom('.gifs .results li').exists({ count: 3 });

    assert
      .dom('.gifs .results li:nth-of-type(1)')
      .containsText(
        'https://giphy.com/gifs/studiosoriginals-2m58Jife4Uz0TSpAS4'
      );

    assert
      .dom('.gifs .results li:nth-of-type(2)')
      .containsText(
        'https://giphy.com/gifs/cat-spring-garden-SsUdK5PMJri8QutNok'
      );

    assert
      .dom('.gifs .results li:nth-of-type(3)')
      .containsText(
        'https://giphy.com/gifs/helloall-flower-may-flowers-happy-fsQ0GEvATlVuKgEQa7'
      );
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Gifs @gifs={{this.gifs}} />`);

    assert.dom('.gifs').exists();
    assert.dom('.gifs input').exists();

    await fillIn('.gifs input', 'Originals');

    assert.dom('.gifs .results').exists();
    assert.dom('.gifs .results li').exists({ count: 1 });
    assert.dom('.gifs .results li').containsText('You Got It Art GIF by GIPHY Studios Originals');

    await fillIn('.gifs input', 'Chibird');

    assert.dom('.gifs .results').exists();
    assert.dom('.gifs .results li').exists({ count: 1 });
    assert.dom('.gifs .results li').containsText('May Day GIF by Chibird');

    await fillIn('.gifs input', 'All');

    assert.dom('.gifs .results').exists();
    assert.dom('.gifs .results li').exists({ count: 1 });
    assert.dom('.gifs .results li').containsText('Flower Greeting GIF by Hello All');
  });
});
