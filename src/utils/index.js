/*
* isString
* */
export function isString(object) {
    return typeof object === 'string';
}
/*
* 深拷贝
* */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/*
* 枚举转化数组方法
* */
export function enumToArray(enums, enumV) {
    if (enumV === void 0) { enumV = {}; }
    var array = Object.keys(enums).map(function (el, index) {
        return {
            value: enumV[el] || index,
            title: enums[el],
        };
    });
    return array;
}
/*
* 构建树状数据
* */
export function mapBuildTree(list, field) {
    var root = {
        id: -1,
        parentId: '',
        children: [],
        ids: [-1]
    };
    var traverse = function (tree, node, index, indexs) {
        if (tree.id === node.parentId) {
            node.ids = tree.ids.concat([node.id]);
            if (!tree.children) {
                tree.children = [];
                tree.children.push(node);
            }
            else {
                tree.children.push(node);
            }
            indexs.push(index);
        }
        else if (tree.children) {
            tree.children.map(function (item) {
                traverse(item, node, index, indexs);
            });
        }
    };
    var setTree = function (data, preLeng) {
        var indexs = [];
        for (var i = 0; i < data.length; i++) {
            data[i].id = data[i][field];
            data[i].ids = [data[i].id];
            data[i].key = "" + data[i].parentId + data[i].id;
            traverse(root, data[i], i, indexs);
        }
        indexs.reverse().map(function (item) {
            data.splice(item, 1);
        });
        if (data.length > 0 && data.length < preLeng) {
            setTree(data, data.length);
        }
        return root.children;
    };
    return setTree(list.slice(), list.slice().length);
}
/*
* 格式化价格
* */
export function filterCurrency(value) {
    return Number(value).toFixed(2);
}
/*
* 去抖函数debounce
* */
export function debounce(fn, delay, param) {
    var timer;
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        fn(param);
    }, delay);
}
/*
/!*
* 根据authCode控制按钮显示
* *!/
export function filterButtonbyAuth(actionName) {
    const authList = userStore.userInfo.authCodes.slice()
    return authList.indexOf(ActionBaseCode[actionName].toString()) > -1
}*/
//# sourceMappingURL=index.js.map