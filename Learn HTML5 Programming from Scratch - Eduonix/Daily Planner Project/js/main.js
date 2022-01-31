//i assume this tutorial is dated given that numerous
//errors are found when attempting to run this
//that do not get explained / fixed during tutorial
//waste of time, will look at other JS resources
//as this tutorial guy can't teach to save his life
//N.B. the woman who made the updated section of the course 
//however, was genuinely a good teacher. Get it right, Eduonix.

//genuinely don't know how this dude's code ran without 'tasks' being a variable
//as marked further below in the code, as i just get errors yet its identical.

$(document).ready(function(){
    $('#add-task-form').on('submit', function(event){
        addTask(event);
    });

    displayTasks();

    //function to display tasks - seemingly something wrong with this bit
    function displayTasks(){
        var taskList = JSON.parse(localStorage.getItem('tasks'));
    
        //sort tasks
        if(taskList != null){
            taskList = taskList.sort(sortByTime);
        }

        //set counter
        var i = 0;
        //check tasks
        if(localStorage.getItem('tasks') != null){
            //loop through and display
            $.each(taskList, function(key, value){
                $('#task-table').append('<tr id="' + value.id + '">' +
                                        '<td>' + value.task + '</td>' +
                                        '<td>' + value.task_priority + '</td>' +
                                        '<td>' + value.task_date + '</td>' +
                                        '<td>' + value.task_time + '</td>' +
                                        '<td><a href="edit.html?id='+ value.id +'">Edit</a> | <a href="#" id="remove-task">Remove</a></td>' + 
                                        '</tr>');
            })
        }
    }

    //function to sort tasks
    function sortByTime(a, b){
        var aTime = a.task_time;
        var bTime = b.task_time;
        return ((aTime < bTime) ? -1 : ((aTime > bTime) ? 1 : 0));
    }

    //function to add a task
    function addTask(event){
        // add a unique ID
        var newDate = new Date();
        id = newDate.getTime();

        var task = $('#task').val();
        var task_priority = $('#priority').val();
        var task_date = $('#date').val();
        var task_time = $('#time').val();

        //simple validation

        if(task ==''){
            alert('Task is required');
            event.preventDefault();
        }
        else if(task_date == '') {
            alert('Date is required');
            event.preventDefault();
        }        
        else if(task_time == '') {
            alert('Time is required');
            event.preventDefault();
        }
        else if(task_priority == '') {
            task_priority = 'normal';
        }
        //this fucker here - where/how the fuck is 'tasks' declared?
        //VS just says 'could not find tasks, did you mean task?'
        //some real bullshit
        else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
            
            //check tasks
            if(tasks == null){
                tasks =[];
            }

            var taskList = JSON.parse(localStorage.getItem('tasks'));

            //new task object
            var new_task = {
                "id": id,
                "task": task,
                "task_priority": task_priority,
                "date": task_date,
                "time": task_time
            }

            tasks.push(new_task);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            console.log('Task Added');
        }    
    }
});

