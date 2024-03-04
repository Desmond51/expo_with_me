import renderer from 'react-test-renderer';
import Home from '.';

describe("Home", ()=>{
    it("has 4 children", ()=>{
        const tree = renderer.create(<Home />).toJSON();
        expect(tree.children.length).toBe(4)
    })
})