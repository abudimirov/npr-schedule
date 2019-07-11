'use strict';
var React = require('react');
var Link = require('react-router').Link;


var APIError = React.createClass({
    render: function() {
        return (
            <h3 className="page__h3 text-center">К сожалению, данные расписания сейчас недоступны. Пожалуйста, обновите страницу немного позже.
                Приносим извинения за временные неудобства.</h3>
        )
    }
});

module.exports = APIError;