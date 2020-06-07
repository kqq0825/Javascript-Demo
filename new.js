// new 关键字的作用 返回一个类的实例对象
// 1.首先要创建一个对象
// 2.将这个对象的原型对象指向构造函数的原型对象
// 3.执行构造函数
// 4.返回这个对象

function newFn (fn){
    let obj = Object.create(fn.prototype)
    var res = fn.call(obj)
    return res instanceof Object?res:obj;
}