import type { App } from 'vue';
import { registerElement, registerElementIcon } from './register-element';

export function globalRegister(app: App): void {
    registerElement(app);
    registerElementIcon(app);
}
