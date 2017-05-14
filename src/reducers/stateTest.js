

const list = [{
  id:0,
  tags: ['es5'],
  title: 'What value is returned from the following statement?',
  code: `
    function f() { return this }
    f.bind(6).bind(9)()
  `,
  answers: [
    {id:0, answer: '6', isTrue: true},
    {id:1, answer: '9'},
    {id:2, answer: '15'},
    {id:3, answer: 'Error'}
  ]
}, {
  id:1,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    (function() {
      var a = b = 3;
    })();
    console.log(typeof a, typeof b);
  `,
  answers: [
    {id:0, answer: 'undefined, number', isTrue: true},
    {id:1, answer: 'number, number'},
    {id:2, answer: 'number, undefined'},
    {id:3, answer: 'undefined, undefined'}
  ]
}, {
  id:2,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var myObject = {
      foo: 'bar',
      func: function() {
        var self = this;
        (function() {
          console.log(this.foo, self.foo);
        }());
      }
    };
    myObject.func();
  `,
  answers: [
    {id:0, answer: 'undefined, bar', isTrue: true},
    {id:1, answer: 'bar, bar'},
    {id:2, answer: 'bar, undefined'},
    {id:3, answer: 'undefined, undefined'}
  ]
}, {
  id:3,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    function foo1() {
      return {
        bar: 'hello'
      };
    }
    function foo2() {
      return
      {
        bar: 'hello'
      };
    }
    
    console.log(foo1(), foo2());
  `,
  answers: [
    {id:0, answer: '{bar: "hello"}, undefined', isTrue: true},
    {id:1, answer: '{bar: "hello"}, {bar: "hello"}'},
    {id:2, answer: 'undefined, {bar: "hello"}'},
    {id:3, answer: 'undefined, undefined'}
  ]
}, {
  id:4,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    console.log(typeof NaN === 'number');
    console.log(NaN === NaN);
    console.log('abc' / 3);
    console.log('A' - 'B' + '2');
  `,
  answers: [
    {id:0, answer: 'true, false, NaN, "NaN2"', isTrue: true},
    {id:1, answer: 'false, true, NaN, NaN'},
    {id:2, answer: 'true, true, 1, NaN'},
    {id:3, answer: 'false, false, NaN, "NaN2"'}
  ]
}, {id:5,
  tags: ['es5'],
  title: 'In what order will the numbers 1-4 be logged to the console when the code below is executed?',
  code: `
    (function() {
      console.log(1);
      setTimeout(function() {console.log(2)}, 1000);
      setTimeout(function() {console.log(3)}, 0);
      console.log(4);
    }());
  `,
  answers: [
    {id:0, answer: '1, 4, 3, 2', isTrue: true},
    {id:1, answer: '1, 2, 3, 4'},
    {id:2, answer: '1, 3, 4, 2'},
    {id:3, answer: '1, 4, 2, 3'}
  ]
}, {
  id:6,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    var arr1 = 'john'.split('');
    var arr2 = arr1.reverse();
    var arr3 = 'jones'.split('');
    arr2.push(arr3);
    console.log(arr1.slice(-1), arr2.slice(-1));
  `,
  answers: [
    {id:0, answer: '[["j","o","n","e","s"]], [["j","o","n","e","s"]]', isTrue: true},
    {id:1, answer: '["s"], ["s"]'},
    {id:2, answer: '["j"], [["j","o","n","e","s"]]'},
    {id:3, answer: '["j"], ["s"]'}
  ]
}, {
  id:7,
  tags: ['es5'],
  title: 'What will the code below output to the console?',
  code: `
    console.log(1 + '2' + '2');
    console.log(1 + +'2' + '2');
    console.log(1 + -'1' + '2');
    console.log(+'1' + '1' + '2');
  `,
  answers: [
    {id:0, answer: '122, 32, 02, 112', isTrue: true},
    {id:1, answer: '5, 32, 2, 4'},
    {id:2, answer: '122, 122, 112, 112'},
    {id:3, answer: '32, 32, 02, 112'}
  ]
}, {
  id:8,
  tags: ['es5'],
  title: 'What will be the output of the following code?',
  code: `
    for(var i = 0; i < 5; i++) {
      setTimeout(function() { console.log(i); }, i * 1000);
    }
  `,
  answers: [
    {id:0, answer: '5, 5, 5, 5, 5', isTrue: true},
    {id:1, answer: '0, 1, 2, 3, 4'},
    {id:2, answer: '0, 5, 5, 5, 5'},
    {id:3, answer: '4, 3, 2, 1, 0'}
  ]
}, {
  id:9,
  tags: ['es5'],
  title: 'What will the following code output to the console?',
  code: `
    var spy = {
      _name: 'James Bond',
      getSecretName: function() {
        return this._name;
      }
    };
    var stoleSecretName = spy.getSecretName;
    console.log(stoleSecretName(), spy.getSecretName());
  `,
  answers: [
    {id:0, answer: 'undefined, "James Bond"', isTrue: true},
    {id:1, answer: '"James Bond", "James Bond"'},
    {id:2, answer: 'undefined, undefined'},
    {id:3, answer: '"James Bond", undefined'}
  ]
}]

const stateTest = (state = list, action) => {
  switch(action.type){
    case '':
    default:
      return state
  }
}

export default stateTest