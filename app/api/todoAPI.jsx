
var $ = require('jquery');

module.exports = {
    setTodos(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        }
        catch(e) {

        }
        return $.isArray(todos) ? todos : [];
        // if($.isArray(todos)) {
        //     return todos;
        // }
        // else {
        //     return [];
        // }
        /*return [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                } , {
                    id: uuid(),
                    text: 'Clean the yard',
                  completed: true
                } , {
                    id: uuid(),
                    text: 'Leave mail on porch',
                    completed: true
                } , {
                    id: uuid(),
                    text: 'Play vedio games',
                    completed: false
                }
        ]*/
    },
    filterTodos(todos,showCompleted,searchText) {
        var filteredtodos =  todos;
        //filter by showCompleted
        filteredtodos = filteredtodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        filteredtodos = filteredtodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || todoText.indexOf(searchText) > -1;
        })
        //filter by search text
        //sort todos with non completed fixes
        filteredtodos.sort((a,b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if(a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredtodos;
    }
}