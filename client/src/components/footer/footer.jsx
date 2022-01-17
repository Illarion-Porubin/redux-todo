import React, { Component } from "react";

import './footer.css'

class Footer extends Component {
    
    render() {
        const {tasks, statusPost, filter, deleteCompleated} = this.props;
        const falseItems = tasks.filter(item => !item.done).length
        const trueItems = tasks.filter(item => item.done).length
        
        const buttonsData = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'compleated', label: 'Completed'}
        ]

        const buttons = buttonsData.map(({name, label}) => {
            const active = filter === name;
            let clazz = active ? "to-do__btn-active" : "to-do__board-btn";
            return (
                <button 
                    className={clazz}
                    type="button"
                    onClick={() => statusPost(name)}
                    key={name}
                    >
                    {label}
                </button>
                )
            })

        if(tasks.length) {      
            const checkS = falseItems > 1 ? "s" : "";
            const classBtn = trueItems ? "to-do__board-btn-clear to-do__board-btn-active" : "to-do__board-btn-clear";
    
            return (
                <div className="to-do__board">  
                    <p className="to-do__board-list-items">
                        {falseItems} item{checkS}
                    </p>
                    <ul className="to-do__board-check">
                        <li className="to-do__board-li">
                            {buttons}                         
                        </li>
                    </ul>
                    <div className="to-do__board-list-btn">
                        <button
                            className={classBtn}  
                            onClick={deleteCompleated}
                        >
                        Clear completed
                        </button>
                    </div>
                </div>   
            ) 
        } 
        else
            return (<></>)  
    }
}



export default Footer;