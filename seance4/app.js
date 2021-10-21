// fonction de base dans REACt ! 
//  React.createElement("h1",null,{});
//  ReactDOM.render()
//

class App extends React.Component {
    state = {
        todos : [],
        text : ""
    }
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({todos:[...this.state.todos,this.state.text]})
    }
    handleChange(text){
        this.setState({text:text})
    }
    render(){
        return (
            <div className="app">
                <PanelInput 
                        handleClick={this.handleClick} 
                        handleChange={this.handleChange} 
                        text={this.state.text}/>
                <TodoList 
                        todos={this.state.todos}
                />
            </div>
        )

    }
}

function PanelInput(props){
    return (
        <div>
            <input type="text" value={props.text} 
                    onChange={(e)=>props.handleChange(e.target.value) } />
            <button onClick={()=>props.handleClick()}>add item</button>
        </div>
    )
}

function Todo(props){
    return <li>{props.text}</li>
}

function TodoList(props){
    return(
        <ul>
            {props.todos.map(todo=>(
                <Todo text={todo} />
            ))}
        </ul>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)












