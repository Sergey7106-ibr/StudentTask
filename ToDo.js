let $div = document.getElementById('tasks');
let taskArr = [];
let divTaskArr= [];
let ArrCancelStatus = [];
let newtask = {};

function createNewTask()
{
        let $prior = document.getElementById('priority').value;
        let input = document.getElementById('input').value;
        let now = new Date();
        let priorNumber
        switch(newtask.priority)
            {    
                case 'Низкий':
                priorNumber = 0;
                break;
                case 'Средний':
                priorNumber = 1;
                break;
                case 'Высокий':
                priorNumber = 2;
                break;
            }
        for(let i=0;i<=taskArr.length; i++)
        {
        newtask = 
        {
        id: i,
        status: 'active',
        input: input,
        priority: $prior,
        data: now,
        priorNumber,
        cancelBtn: createCancelBtn(),
        acceptBtn: creataAcceptBtn(),
        deleteBtn: createRemovalBtn()
        }; 
    } 

return (newtask);
}

function createTaskArr()
{
    taskArr.push(createNewTask());
    return taskArr;
}

function createDate()
{
    let nowDate = document.createElement('div');
    nowDate.className = "nowDate";
    nowDate.innerHTML = newtask.data.toLocaleString();
    return nowDate;
}

function createNewDiv(newtask)
{
    let priorDiv = document.createElement('div');
    priorDiv.className = "priorDiv";
    let obj = document.createElement('div');
    let inputDiv = document.createElement('div');
    inputDiv.append(newtask.input);
    obj.className = "obj";
    let $task = document.createElement('div');
    priorDiv.append(newtask.priority);
    obj.append(inputDiv);
    obj.append(createDate());
    obj.append(newtask.cancelBtn);
    obj.append(newtask.acceptBtn);
    obj.style.background = '#ffffff';
    $task.append(priorDiv);
    $task.append(obj);
    $task.append(newtask.deleteBtn);
    $div.appendChild($task);
    for(i=0;i<=taskArr.length;i++)
    {
        $task.id=i;
    }
    divTaskArr.push($task);
    taskArr.push(createNewTask());
    obj.firstChild.onclick = ()=>
    {
        let newTextArea = document.createElement('textarea');
        newTextArea.className = 'textarea';
        newTextArea.value = obj.firstChild.innerHTML;
        obj.firstChild.replaceWith(newTextArea);
        newTextArea.focus();
        newTextArea.onblur = function()
        {
            
            obj.firstChild = newTextArea.value;
            newTextArea.replaceWith(obj.firstChild);

            for(let i=0; i<taskArr.length; i++)
            {
                textAreas = document.querySelectorAll('textarea')
                textAreas.forEach(element => {
                if(taskArr[i].id.toString() === element.parentNode.parentNode.id)
                {
                    taskArr[i].input = element.value;
                }
                newTextArea.style.fontSize = "100%";
                newTextArea.append(newTextArea.value);
            });
            }
        }
        newTextArea.addEventListener('keyup', function(){
            if(this.scrollTop > 0){
              this.style.height = this.scrollHeight + "px";
            }
          });   
    }
    return($div);

}

function createCancelBtn()
{
    let cancel =  document.createElement('button');
    cancel.innerText = "×";
    cancel.className = 'button';
        cancel.addEventListener("click", function(){
            cancel.parentNode.style.background = '#b82e2e';
            cancel.parentNode.parentNode.firstChild.style.color = 'red';
            if(cancel.parentNode.firstChild !== undefined)
            {
                cancel.parentNode.firstChild.style.background = '#b82e2e';
            }
            for(let i=0;i<taskArr.length;i++)
            {
                if (cancel.parentNode.parentNode.id === taskArr[i].id.toString())
                {
                taskArr[i].status = 'canceled';
                }             
            }
        }); 
    return cancel;
}

function creataAcceptBtn()
{
    let accept =  document.createElement('button');
    accept.innerText = "✓";
    accept.className = 'button';
    accept.addEventListener("click", function(){
            accept.parentNode.style.background = '#75d868';
            accept.parentNode.parentNode.firstChild.style.color = 'green';
            if(accept.parentNode.firstChild !== undefined)
            {
                accept.parentNode.firstChild.style.background = '#75d868';
            }
            for(let i=0;i<taskArr.length;i++)
            {
                if (accept.parentNode.parentNode.id === taskArr[i].id.toString())
                {
                taskArr[i].status = 'completed';
                }
            }
        });

    return accept;
}

function createRemovalBtn()
{
    let removal =  document.createElement('button');
    removal.className = 'button';
    removal.className = "fa fa-trash";
    removal.addEventListener("click", function(){
            if(removal.parentNode.parentNode===null)
            {
                return;
            }
            else{
                removal.parentNode.parentNode.removeChild(removal.parentNode);
            for(let i=0;i<taskArr.length;i++)
            {
                if (removal.parentNode.id == taskArr[i].id)
                {
                taskArr.splice(i, 1);
                }
            }
            }
        });
      return removal;
}

function filterPrior()
{
    filterValue = document.getElementById('filters').value;

    divTaskArr.forEach(element => {
        element.style.display = 'block';
        if(filterValue === "filterMiddle" && element.firstChild.textContent !== "Средний")
        {
            element.style.display = 'none';
        }
        else if(filterValue === "filterLow" && element.firstChild.textContent !== "Низкий")
        {
            element.style.display = 'none';
        }
        else if(filterValue === "filterHigh" && element.firstChild.textContent !== "Высокий")
        {
            element.parentNode.style.display = 'block'; 
            element.style.display = 'none';

        }
        else if(filterValue === "filterAny")
        {
            element.style.display = 'block';
        }
    });
}

function filterStatus(i)
{
        status = document.getElementsByClassName('checkbox')[i].checked;
        divTaskArr.forEach(element =>{
        element.style.display = 'none';
        if(status === 'true')
        {
           if(element.children[1].style.background ==='rgb(255, 255, 255)' && i === 0)
            {
                element.style.display = 'block';
            }
            else if (element.children[1].style.background === 'rgb(117, 216, 104)' && i === 2)
            {
                element.style.display = 'block';
            }
            else if (element.children[1].style.background === 'rgb(184, 46, 46)' && i === 1)
            {
                element.style.display = 'block';
            }
        }
        else if(status === 'false') 
        {
            element.style.display = 'block';
        }
        })
}


function createDivTaskArr(taskArr)
{
    divTaskArr.forEach(element => {
        element.remove();
    });
    divTaskArr.splice(0);
    taskArr.forEach(element => {
        createNewDiv(element);
        taskArr.pop();
        if(element.status === 'completed')
        {
            obj.style.background = '#75d868';
            priorDiv.style.color = 'green';
        }
        else if(element.status === 'canceled')
        {
            obj.style.background = '#b82e2e';
            priorDiv.style.color = 'red';
        }
    });
}

function dataSort()
{  
    if(document.getElementById('dataSort').value === 'dataDecrease')
    {
    taskArr.sort((a, b) => b.data.getTime() - a.data.getTime());
    }
    else
    {
    taskArr.sort((a, b) => a.data.getTime() - b.data.getTime());            
    }
    createDivTaskArr(taskArr);
}

function prioiritySort()
{
   if(document.getElementById('prioritySort').value === 'prioritIncrease')
    {
        taskArr.sort((a,b) => b.priorNumber - a.priorNumber);
    }
    else
    {
        taskArr.sort((a,b) => a.priorNumber - b.priorNumber); 
    }
    createDivTaskArr(taskArr);
    
}

function searchDiv()
{   
    let inputValue = document.getElementById('search').value;
    divTaskArr.forEach(element=>
        {
            if(element.children[1].firstChild.innerText.search(inputValue) === -1)
            {
            element.style.display = 'none';
            }
            else
            {
            element.style.display = 'block';
            }
        });
}





document.getElementById("create").onclick = function ()
{
    
    if (createNewTask().input.textContent === '') {
       alert("Ввод пуст!") 
    }
    else{
    createNewDiv(newtask);
    }
    document.getElementById("input").value = '';
}
