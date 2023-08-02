export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page;
  }

  route(event){
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    if(window.location.href.slice(21) == '/'){
      document.querySelector('body').style = "background-image: url('./assets/images/bg-home.png');"
    } else if(window.location.href.slice(21) == '/ouniverso'){
      document.querySelector('body').style = "background-image: url('./assets/images/bg-universo.png');"
    } else if(window.location.href.slice(21) == '/exploracao'){
      document.querySelector('body').style = "background-image: url('./assets/images/bg-explorer.png');"
    }

    this.handle();

  }

  handle(){
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route).then(data => data.text()).then(html => {
      document.querySelector('#app').innerHTML = html;
    })

  }
}