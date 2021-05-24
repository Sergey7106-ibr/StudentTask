const br = document.createElement('br');
let $div = document.getElementById('tasks');
let $task = document.createElement('div');
let taskArr = [];
let obj = document.createElement('div');

for(var i = 0; i<= obj.childNodes.length; i++)
{
function showInput()
{   
   {        
            let taskLocal = document.createElement('div');
            taskLocal.id = "taskLocal" + i;
            $prior = document.getElementById('priority').value;
            optionDiv = document.createElement('div');
            let obj = document.createElement('div');
            let $input = document.querySelector('input').value;
            let nowDate = document.createElement('div');
            let now = new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString();
            
            optionDiv.innerHTML = $prior; 
            optionDiv.id = "optionTask";
            if($input == ""){
            alert("Текст задачи пуст!")
            }
            else{
            taskLocal.appendChild(optionDiv);
            }

            nowDate.innerHTML = now;
            nowDate.id = "nowDate";

            btn = document.createElement('button');
            btn.type = 'button';
            btn.className = "button";
            btn.innerText = "×";
            btn1 = document.createElement('button');
            btn1.type = 'button';
            btn1.className = "button";
            btn1.innerText = "✓";

            newDiv  =
            { 
            text: $input,
            data: nowDate,
            acceptBtn: btn1,
            cancelBtn: btn
            }
            console.log(newDiv);

            
            if($input != ""){
            obj.innerHTML  = newDiv.text;
            obj.appendChild(newDiv.data);
            obj.appendChild(newDiv.acceptBtn);
            obj.appendChild(newDiv.cancelBtn);
            taskLocal.appendChild(obj);
        
        }

        btn2 = document.createElement('button');
        btn2.type = 'button';
        btn2.id = 'button2' + i;
        btn2.className = "button";
        btn2.className = "fa fa-trash";
        btn2.onclick = deleteTask;
        if($input != ""){
        taskLocal.appendChild(btn2);
        }

        taskArr.push(taskLocal);
        $task.appendChild(taskLocal);
        for(i=0; i<=taskArr.length; i++)
        {
        btn2.onclick = deleteTask;
        taskLocal.name = i;
        obj.className = 'obj';
        obj.id = 'obj' + i;
        btn1.id = 'acceptButton' + i; 
        btn.id = 'cancelButton' + i;
        btn.name = i;
        document.getElementById('acceptButton'+(i)).name = i;
        obj.name = i;
        newDiv.id = "newtask"+i;
        document.getElementById('cancelButton'+(i)).onclick = cancelTask;
        document.getElementById('acceptButton'+(i)).onclick = doneTask;
        function doneTask()
        {   
            for (b=0; b<=taskArr.length;b++)
            {
            if((document.getElementById('acceptButton'+(i)).name) == (i))
            {
                console.log(i);
                document.getElementById('obj'+ (i-1)).style.background = '#75d868';
                optionDiv.style.color = 'green';
                btn1.remove();
                console.log(taskLocal.name);
            }
            else if ((taskLocal.name) == (document.getElementById('acceptButton'+(i)).name)) {
                
            }
            }
        }
        function cancelTask()
        {
            document.getElementById('obj'+ (i-1)).style.background = '#d83030';;
            optionDiv.style.color = 'red';
            btn.remove();
        }
        console.log(document.getElementById('acceptButton'+(i)));

        function deleteTask()
        {   
            document.getElementById('taskLocal' + (i-1)).remove();
        }
        console.log(document.getElementById('taskLocal'+i));
        }
        document.getElementById("input").value = "";
        console.log(taskArr.length);
        console.log(taskArr);
    }
    }
    
    $div.appendChild($task);
} 

console.log(taskArr);
function dataSort()
{
    for(i= 0; i<=taskArr.length; i++)
    {

    }
}

for(i=0;i<=taskArr.length;i++)
{
    
}













function changePrior()
{
    var priorValue = document.getElementById("filters").value;
    if(priorValue == "filterLow")
    {
        $task().remove();
    }


    return priorValue;
}
changePrior();