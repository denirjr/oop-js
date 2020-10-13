const father = {
  setValue: function func(value) {
    this._value = value;
  },
  getvalue: function func1() {
    return this._value;
  },
};

const son = Object.create(father);
son.setValue(10);
console.log(son.getvalue()) // return 10;

const fatherPolyphomized = Object.create(father);
fatherPolyphomized.getvalue = function func() {
  return father.getvalue.call(this) + 5;
};

const sonPolyphomized = Object.create(fatherPolyphomized);
sonPolyphomized.setValue(20);
console.log(sonPolyphomized.getvalue()) // return 25;
