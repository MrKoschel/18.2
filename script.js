process.stdin.setEncoding('utf-8');

var element = React.createElement('div', {}, 'Hello world!');
ReactDOM.render(element, document.getElementById('app'));