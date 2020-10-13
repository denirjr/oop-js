const father = {
  getvalue: function funcao() {
    return this.value;
  },
  value: 10,
};


const son = Object.create(father);
son.getvalue = function otherFunc() {
  return this.value + 5;
};
son.value = 2;
console.log(father.getvalue()); //Continue to return  10
console.log(son.getvalue()); //Return 7
