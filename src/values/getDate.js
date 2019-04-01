'use strict';
import ALERTY     from '../alerty/alerty.js';

export default function GetDate(date) {
    if (!(this instanceof GetDate)) return new GetDate(date);

    this.data = date;
    this.getDate = function(){
        return new Date(this.data)
    };
    //TODO: need regexp
    this.getFormated = function(formatStr){
        var d = new Date(this.data);
        if(!formatStr) return d;

        var curr_date = d.getDate();
        if (curr_date < 10) {
            curr_date = '0' + curr_date;
        }
        var curr_month = d.getMonth() + 1;
        if (curr_month < 10) {
            curr_month = '0' + curr_month;
        }
        var curr_year = d.getFullYear();

        var hours = d.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = d.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var seconds = d.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }


        var formated;
        switch (formatStr){
            case "yyyy-mm-dd": formated = curr_year + "-" + curr_month + "-" + curr_date; break;
            case "dd-mm-yyyy": formated = curr_date + "-" + curr_month + "-" + curr_year; break;
            case "yyyy-mm-dd hh:mm:ss": formated = curr_year + "-" + curr_month + "-" + curr_date + " " + hours + ":"+ minutes + ":"+ seconds; break;
            case "dd-mm-yyyy hh:mm:ss": formated = curr_date + "-" + curr_month + "-" + curr_year + " " + hours + ":"+ minutes + ":"+ seconds; break;
            case "hh:mm:ss": formated = hours + ":"+ minutes + ":"+ seconds; break;
        }
        return formated
    };
}
