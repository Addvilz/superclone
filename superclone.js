'use strict';

const SuperClone = value => JSON.parse(JSON.stringify(value));

if (typeof module === 'object' && module.exports) {
    module.exports = SuperClone;
} else if (typeof window === 'object') {
    window.SuperClone = SuperClone;
}
