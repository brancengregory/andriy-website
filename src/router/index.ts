export class Route {
  name: string;
  path: string;
  componentName: string;

  constructor(name: string, path: string, componentName: string) {
    this.name = name;
    this.path = path;
    this.componentName = componentName;
  }
}

export class Router {
  private static instance: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;

  private constructor() {
    window.addEventListener('popstate', () => {
      this.navigateTo(window.location.pathname, false);
    });
  }

  public static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  public setRoutes(routes: Route[]): void {
    this.routes = routes;
    this.navigateTo(window.location.pathname, false);
  }

  public navigateTo(path: string, updateHistory = true): void {
    const route = this.routes.find((route) => this.matchRoute(route, path));
  
    if (route && this.currentRoute !== route) {
      if (this.currentRoute) {
        const previousComponent = document.querySelector(this.currentRoute.componentName);
        if (previousComponent) {
          (previousComponent as HTMLElement).style.display = 'none';
        }
      }
  
      const newComponent = document.querySelector(route.componentName);
      if (newComponent) {
        (newComponent as HTMLElement).style.display = 'block';
      }
  
      this.currentRoute = route;
  
      if (updateHistory) {
        window.history.pushState(null, '', route.path);
      }
    }
  }  

  private matchRoute(route: Route, path: string): boolean {
    const routeParts = route.path.split('/');
    const pathParts = path.split('/');

    if (routeParts.length !== pathParts.length) {
      return false;
    }

    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        continue;
      }
      if (routeParts[i] !== pathParts[i]) {
        return false;
      }
    }

    return true;
  }
}
