import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | gif', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');

    let gif = store.createRecord('gif', {
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
        downsized: {
          height: '360',
          width: '480',
          size: '1492357',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
        },
        downsized_large: {
          height: '360',
          width: '480',
          size: '1492357',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
        },
        downsized_medium: {
          height: '360',
          width: '480',
          size: '1492357',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.gif&ct=g',
        },
        downsized_small: {
          height: '318',
          width: '424',
          mp4_size: '113005',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-downsized-small.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-downsized-small.mp4&ct=g',
        },
        downsized_still: {
          height: '360',
          width: '480',
          size: '1492357',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy_s.gif&ct=g',
        },
        fixed_height: {
          height: '200',
          width: '267',
          size: '434778',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200.gif&ct=g',
          mp4_size: '131211',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200.mp4&ct=g',
          webp_size: '262018',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200.webp&ct=g',
        },
        fixed_height_downsampled: {
          height: '200',
          width: '267',
          size: '61104',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200_d.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200_d.gif&ct=g',
          webp_size: '43524',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200_d.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200_d.webp&ct=g',
        },
        fixed_height_small: {
          height: '100',
          width: '134',
          size: '153351',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100.gif&ct=g',
          mp4_size: '54673',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100.mp4&ct=g',
          webp_size: '104850',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100.webp&ct=g',
        },
        fixed_height_small_still: {
          height: '100',
          width: '134',
          size: '4275',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100_s.gif&ct=g',
        },
        fixed_height_still: {
          height: '200',
          width: '267',
          size: '10589',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200_s.gif&ct=g',
        },
        fixed_width: {
          height: '150',
          width: '200',
          size: '289991',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w.gif&ct=g',
          mp4_size: '92916',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w.mp4&ct=g',
          webp_size: '181336',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w.webp&ct=g',
        },
        fixed_width_downsampled: {
          height: '150',
          width: '200',
          size: '40087',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w_d.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w_d.gif&ct=g',
          webp_size: '28516',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w_d.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w_d.webp&ct=g',
        },
        fixed_width_small: {
          height: '75',
          width: '100',
          size: '100251',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100w.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100w.gif&ct=g',
          mp4_size: '38068',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100w.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100w.mp4&ct=g',
          webp_size: '73838',
          webp:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100w.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100w.webp&ct=g',
        },
        fixed_width_small_still: {
          height: '75',
          width: '100',
          size: '3092',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/100w_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=100w_s.gif&ct=g',
        },
        fixed_width_still: {
          height: '150',
          width: '200',
          size: '8862',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/200w_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=200w_s.gif&ct=g',
        },
        looping: {
          mp4_size: '1195011',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-loop.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-loop.mp4&ct=g',
        },
        original_still: {
          height: '360',
          width: '480',
          size: '33862',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy_s.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy_s.gif&ct=g',
        },
        original_mp4: {
          height: '360',
          width: '480',
          mp4_size: '255547',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy.mp4&ct=g',
        },
        preview: {
          height: '288',
          width: '384',
          mp4_size: '31097',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-preview.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-preview.mp4&ct=g',
        },
        preview_gif: {
          height: '83',
          width: '111',
          size: '49028',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-preview.gif?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-preview.gif&ct=g',
        },
        preview_webp: {
          height: '174',
          width: '232',
          size: '48932',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-preview.webp?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-preview.webp&ct=g',
        },
        hd: {
          height: '810',
          width: '1080',
          mp4_size: '724591',
          mp4:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/giphy-hd.mp4?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=giphy-hd.mp4&ct=g',
        },
        '480w_still': {
          height: '360',
          width: '480',
          size: '1492357',
          url:
            'https://media0.giphy.com/media/2m58Jife4Uz0TSpAS4/480w_s.jpg?cid=df3115627165aodi05bdu03qb8slwlxw89zk6l843v9x0glz&rid=480w_s.jpg&ct=g',
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
      analytics_response_payload:
        'e=Z2lmX2lkPTJtNThKaWZlNFV6MFRTcEFTNCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9ZGYzMTE1NjI3MTY1YW9kaTA1YmR1MDNxYjhzbHdseHc4OXprNmw4NDN2OXgwZ2x6JmN0PWdpZg',
      analytics: {
        onload: {
          url:
            'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJtNThKaWZlNFV6MFRTcEFTNCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9ZGYzMTE1NjI3MTY1YW9kaTA1YmR1MDNxYjhzbHdseHc4OXprNmw4NDN2OXgwZ2x6JmN0PWdpZg&action_type=SEEN',
        },
        onclick: {
          url:
            'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJtNThKaWZlNFV6MFRTcEFTNCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9ZGYzMTE1NjI3MTY1YW9kaTA1YmR1MDNxYjhzbHdseHc4OXprNmw4NDN2OXgwZ2x6JmN0PWdpZg&action_type=CLICK',
        },
        onsent: {
          url:
            'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTJtNThKaWZlNFV6MFRTcEFTNCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9ZGYzMTE1NjI3MTY1YW9kaTA1YmR1MDNxYjhzbHdseHc4OXprNmw4NDN2OXgwZ2x6JmN0PWdpZg&action_type=SENT',
        },
      },
    });

    assert.equal(gif.type, 'gif');
  });
});
