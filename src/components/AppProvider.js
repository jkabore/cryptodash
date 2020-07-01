import React from "react"

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
constructor(props){
    super(props);
    this.state={
        page:"dashborad",
        setPage:this.setPage,
        ...this.savedSetting()
    }
}
setPage= page =>this.setState({page})
savedSetting(){
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptodash"));
    if(!cryptoDashData){
        return {page:"settings",firsVisit :true}
    }
}

render(){
    return(
        <AppContext.Provider value={this.state}>
{this.props.children}
        </AppContext.Provider>
    )
}
}

