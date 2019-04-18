'use strict';

export default function Dimension(data) {
    if (!(this instanceof Dimension)) return new Dimension(data);
    const kbINmb = 1000;

    this.data = data;

    this.kbTOmb = function() { // kb в mb
        let castedSize = this.data / kbINmb;
        return castedSize
    };
    this.mbTOkb = function() { // mb в kb
        let castedSize = this.data * kbINmb;
        return castedSize
    };
}
