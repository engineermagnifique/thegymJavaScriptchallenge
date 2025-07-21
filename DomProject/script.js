let task=document.getElementById('taskInput');
let priority=document.getElementById('prioritySelect');
let category=document.getElementById('categoryInput');
let dateInput=document.getElementById('dateInput');
let addBtn=document.getElementById('addBtn');
let searchInput=document.getElementById('searchInput');
let toggleTheme=document.getElementById('toggleTheme');
let taskList=document.getElementById('taskList');
let inspect=document.getElementById('inspector');

task.addEventListener('focus',()=>{
   if(task.value===''||task.value.length<=5)
   {
    addBtn.disabled=true;
    task.style.cssText='border-color:red; border-width:2px';
   } else {
    task.style.cssText='border-color:green; border-width:2px';
   }
})
task.addEventListener('blur',()=>{
   if(task.value==='')
   {
    addBtn.disabled=true;
    task.style.cssText='border-color:red; border-width:2px';
   } else {
    addBtn.disabled=false;
    task.style.cssText='border-color:blue; border-width:2px';
   }
})

let listContainer=new DocumentFragment();
function addTask(){
    console.log('triggled');
    let li=document.createElement('li');
    let first=document.createElement('p');
    let second=document.createElement('p');
    let p=document.createElement('p');
    let third=document.createElement('p');
    let del=document.createElement('button');
    let update=document.createElement('button');
    let done=document.createElement('button');
    
    li.className='itemView';
    first.className='listTask';
    second.className='level';
    p.className='category';
    third.className='date';
    done.className='MarkAsDone'
    del.className='delete';
    del.textContent='delete';
    update.className='update';
    update.textContent='update';
    done.textContent='Mark as Done';


    styleListContainer(first,second);
    del.style.backgroundColor='red';
    first.textContent=`${task.value}`;
    second.textContent=priority.value;
    p.textContent=category.value;
    third.textContent=dateInput.value;
    li.append(first,second,p,third,update,del,done);
    listContainer.append(li);
    taskList.append(listContainer);
    clearContent();
    first.addEventListener('click',()=>{
        console.log('Inspected');
        inspect.innerHTML=`
         <p>Node Name: ${li.nodeName}</p><br>
         <p>Node Type: ${li.nodeType}</p><br>
         <p>Parent Node: ${li.parentElement}</p><br>
         <p>Children Node: ${li.childNodes.length}</p><br>
         <p>Attributes: ${li.attributes}</p><br>
        `
    })
    del.addEventListener('click',()=>{
        let isRemove=confirm('Are you sure you want to remove it');
        if(isRemove){
            li.remove();
        } else {
            console.log('Too early to be removed');
        }
    })
    update.addEventListener('click',()=>{
        addBtn.textContent='Update';
        let isUpdate=confirm('Do you really want to update it?');
        if(isUpdate)
        {
            li.remove();
            addBtn.id='updateBtn';
            task.value=first.textContent;
            priority.value=second.textContent;
            category.value=p.textContent;
            dateInput.value=third.textContent;
            console.log(addBtn.id);
            document.getElementById('updateBtn').addEventListener('click',()=>{
                first.textContent=task.value;
                second.textContent=priority.value;
                p.textContent=category.value;
                third.textContent=dateInput.value
                alert('The content has been successfully updated');
            })
        } else {
            addBtn.id='addBtn';
            addBtn.textContent='Add Task';
            console.log('Cancelled');
        }
        addBtn.id='addBtn';
        addBtn.textContent='Add Task';
    })
}

function styleListContainer(first,second)
{
    if(first) first.style.color='blue';
    if(second==='low') {
        second.style.color='black';
    } else if(second==='low') {
        second.style.color='green';
    } else {
        second.style.color='red';
    }
}
function clearContent(){
    priority.value='';
    task.value='';
    dateInput.value='';
    category.value='';
}
function toggleModeDark(){
        document.body.setAttribute('class','dark');
    }
function toggleModeWhite(){
        console.log('Not reached');
        document.body.setAttribute('class','light');
    }
document.getElementById('toggleTheme').addEventListener('click',()=>{
    if(document.body.getAttribute('class')==='dark')
    {
        toggleModeWhite();
    } else {
        toggleModeDark();
    }
})

