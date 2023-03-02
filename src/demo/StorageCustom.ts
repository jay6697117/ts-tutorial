import { nanoid } from 'nanoid';

// types:start
type TKey = string; //key类型
type TExpire = null | number; //有效期类型
interface Data<T> {
  //格式化data类型
  value: T;
  expire: TExpire;
}
interface Result<T> {
  //返回值类型
  message: string;
  value: T | null;
}
interface IStorage {
  //class方法约束
  set: <T>(key: TKey, value: T, expire: TExpire) => void;
  get: <T>(key: TKey) => Result<T | null>;
  remove: (key: TKey) => void;
  clear: () => void;
}
// types:end

export class StorageCustom implements IStorage {
  //存储接受 key value 和过期时间 默认永久(null)
  public set<T = any>(key: TKey, value: T, expire: TExpire = null) {
    //格式化数据
    const data = {
      value,
      expire
    };
    //存进去
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get<T = any>(key: TKey): Result<T | null> {
    const value = localStorage.getItem(key);
    //读出来的数据是否有效
    if (value) {
      const obj: Data<T> = JSON.parse(value);
      const now = Date.now();
      //有效并且是数组类型 并且过期了 进行删除和提示
      if (obj.expire && obj.expire < now) {
        this.remove(key);
        return {
          message: `您的${key}已过期`,
          value: null
        };
      } else {
        //否则成功返回
        return {
          message: '成功读取',
          value: obj.value
        };
      }
    } else {
      //否则key值无效
      console.warn('key值无效');
      return {
        message: `key值无效`,
        value: null
      };
    }
  }
  //删除某一项
  public remove(key: TKey) {
    localStorage.removeItem(key);
  }
  //清空所有值
  public clear() {
    localStorage.clear();
  }
}

const sc = new StorageCustom();
//五秒后过期
sc.set('a', nanoid(), Date.now() + 5000);
// sc.set('a', nanoid());

let count = 1;
let timer: any = null;
timer = setInterval(() => {
  const a = sc.get('a');
  console.log(count, ':', a);
  count += 1;
  if (!a.value) {
    timer && clearInterval(timer);
    timer = null;
  }
}, 500);
