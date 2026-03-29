import { BaseComponent } from '@/core';
import type { Page } from '@/core';

import welcomeImageUrl from '@/assets/images/brains/welcome.png';
import { createClipboardIcon, createLockIcon } from '@/utils/svg-icon';

import './home-page.scss';

export function homePage(): Page {
  let component: BaseComponent;

  /**
   * Создаёт анимационную обёртку с текстом и изображением.
   */
  const createImageWrapper = (): BaseComponent<'div'> => {
    const wrapper = new BaseComponent({
      tag: 'div',
      className: ['welcome-page__wrapper'],
    });

    const image = new BaseComponent<'img'>({
      tag: 'img',
      className: ['welcome-page__image'],
      attrs: { src: welcomeImageUrl, alt: 'Welcome' },
    });

    wrapper.append(image);
    return wrapper;
  };

  /**
   * Создаёт кнопку возврата на главную.
   */
  const createButton = (buttonText: string): BaseComponent<'button'> => {
    const button = new BaseComponent({
      tag: 'button',
      className: ['welcome_page__button'],
    });

    const buttonContent = new BaseComponent({
      tag: 'span',
      className: ['welcome-page__button-content'],
    });

    const arrowIcon = buttonText === 'Sign Up' ? createClipboardIcon() : createLockIcon();
    const arrowWrapper = new BaseComponent({
      tag: 'span',
      className: ['welcome-page__button-image'],
    });
    arrowWrapper.element.append(arrowIcon);

    const buttonSpan = new BaseComponent({
      tag: 'span',
      text: buttonText,
    });

    buttonContent.append(arrowWrapper, buttonSpan);
    button.append(buttonContent);
    // button.addEventListener('click', () => navigate('/'));

    return button;
  };

  return {
    render() {
      component = new BaseComponent({
        tag: 'div',
        className: ['welcome-page'],
      });

      component.append(createImageWrapper(), createButton('Sign Up'), createButton('Log In'));

      return component;
    },
    onMount() {
      console.log('NOTE: Login page mounted');
    },
    onDestroy() {
      console.log('NOTE: Login page destroyed');
    },
  };
}
