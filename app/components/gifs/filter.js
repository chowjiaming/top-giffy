import Component from '@glimmer/component';

export default class GifsFilterComponent extends Component {
  get results() {
    let { gifs, query } = this.args;

    if (query) {
      gifs = gifs.filter((gif) => gif.title.includes(query));
    }

    return gifs;
  }
}