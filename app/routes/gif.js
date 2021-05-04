import Route from '@ember/routing/route';

export default class GifRoute extends Route {
  async model(params) {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/${params.gif_id}?api_key=ZiYGYAk0lKDXOcwErK4PEDZ22KWnoBoK`
    );
    let { data } = await response.json();
    return { ...data };
  }
}
