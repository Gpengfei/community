/**
 * 数据缓存读取
 * 保存数据：window.sessionStorage.setItem('key',value);
 * 读取数据：window.sessionStorage.getItem('key');
 * 删除单个数据：window.sessionStorage.removeItem('key');
 * 删除所有数据：window.sessionStorage.clear();
 * 得到某个索引的key：window.sessionStorage.key(index);
 * */
const A_sessionStorage = (name, obj) => {
  console.log(name, obj);
  let keys;
  let arr = [];
  let i = 0;
  switch (name) {
    /*保存数据*/
    case "setItem":
      for (keys in obj) {
        window.sessionStorage.setItem(keys, obj[keys]);
      }
      break;
    /*读取数据*/
    case "getItem":
      for (keys in obj) {
        arr.splice(i++, 0, window.sessionStorage.getItem(keys));
      }
      break;
    /*删除单个数据*/
    case "removeItem":
      for (keys in obj) {
        window.sessionStorage.removeItem(keys);
      }
      break;
    /*删除所有数据*/
    case "clear":
      window.sessionStorage.clear();
      break;
  }
};

export default A_sessionStorage;
