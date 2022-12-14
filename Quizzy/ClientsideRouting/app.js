//genommen aus https://itmodul.ch/m294/
const routes = {
    home: {hash: "#home", function: renderHome}, 
    quiz: {hash: "#quiz", function: renderQuiz},
    create: {hash: "#create", function: renderCreate},
    error: {function: renderNotFound}
  }

  let router = new Router(routes);
  router.urlResolve();

