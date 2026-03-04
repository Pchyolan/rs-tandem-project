import { BaseComponent, Router } from '@/core';
import { Header } from './header.ts';
import { Footer } from './footer.ts';

import { homePage, loginPage, apiTestPage, notFoundPage, widgetEnginePage, memoryGamePage } from '@/pages';
import { ROUTES } from '@/constants';

import '../styles/app.scss';

export class App extends BaseComponent<'div'> {
  private readonly header: Header;
  public mainContainer: BaseComponent<'div'>;
  private readonly footer: Footer;
  public router: Router;

  constructor() {
    super({ tag: 'div', className: ['app-container'] });

    this.header = new Header({
      onHome: () => this.router.navigate(ROUTES.HOME),
      onSignIn: () => this.router.navigate(ROUTES.LOGIN),
      onTestApi: () => this.router.navigate(ROUTES.API_TEST),
      onWidgetClick: () => this.router.navigate(ROUTES.WIDGET_ENGINE),
      onMemoryClick: () => this.router.navigate(ROUTES.MEMORY_GAME),
    });

    this.mainContainer = new BaseComponent({
      tag: 'div',
      className: ['app-main'],
    });

    this.footer = new Footer();

    this.append(this.header, this.mainContainer, this.footer);

    this.router = new Router(this.mainContainer);
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.addRoute(ROUTES.HOME, homePage);
    this.router.addRoute(ROUTES.LOGIN, loginPage);
    this.router.addRoute(ROUTES.API_TEST, apiTestPage);
    this.router.addRoute(ROUTES.WIDGET_ENGINE, widgetEnginePage);
    this.router.addRoute(ROUTES.MEMORY_GAME, memoryGamePage);
    this.router.setNotFound(notFoundPage);
    this.router.start();
  }
}
