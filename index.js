let todo = [];
let end = false;

while (!end) {
  let question = prompt('what do you want to do?');
  switch (question) {
    case 'new':
      let newTodo = prompt('write todo!');
      todo.push(newTodo);
      break;
    case 'list':
      console.log('***********');
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i}: ${todo[i]}`);
      }
      console.log('***********');
      break;
    case 'delete':
      let deleteIdx = prompt('write delete todo index');
      todo.splice(deleteIdx, 1);
      break;
    case 'quit':
      end = true;
      break;
  }
}
