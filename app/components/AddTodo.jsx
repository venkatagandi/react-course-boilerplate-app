var React = require('react');

var AddTodo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if(todoText.length>0){
            this.props.addTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }

        this.refs.todoText.value='';
    },
    render() {
        var { addTodo } = this.props;
        return(
           <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="What do you need to do?" ref="todoText" />
               <button className="button expanded">AddTodo</button>
           </form>
        )
    }
});

module.exports = AddTodo;