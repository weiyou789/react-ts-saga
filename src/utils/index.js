import 'whatwg-fetch';
/*
* 对象转字符串
* */
export function dataToString(data) {
    var array = [];
    var index = 0;
    for (var item in data) {
        if (data[item]) {
            array[index++] = [item, data[item]];
        }
    }
    return new URLSearchParams(array).toString();
}
/*
* 宽度计算
* */
export function RemWidth(num) {
    return num / 100 + 'rem';
}
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
* Fetch封装
* */
export function myFetch(url, data, method) {
    if (method === void 0) { method = 'GET'; }
    var initObj = {};
    //url = api + url
    var dataStr = '';
    if (data) {
        dataStr = dataToString(data);
    }
    if (method === 'GET') {
        if (data) {
            if (url.indexOf('?') > -1) {
                url += '&' + dataStr;
            }
            else {
                url += '?' + dataStr;
            }
        }
    }
    else {
        initObj = {
            body: dataStr,
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            method: method
        };
    }
    return fetch(url, initObj).then(function (response) { return response.json(); });
}
//# sourceMappingURL=index.js.map