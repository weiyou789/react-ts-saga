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
var LineButtonCom = /** @class */ (function (_super) {
    __extends(LineButtonCom, _super);
    function LineButtonCom(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTouch = function (index) {
            if (index === _this.state.activeKey) {
                _this.setState({
                    activeKey: ''
                }, _this.props.onTapBtn(''));
            }
            else {
                _this.setState({
                    activeKey: index
                }, _this.props.onTapBtn(index));
            }
        };
        _this.state = {
            activeKey: ''
        };
        return _this;
    }
    LineButtonCom.prototype.render = function () {
        var _a = this.props, title = _a.title, btnText = _a.btnText, btnWidth = _a.btnWidth;
        var handleTouch = this.handleTouch;
        var activeKey = this.state.activeKey;
        return (React.createElement("div", { className: styles.wrap },
            React.createElement("h2", null, title),
            React.createElement("div", { className: styles.btn },
                React.createElement("ul", null, btnText.map(function (item, index) {
                    return (React.createElement("li", { onClick: function () { return handleTouch(index); }, style: { width: btnWidth && btnWidth.length > 0 ? btnWidth[index] + "rem" : '1.5rem' }, className: index === activeKey ? styles.selectActive : '', key: index }, item));
                })))));
    };
    LineButtonCom.defaultProps = {
        btnWidth: [],
        btnText: [],
        onTapBtn: function () {
        }
    };
    return LineButtonCom;
}(React.Component));
export default LineButtonCom;
//# sourceMappingURL=index.js.map