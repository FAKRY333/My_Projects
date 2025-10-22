
// get the elements 
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let content = document.querySelector('.content');
// teke the tasks from the localstorge


window.onload  = function() {
  let tasks = localStorage.getItem('tasks');
  tasks = JSON.parse(tasks);
  console.log(tasks)
  if (tasks.length !== 0) {
    let clearAll = document.createElement('button');
    clearAll.textContent = 'Clear All';
    clearAll.className = 'clear'
     content.append(clearAll);
     clearAll.onclick = () => {
  let divs = document.querySelectorAll('.content div');
      console.log(divs);
      divs.forEach((e) => e.remove())
       tasks = [] ;
       localStorage.setItem('tasks', JSON.stringify(tasks));
       location.reload()
     }
  }
  tasks.forEach((e,i) => {
    let div = document.createElement('div');
    let h2 = document.createElement('h3');
    let del = document.createElement('button');
    let scc = document.createElement('button');
    let buutons = document.createElement('span');
    scc.textContent = 'تم';
    scc.className = 'scc';
    del.textContent = 'DELETE';
    del.className = 'del';
    scc.onclick = () => {
      console.log('yes')
      h2.classList.add('active');
       tasks[i].Done = true; 
       localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    if (tasks[i].Done === true) {
      h2.className = 'active';
    }
    del.addEventListener('click' ,() => {
     let acc =  confirm('Are you sure ?');
     console.log(acc)
     if (acc) {
       div.remove();
       tasks.splice(i,1);
       localStorage.setItem('tasks', JSON.stringify(tasks));
      location.reload()
      } else {
        console.log('no')
      }
    })
    h2.textContent = e.Task ;
    buutons.appendChild(del);
    buutons.appendChild(scc);
    div.appendChild(buutons);
    div.appendChild(h2);
    content.appendChild(div);
  });
}


// 


// we hava emty array
btn.addEventListener('click', (e) => {
  // function
    function getFromlocal() {
        let tasks = localStorage.getItem('tasks');
        return  tasks ? JSON.parse(tasks) : [] ;
    }
// fucntion 
  function addTolocal() {
    let tasks = getFromlocal(); // tasks = [];
    if (input.value.trim() === '') return ;
    tasks.push({
      Id: +(Math.random() * 10).toFixed(),
      Task:input.value,
      Done:false
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  addTolocal();
  location.reload();
})
input.addEventListener( "blur" , () => {
  sessionStorage.setItem('writeTask' , input.value)

})
input.value = sessionStorage.getItem('writeTask')

