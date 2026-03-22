import { BaseComponent } from '@/core';
import { type Difficulty, difficultyMap } from '@/types';

import './widget-header.scss';

export class WidgetHeader extends BaseComponent {
  constructor(title: string, difficulty: Difficulty) {
    super({
      tag: 'div',
      className: ['widget-header'],
    });

    const titleElement = new BaseComponent({
      tag: 'h2',
      text: title,
      className: ['widget-header__title'],
    });

    const difficultyElement = new BaseComponent({
      tag: 'span',
      text: difficultyMap[difficulty],
      className: ['widget-header__difficulty'],
    });

    this.append(titleElement, difficultyElement);
  }
}
