const {VM} = require('vm2');

// const vm = new VM({
//     timeout: 1000,
//     sandbox: {}
// });

// var vm = new VM
//VM PROPERTIES
// => VM {
//   domain:
//    Domain {
//      domain: null,
//      _events: { error: [Function: debugDomainError] },
//      _eventsCount: 1,
//      _maxListeners: undefined,
//      members: [] },
//   _events: {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   options: { timeout: undefined, sandbox: null, compiler: 'javascript' },
//   _context:
//    { VMError: [Function: VMError],
//      Buffer:
//       { [Function: Buffer]
//         poolSize: 8192,
//         from: [Function],
//         alloc: [Function],
//         allocUnsafe: [Function],
//         allocUnsafeSlow: [Function],
//         isBuffer: [Function: isBuffer],
//         compare: [Function: compare],
//         isEncoding: [Function],
//         concat: [Function],
//         byteLength: [Function: byteLength],
//         [Symbol(node.isEncoding)]: [Function] } } }

// vm.run('console.log("hi")')
//=> undefined

// var log1 = [], err1 = [];
// var log2 = [], err2 = [];
// var log3 = [], err3 = [];
var log4 = [], err4 = [];
// // var log5 = [], err5 = [];
// var out = [], err = [];

// const vmOne = new VM({
//   sandbox: {
//     console: {
//       log(...args) {
//         log1.push(args)
//       },
//       error(...args) {
//         err1.push(args)
//       }
//     }
//   }
// })
//attached sandbox
// => VM {
//   domain:
//    Domain {
//      domain: null,
//      _events: { error: [Function: debugDomainError] },
//      _eventsCount: 1,
//      _maxListeners: undefined,
//      members: [] },
//   _events: {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   options:
//    { timeout: undefined,
//      sandbox: { console: [Object] },
//      compiler: 'javascript' },
//   _context:
//    { VMError: [Function: VMError],
//      Buffer:
//       { [Function: Buffer]
//         poolSize: 8192,
//         from: [Function],
//         alloc: [Function],
//         allocUnsafe: [Function],
//         allocUnsafeSlow: [Function],
//         isBuffer: [Function: isBuffer],
//         compare: [Function: compare],
//         isEncoding: [Function],
//         concat: [Function],
//         byteLength: [Function: byteLength],
//         [Symbol(node.isEncoding)]: [Function] },
//      console: { log: [Function: log], error: [Function: error] } } }
// console.log(log1)
// console.log(err1)


// var vmTwo = new VM({
//   sandbox: {
//     console: {
//       log(...args) {
//         log2.push(args)
//       },
//       error(...args) {
//         err2.push(args)
//       }
//     }
//   }
// }).run('console.log("hi")')

// console.log(log2)
// log
//=> [ [ 'hi' ] ]
// console.log(err2)
// err
//=> []

// var vmThree = new VM({
//   sandbox: {
//     console: {
//       log(...args) {
//         log3.push({args: args, at: new Error().stack})
//       },
//       error(...args) {
//         err3.push(args)
//       }
//     }
//   }
// }).run('console.log("hi")')

// log
// console.log(log3)
// => [ [ 'hi' ],
//     { args: [ 'hi' ],
//       at: 'Error\n    at Object.log (repl:1:70)\n    at Object.apply (/Users/jonathanmartinez/Documents/Fullstack/Immersive/capStone/node_modules/vm2/lib/contextify.js:288:34)\n    at vm.js:1:9\n    at ContextifyScript.Script.runInContext (vm.js:59:29)\n    at VM.run (/Users/jonathanmartinez/Documents/Fullstack/Immersive/capStone/node_modules/vm2/lib/main.js:212:72)\n    at repl:1:134\n    at ContextifyScript.Script.runInThisContext (vm.js:50:33)\n    at REPLServer.defaultEval (repl.js:240:29)\n    at bound (domain.js:301:14)\n    at REPLServer.runBound [as eval] (domain.js:314:12)' } ]

var vmFour = new VM({
  sandbox: {
    console: {
      log(...args) {
        log4.push({args: args, at: new Error().stack})
      },
      error(...args) {
        err4.push(args)
      }
    }
  }
})
console.log('before cats!!!')
// vmFour.options.sandbox.addCat = function (str) {return str + 'cat'};
// var addCat = function(str) {return `${str}cat`};
console.log('SANDBOX', vmFour.options.sandbox.addCat)

// var outPut = vmFour.run(`
// var addCat = function(str) {return str + 'cat'};
// addCat("fat")
// `)
//GET BABEL or diff transpiler
var outPut = vmFour.run(`
var addCat = function(str) {return \`${str}cat\`};
addCat("fat")
`)
// let outPut = vmFour.run(vmFour.options.sandbox.addCat('tlsublaskclskd'))
//=> ReferenceError: tlsublaskclskdcat is not defined
// console.log(vmFour.run('console.log("hi")'))

console.log('TEST!');
console.log(outPut);
console.log('END!');
