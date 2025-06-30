'use strict'

var ComponentA = React.createElement(
    A, {
        required:true
    }, 'hi'
)

var ComponentB = React.createElement(React.Fragment, null, 'hi');

var ComponentC = React.createElement('div', null, React.createElement('span', null, 'hi'))