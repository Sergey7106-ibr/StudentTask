let $div = document.getElementById('tasks');
let taskArr = [];
let divTaskArr= [];
let ArrCancelStatus = [];


function createNewTask()
{
        let $prior = document.getElementById('priority').value;
        let input = document.getElementById('input').value;
        let $input = document.createElement('div');
        $input.append(input);
        let now = new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString();
        for(i=0;i<=taskArr.length; i++)
        {
        newtask = 
        {
        id: i,
        status: 'active',
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

function createNewDiv(newtask)
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
    obj.style.background = '#ffffff';
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
                taskArr[i-1].status = 'completed';
                }
                else if (item.parentNode.parentNode.id == taskArr.length) 
                {
                    taskArr[taskArr.length-1].status = 'completed'
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
    /*filterMiddleTask = taskArr.filter(function(item)
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
    });*/
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

function filterActiveStatus()
{
    checkboxActive = document.getElementById('checkboxActive');
    if (checkboxActive.value == 1) {
        checkboxActive.value = 0; 
    }
    else
    {
        checkboxActive.value = 1;
    }
    ArrActiveStatus = taskArr.filter(function(item){
        return (item.status == "active");
    });
    divTaskArr.forEach(element =>{
        element.style.display = 'none';
        if (checkboxActive.value == 1 && element.children[1].style.background == 'rgb(255, 255, 255)')
        {
            element.style.display = 'block';
        };
        if (checkboxActive.value == 0)
        {
            element.style.display = "block";
        }
    });
}

function filterComletedStatus()
{
    checkboxComleted = document.getElementById('checkboxComleted');
    if (checkboxComleted.value == 1) {
        checkboxComleted.value = 0; 
    }
    else
    {
        checkboxComleted.value = 1;
    }
    ArrComletedStatus = taskArr.filter(function(item){
        return (item.status == "completed");
    });
    divTaskArr.forEach(element =>{
        element.style.display = 'none';
        if (checkboxComleted.value == 1 && element.children[1].style.background == 'rgb(117, 216, 104)')
        {
            element.style.display = 'block';
        };
        if (checkboxComleted.value == 0)
        {
            element.style.display = 'block';
        }
    });
};

function filterCanceledStatus()
{
    checkboxCanceled = document.getElementById('checkboxCanceled');
    if (checkboxCanceled.value == 1) {
        checkboxCanceled.value = 0; 
    }
    else
    {
        checkboxCanceled.value = 1;
    }
    ArrCancelStatus = taskArr.filter(function(item){
        return (item.status == "canceled");
    });
    divTaskArr.forEach(element =>{
        element.style.display = 'none';
        if (checkboxCanceled.value == 1 && element.children[1].style.background == 'rgb(184, 46, 46)')
        {
            element.style.display = 'block';
        }
        if (checkboxCanceled.value == 0)
        {
            element.style.display = 'block';
        };
        });
};

function dataSort()
{  
        let dateArr = [];
    if (document.getElementById('dataSort').value = 'dateIncrease')
    {
        for (i=0; i<divTaskArr.length; i++)
        {
           dateArr[i] = divTaskArr[i].children[1].children[1].textContent;
        }
        for (i=0; i<divTaskArr.length; i++)
        {
            b = dateArr[i+1];
            a = dateArr[i];

            if(b !== undefined);
            {   
            divTaskArr.sort(function(a, b)
        {
            if (a<b)
            {
                return 1;
            }
            else if (a>b)
            {
                return -1;
            }
            else{
                return 0;
            }
            }
            )}
        };
        console.log(divTaskArr);
    }
}
















document.getElementById("create").onclick = function ()
{
    if (createNewTask().input.textContent == '') {
       alert("Ввод пуст!") 
    }
    else{
    createNewDiv(newtask);
    }
    document.getElementById("input").value = ""
};
