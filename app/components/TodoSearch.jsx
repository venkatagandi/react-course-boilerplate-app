var React = require('react');

var TodoSearch = React.createClass({
    handleSearch(e) {
        e.preventDefault();
        var showCompleted = this.refs.showCompleted.checked;
        var searchText =  this.refs.searchText.value;
        this.props.onSearch(showCompleted,searchText);
        //this.refs.searchText.value = '';
        //this.refs.showCompleted.checked =

    },
    render() {
        return(
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;