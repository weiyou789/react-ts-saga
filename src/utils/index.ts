
import 'whatwg-fetch';
interface EnumToArrayRes {
    value: number | string;
    title: string;
}

/*
* 对象转字符串
* */

export function dataToString(data: object){
    const array: any = []
    let index = 0
    for (const item in data) {
        if (data[item]) {
            array[index++] = [item, data[item]]
        }
    }
    return new URLSearchParams(array).toString()
}

/*
* isString
* */
export function isString(object: any) {
    return typeof object === 'string'
}

/*
* 深拷贝
* */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

/*
* 枚举转化数组方法
* */
export function enumToArray(enums, enumV = {}): EnumToArrayRes[] {
    const array = Object.keys(enums).map((el, index) => {
        return {
            value: enumV[el] || index,
            title: enums[el],
        }
    })
    return array as EnumToArrayRes[]
}

/*
* 构建树状数据
* */
export function mapBuildTree(list, field) {
    const root = {
        id: -1,
        parentId: '',
        children: [],
        ids: [-1]
    }
    const traverse = (tree, node, index, indexs) => {
        if (tree.id === node.parentId) {
            node.ids = [...tree.ids, node.id]
            if (!tree.children) {
                tree.children = []
                tree.children.push(node)
            } else {
                tree.children.push(node)
            }
            indexs.push(index)
        } else if (tree.children) {
            tree.children.map((item) => {
                traverse(item, node, index, indexs)
            })
        }
    }
    const setTree = (data, preLeng) => {
        const indexs = []
        for (let i = 0; i < data.length; i++) {
            data[i].id = data[i][field]
            data[i].ids = [data[i].id]
            data[i].key = `${data[i].parentId}${data[i].id}`
            traverse(root, data[i], i, indexs)
        }
        indexs.reverse().map((item) => {
            data.splice(item, 1)
        })
        if (data.length > 0 && data.length < preLeng) {
            setTree(data, data.length)
        }
        return root.children
    }
    return setTree(list.slice(), list.slice().length)
}

/*
* 格式化价格
* */
export function filterCurrency(value) {
    return Number(value).toFixed(2)
}

/*
* 去抖函数debounce
* */
export function debounce(fn, delay, param) {
    let timer
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        fn(param)
    }, delay)
}


/*
* Fetch封装
* */
export function myFetch(
    url: string,
    data?: object,
    method: string = 'GET'
): Promise<Response>{
    let initObj = {}
    //url = api + url
    let dataStr = ''
    if (data) {
        dataStr = dataToString(data)
    }
    if (method === 'GET') {
        if (data) {
            if (url.indexOf('?') > -1) {
                url += '&' + dataStr
            } else {
                url += '?' + dataStr
            }
        }
    } else {
        initObj = {
            body: dataStr,
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            method
        }
    }
    return fetch(url, initObj).then(response => response.json())
}
