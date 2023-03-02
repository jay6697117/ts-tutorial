// 定义一个接口，用于存储数据和过期时间
interface IStorageItem {
  value: any;
  expire: number | null;
}
// 定义一个类，用于封装localStorage的操作
export class LocalStorage {
  // 设置数据
  static set(key: string, value: any, expire: number | null = null) {
    // 如果有过期时间，就计算出过期的时间戳
    if (expire) {
      expire = Date.now() + expire;
    }
    // 创建一个对象，存储数据和过期时间
    const storageItem: IStorageItem = {
      value,
      expire
    };
    // 将对象转换为字符串，并存储到localStorage中
    localStorage.setItem(key, JSON.stringify(storageItem));
  }
  // 获取数据
  static get(key: string) {
    // 从localStorage中获取字符串数据
    const storageItemStr = localStorage.getItem(key);
    // 如果没有数据，就返回null
    if (!storageItemStr) {
      return null;
    }
    // 将字符串转换为对象
    const storageItem: IStorageItem = JSON.parse(storageItemStr);
    // 获取当前的时间戳
    const now = Date.now();
    // 如果有过期时间，并且已经过期了，就删除该数据，并返回null
    if (storageItem.expire && storageItem.expire < now) {
      localStorage.removeItem(key);
      return null;
    }
    // 否则，返回数据的值
    return storageItem.value;
  }
  // 删除数据
  static remove(key: string) {
    localStorage.removeItem(key);
  }
  // 清空所有数据
  static clear() {
    localStorage.clear();
  }
}

LocalStorage.set('666', '[1,2,3]');


setTimeout(() => {
  console.log(LocalStorage.get('666'));
}, 2900);
setTimeout(() => {
  console.log(LocalStorage.get('666'));
}, 4000);
setTimeout(() => {
  console.log(LocalStorage.get('666'));
}, 5000);
setTimeout(() => {
  console.log(LocalStorage.get('666'));
}, 6000);
setTimeout(() => {
  console.log(LocalStorage.get('666'));
}, 7000);
