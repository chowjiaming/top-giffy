import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch(
      'https://api.giphy.com/v1/gifs/trending?api_key=ZiYGYAk0lKDXOcwErK4PEDZ22KWnoBoK&limit=50&rating=g'
    );
    let { data } = await response.json();
    return data.map((model) => {
      return { ...model };
    });
  }
}
