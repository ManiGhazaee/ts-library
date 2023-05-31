Array.prototype.mat = function (index) {
        if (index < 0) {
                return this[this.length + index];
        }
        return this[index];
};