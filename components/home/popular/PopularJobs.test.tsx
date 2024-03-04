import renderer from 'react-test-renderer';
import Popularjobs from './Popularjobs';

describe("Home", () => {
    it("has 1 child", () => {
        const tree = renderer.create(<Popularjobs />).toJSON();
        expect(tree.children.length).toBe(1)
    })
})