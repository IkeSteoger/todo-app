function Header(props){
    return(
        <header data-testid="header">
            <h1 data-testid="header-h1">To Do List: {props.incomplete} items pending</h1>
        </header>
    )
}

export default Header;