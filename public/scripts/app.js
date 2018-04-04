'use strict';

console.log('App.js is running!');

var appRoot = document.querySelector('#app');

var appData = {
    title: 'Indecision',
    subtitle: 'Don\'t choose',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        appData.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    appData.options.length = 0;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            appData.title
        ),
        appData.subtitle && React.createElement(
            'p',
            null,
            appData.subtitle
        ),
        React.createElement(
            'p',
            null,
            appData.options && appData.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            appData.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
