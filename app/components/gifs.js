import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GifsComponent extends Component {
  @tracked query = '';
}