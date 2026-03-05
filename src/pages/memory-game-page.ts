import { type Page } from '@/core';
import { MemoryGameWidget } from '@/features/memory-game/memory-game-widget';

export function memoryGamePage(): Page {
  let widget: MemoryGameWidget;

  return {
    render() {
      widget = new MemoryGameWidget();
      return widget;
    },
    onMount() {
      console.log('NOTE: Memory Game page mounted');
    },
    onDestroy() {
      widget?.remove();
      console.log('NOTE: Memory Game page destroyed');
    },
  };
}
