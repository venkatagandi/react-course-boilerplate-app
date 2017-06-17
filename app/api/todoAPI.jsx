
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
    }
}