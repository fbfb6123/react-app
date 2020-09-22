let dom = document.querySelector('#root');

let element = React.createElement( 
  'div', {}, [
    React.createElement(
      'h2', {}, "Hello!"
    ),
    React.createElement(
      'h3', {}, "React sample page."
    ),
    React.createElement(
      'ul', {}, [
        React.createElement(
          'li', {}, "First item."
        ),
        React.createElement
      ]
    )
  ]);
      ReactDOM.render(element, dom);