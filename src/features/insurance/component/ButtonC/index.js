var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './style/style.scss';
var ButtonC = /** @class */ (function (_super) {
    __extends(ButtonC, _super);
    function ButtonC(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTouch = function (e) {
            _this.props.onTapBtn(e);
        };
        return _this;
    }
    ButtonC.prototype.render = function () {
        var _a = this.props, styleCus = _a.styleCus, btnText = _a.btnText;
        var handleTouch = this.handleTouch;
        return (React.createElement("div", { className: styles.buttonC, style: styleCus, onClick: handleTouch }, btnText));
    };
    ButtonC.defaultProps = {
        styleCus: {},
        btnText: '测试',
        onTapBtn: function () {
        }
    };
    return ButtonC;
}(React.Component));
export default ButtonC;
//# sourceMappingURL=index.js.map