import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
export { shallow };
export default Enzyme;