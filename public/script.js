let dom = document.querySelector('#root');
      let element = React.createElement( 'P', {}, 'Hello React');
      ReactDom.render(element, dom);