let dom = document.querySelector('#root');
      let element = React.createElement( 
        'p', {}, 'Hello React');
      ReactDom.render(element, dom);