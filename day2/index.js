const path = require('path')
const fs = require('fs')
const readline  = require('readline')
console.log(__dirname);
let taskManager = path.join(__dirname , 'task.json')
console.log(taskManager);


if(!fs.existsSync(taskManager)){
  console.log("file is not present");
  fs.writeFileSync(taskManager,'[]')
}

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const getTasks = () => {
  return JSON.parse(fs.readFileSync(taskManager,'utf-8'))
}

const addTask = (task) => {
  let tasks = getTasks()
  tasks.push({task : task , isCompleted : false})
  console.log(tasks);
  updateTask(tasks)
  console.log("task added =>", task);
}

const updateTask = (tasks) => {
  fs.writeFileSync(taskManager, JSON.stringify(tasks))
}

const showAllTask = () => {
  let tasks = getTasks()
  tasks.forEach((element , index) => {
    console.log(`${index + 1} . ${element.task} ${element.isCompleted ? '[X]' : '[]'}`);
  });
}

const ToggleComplete = (id) => {
  let tasks = getTasks()
  tasks[id - 1].isCompleted = true
  updateTask(tasks)
  console.log("task is mark as completed");
}

const deleteTask = (id) => {
  let tasks = getTasks()
  let filteredArr = tasks.filter((item , index) => index !== id -1)
  updateTask(filteredArr)
  console.log("task deleted");
}

const manageTask = () => {
  rl.question(`what would you like to do? 
    \n 1.Add task 
    \n 2.Show all tasks
    \n 3.Mark task as completed
    \n 4.Delete task
    \n 5.exit \n` , (ans) => {
    switch(ans){
      case "1":
        rl.question("add task : " , (task) => {
          addTask(task)
          manageTask()
        })
        break;
        case "2":
          showAllTask()
          manageTask()
          break;
        case "3":
          rl.question("which task you wanted to mark as complete? :",(ans) => {
            ToggleComplete(+ans)
            manageTask()
          })
          break;
        case "4":
          rl.question("which task you want to delete? :", (ans) => {
            deleteTask(ans)
            manageTask()
          })
          break;
      case "5":
        rl.close()
        break;

      default:
          console.log("invalid input");
          manageTask()
    }
  })
}
manageTask()

