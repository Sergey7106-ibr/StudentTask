
let $div = document.getElementById('tasks');
let taskArr = [];
let divTaskArr= [];

function createNewTask()
{
    for(i=0;i<=taskArr.length; i++)
    {
        let $prior = document.getElementById('priority').value;
        let $input = document.getElementById('input').value;
        let now = new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString();
        newtask = 
        {
        id: i,
        status: 'actual',
        input: $input,
        priority: $prior,
        data: now,
        cancelBtn: createCancelBtn(),
        acceptBtn: creataAcceptBtn(),
        deleteBtn: createRemovalBtn()
        }; 
    } 

return (newtask);
}

function createDate()
{
    let nowDate = document.createElement('div');
    nowDate.id = "nowDate";
    nowDate.innerHTML = newtask.data;
    return nowDate;
}

function createNewDiv()
{
    let priorDiv = document.createElement('div');
    priorDiv.id = "priorDiv";
    priorDiv.name = "priorDiv";
    let obj = document.createElement('div');
    obj.id = "obj";
    let $task = document.createElement('div');
    priorDiv.append(newtask.priority);
    obj.append(newtask.input);
    obj.append(createDate());
    obj.append(newtask.cancelBtn);
    obj.append(newtask.acceptBtn);
    $task.append(priorDiv);
    $task.append(obj);
    $task.append(newtask.deleteBtn);
    $div.appendChild($task);
    divTaskArr.push($task);
    taskArr.push(createNewTask());
    for(i=0;i<=taskArr.length;i++)
    {
        $task.id=i;
    }
    return($div);
}

function createCancelBtn()
{
    let cancel =  document.createElement('button');
    cancel.innerText = "×";
    cancel.className = 'button';
    cancel.name = 'cancel';
    cancelArr = document.getElementsByName('cancel');
    cancelArr.forEach(function(item) {
        item.addEventListener("click", function(){
            item.parentNode.style.background = '#b82e2e';
            item.parentNode.parentNode.firstChild.style.color = 'red';
            for(i=0;i<taskArr.length;i++)
            {
                if (item.parentNode.parentNode.id == taskArr[i].id)
                {
                taskArr[i-1].status = 'canceled';
                }           
                else if (item.parentNode.parentNode.id == taskArr.length) 
                {
                    taskArr[taskArr.length-1].status = 'canceled'
                }     
            }
        });
    }); 
    return cancel;
}

function creataAcceptBtn()
{
    let accept =  document.createElement('button');
    accept.innerText = "✓";
    accept.className = 'button';
    accept.name = 'accept';
    acceptArr = document.getElementsByName('accept');
    acceptArr.forEach(function(item) {
        item.addEventListener("click", function(){
            item.parentNode.style.background = '#75d868';
            item.parentNode.parentNode.firstChild.style.color = 'green';
            for(i=0;i<taskArr.length;i++)
            {
                if (item.parentNode.parentNode.id == taskArr[i].id)
                {
                taskArr[i-1].status = 'executed';
                }
                else if (item.parentNode.parentNode.id == taskArr.length) 
                {
                    taskArr[taskArr.length-1].status = 'executed'
                }
            }
        });
    }); 
    return accept;
}

function createRemovalBtn()
{
    let removal =  document.createElement('button');
    removal.className = 'button';
    removal.className = "fa fa-trash";
    removal.name = "removal"
    removalArr = document.getElementsByName("removal")
    removalArr.forEach(function(item) {
        item.addEventListener("click", function(){
            if(item.parentNode.parentNode===null)
            {
                return;
            }
            else{
            item.parentNode.parentNode.removeChild(item.parentNode);
            for(i=0;i<taskArr.length;i++)
            {
                if (item.parentNode.id == taskArr[i].id)
                {
                delete taskArr[i-1];
                taskArr = taskArr.filter(element => element !== null);
                console.log(taskArr);
                }
                else if (item.parentNode.id == taskArr.length) {
                    delete taskArr.pop();
                    taskArr = taskArr.filter(element => element !== null);
    
                } 
            }
            }
            console.log(taskArr);
        });
    });     
    return removal;
}

function filterPrior()
{
    filterValue = document.getElementById('filters').value;
    filterMiddleTask = taskArr.filter(function(item)
    {
        return (item.priority == "Средний" && filterValue == "filterMiddle");
    });
    filterLowTask = taskArr.filter(function(item)
    {
        return (item.priority == "Низкий" && filterValue == "filterLow");
    });
    filterHighTask = taskArr.filter(function(item)
    {
        return (item.priority == "Высокий" && filterValue == "filterHigh");
    });
    divTaskArr.forEach(element => {
        console.log(filterValue);
        element.style.display = 'block';
        if(filterValue == "filterMiddle" && element.firstChild.textContent !== "Средний")
        {
            console.log(element.firstChild.textContent);   
            element.style.display = 'none';
        }
        else if(filterValue == "filterLow" && element.firstChild.textContent !== "Низкий")
        {
            console.log(element.firstChild.textContent);   
            element.style.display = 'none';
        }
        else if(filterValue == "filterHigh" && element.firstChild.textContent !== "Высокий")
        {
            console.log(element.firstChild.textContent); 
            element.parentNode.style.display = 'block'; 
            element.style.display = 'none';

        }
        else if(filterValue == "filterAny")
        {
            console.log(element.firstChild.textContent);   
            element.style.display = 'block';
        }
    });
}






















document.getElementById("create").onclick = function ()
{
    if (createNewTask().input == "") {
       alert("Ввод пуст!") 
    }
    else{
    createNewDiv();
    }
    document.getElementById("input").value = ""
};