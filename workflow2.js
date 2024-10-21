const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10;

setTimeout(() => {
  console.log('hello from timer 1');
}, 0);

console.log('hello from top level code 1');

setImmediate(() => {
  console.log('hello from immediate fn 1');
});

fs.readFile('./test.txt', 'utf-8', () => {
  console.log('IO polling finished');
  setTimeout(() => {
    console.log('hello from timer 3');
  }, 5 * 1000);
  setTimeout(() => {
    console.log('hello from timer 2');
  }, 0);

  setImmediate(() => {
    console.log('hello from immediate fn 2');
  });

  crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password1 Done');
  });

  crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password2 Done');
  });

  crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password3 Done');
  });

  crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password4 Done');
  });

  crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password5 Done');
  });

  crypto.pbkdf2('password6', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`, 'password6 Done');
  });
});

console.log('hello from top level code 2');
