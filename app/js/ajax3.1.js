
// function sendAjax(url, options) {
//     const __default = {
//         method: 'GET',
//         data: null,
//         dataType: 'json',
//         ...options
//     }
//     let method = __default.method.toUpperCase();
//     let {data} = __default;
//     if(method == 'GET') {
//         for(var key in data ) {
//             url += `&${key}=${data[key]}`
//         }
//         url += '&_=' + Date.now();
//         if(!url.includes('?')) {
//             url = url.replace('&', '?');
//         }
//         data = null;
//     }else {
//         data = JSON.stringify(data);
//     }
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.send(data);
//     return new Promise((resolve, reject) => {
//         xhr.onreadystatechange = function () {
//             if(xhr.readyState == 4) {
//                 let data = xhr.responseText;
//                 if(xhr.status == 200) {
//                     if(__default.dataType == 'json') {
//                         data = JSON.parse(data);
//                     }
//                     resolve(data);
//                 }else{
//                     reject(data);
//                 }
//             }
//         }
//     })
// }