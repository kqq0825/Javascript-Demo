// Javascript继承模式：基于原型继承
// 每个对象都会有一个隐藏属性__proto__,指向原型对象。

// 简易版本：
function Father(name, age) {
  this.name = name;
  this.age = age;
}
Father.prototype.say = function () {
  console.log("阿巴阿巴阿巴" + this.name);
};
function Son(name, age, school) {
  // 将父类的属性加在子类的实例上
  Father.call(this, name, age);
  this.school = school;
}
// 将子类实例__proto__指向父类的一个实例
Son.prototype = new Father();
// 将子类原型对象的构造函数重新指向子类的构造函数
Son.prototype.constructor = Son;

let sonInstance = new Son();
l;
sonInstance.say();
