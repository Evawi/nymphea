'use strict';

import React from 'react';

import Input from './../myLib/component/input.jsx';

export default class Main_telegram extends React.Component {
    constructor(props){
        super();
        this.open       = this.open.bind(this);
        this.close      = this.close.bind(this);
        this.setDefault = this.setDefault.bind(this);
        this.getRefs    = this.getRefs.bind(this);
        this.state = {
        }
    }
    componentDidMount(){
        $(this.refs.popup).modal({
            closable  : false,
            allowMultiple: true,
            onHide:function(){}
        })
    }
    open(){
        $(this.refs.popup).modal('show')
    }
    close(){
        $(this.refs.popup).modal('hide')
    }
    setDefault(data){
        this.setState(data);
    }
    getRefs(){
        return this.refs
    }
    render(){
        return(
            <div className="modal_events__inner popup ui modal" ref="popup">
                <i className="close icon"></i>
                <div className="header">События</div>
                <div className="content">
                    <div className="grid__wrapper" ref="grid"></div>
                </div>
            </div>
        )
    }
}

