"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var stacked = require("stacked.js");
var stackedQueue = /** @class */ (function (_super) {
    __extends(stackedQueue, _super);
    function stackedQueue(limit, persistence) {
        if (limit === void 0) { limit = Infinity; }
        if (persistence === void 0) { persistence = undefined; }
        return _super.call(this, limit, persistence) || this;
    }
    stackedQueue.prototype.first = function () {
        var ret = _super.prototype.get.call(this).shift();
        _super.prototype.normalize.call(this);
        return ret;
    };
    stackedQueue.prototype.push = function (val) {
        _super.prototype.push.call(this, val);
    };
    stackedQueue.prototype.size = function () {
        return _super.prototype.size.call(this);
    };
    stackedQueue.prototype.empty = function () {
        return _super.prototype.empty.call(this);
    };
    stackedQueue.prototype.setlimit = function (limit) {
        _super.prototype.setlimit.call(this, limit);
    };
    stackedQueue.prototype.getlimit = function () {
        return _super.prototype.getlimit.call(this);
    };
    stackedQueue.prototype.swap = function (instance) {
        _super.prototype.swap.call(this, instance);
    };
    stackedQueue.prototype.get = function () {
        return _super.prototype.get.call(this);
    };
    stackedQueue.prototype.set = function (arr) {
        _super.prototype.set.call(this, arr);
    };
    return stackedQueue;
}(stacked));
if (typeof window === 'undefined')
    module.exports = stackedQueue;
