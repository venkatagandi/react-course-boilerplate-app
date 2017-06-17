var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
    getInitialState() {
        return {
            showCompleted:false,
            searchText:'',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                } , {
                    id: 2,
                    text: 'Clean the yard'
                } , {
                    id: 3,
                    text: 'Leave mail on porch'
                } , {
                    id: 4,
                    text: 'Play vedio games'
                }
            ]
        }
    },
    handleAddTodo(text) {
        alert('new todo : ' + text);
    },
    handleSearch(showCompleted,searchText) {
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        });
    },
    render() {
        var { todos } = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos}/>
                <AddTodo addTodo={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;

// <TodoList todos={todos}/>