    
    function Hello(){
        return(
            React.createElement('h1',null,'Olá mundo')
        )
    }
    
    ReactDOM.render(
        React.createElement(Hello),
        document.querySelector('#app')
    )
    
    class Hello2 extends React.Component {
        render(){
            return(
                React.createElement('h1',null,'Olá mundo')
            )
        }
    }
    
    ReactDOM.render(
        React.createElement('span',null,'Olá'),
        document.querySelector('#app')
    )
    
    function Hello3(props){
        return (
            React.createElement('h1', {id: props.id, className: 'titulo-1'},props.label)
        )
    }
    
    ReactDOM.render(
        React.createElement(Hello, { id: 'titulo', label: 'Olá dev!'}),
        document.querySelector('#app')
    )
    
    class Hello4 extends React.Component{
        render(){
            return(React.createElement('h1', {id: this.props.id, className: 'titulo-1'},this.props.label))
        }
    }
    
    ReactDOM.render(
        React.createElement(Hello, { id: 'titulo', label: 'Olá dev!'}),
        document.querySelector('#app')
    )
    

