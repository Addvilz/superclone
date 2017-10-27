const SuperClone = require('.');
const expect = require('chai').expect;

describe('SuperClone', () => {
    it('Simple object should be the same', () => {
        const a = {
            foo: 1,
            bar: 2,
            baz: 3
        };

        expect({
            foo: 1,
            bar: 2,
            baz: 3
        }).to.deep.equal(SuperClone(a));
    });

    it('Non-scalars should be removed', () => {
        const a = {
            foo: 1,
            bar: 2,
            baz: () => {
            }
        };

        expect({
            foo: 1,
            bar: 2
        }).to.deep.equal(SuperClone(a));
    });

    it('It clones nested values', () => {
        const a = {
            foo: {
                bar: {
                    baz: 'batman'
                }
            }
        };

        expect({
            foo: {
                bar: {
                    baz: 'batman'
                }
            }
        }).to.deep.equal(SuperClone(a));
    });
});
