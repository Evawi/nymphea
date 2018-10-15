'use strict';

import React from 'react';
import {render,findDOMNode} from 'react-dom';
require('devextreme/ui/data_grid');

export default class Main_dashboard extends React.Component {
    constructor(props){
        super();
        this.setData  = this.setData.bind(this);
        this.setCell  = this.setCell.bind(this);

        this.gridEl={data:{}}
    }
    componentDidMount(){
        let SELF = this;
        SELF.gridEl.data = $(this.refs.grid).dxDataGrid({
            height:"100%",
            dataSource: [],
            editing: {
                mode: "row",
                allowUpdating: SELF.props.accessForEditEvents,
                allowDeleting: SELF.props.accessForEditEvents,
                allowAdding: false
            },
            columns:   [{
                caption: "Событие",
                dataField: "absence_type",
                width:270,
               //minWidth:270,
                lookup: {
                    dataSource: SELF.props.absenceTypeList,
                    displayExpr: "text",
                    valueExpr: "value"
                }
            },{
                caption: "Дата начала",
                dataField: "start_date",
                dataType: "date",
                format: 'yyyy-MM-dd',
                //width:150,
                //minWidth:150,

            },{
                caption: "Дата окончания",
                dataField: "end_date",
                dataType: "date",
                format: 'yyyy-MM-dd',
               // width:150,
               // minWidth:150,
            }
            ],
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 30],
                showInfo: true
            },
            paging: {
                pageSize: 10
            },
            sorting: {
                mode: "multiple"
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: "Search..."
            },
            noDataText:"nodata",
            rowAlternationEnabled:true,
            hoverStateEnabled:true,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnAutoWidth: true,
            columnResizingMode:'widget',
            columnChooser: {
                enabled: true
            },
            columnFixing: {
                enabled: true
            },
            onRowUpdating: function(e) {
                SELF.props.save(e);
            },
            onRowRemoved: function(e) {
                SELF.props.remove(e);
            }
        }).dxDataGrid("instance")
    }
    setData(newdata){
        let SELF = this;
        SELF.gridEl.data.option({ dataSource: newdata });
        //SELF.gridEl.data.refresh()
        //SELF.gridEl.data.repaint()
    }
    setCell(id,cell,data){ //обновляет только данные без обновления отображения
        let SELF = this;
        let el =_.findWhere(SELF.gridEl.data.option().dataSource, {id: id});
        el[cell] = data;
    }
    render(){
        return(
            <div className="grid__inner main_log">
                <div className="grid_wrapper" ref="grid"></div>
            </div>
        )
    }
}


