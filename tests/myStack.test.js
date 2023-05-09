const stack = require('../src/stack');

test('Lägger ett element överst i stacken', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1)
    
});
test('Returnerar det översta elementet i stacken och tar bort det', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4)
    const result = stack.pop();
  
    expect(result).toBe(4);

  
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });