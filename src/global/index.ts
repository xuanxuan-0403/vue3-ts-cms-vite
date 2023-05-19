import type { App } from 'vue';
import { registerElement, registerElementIcon } from './register-element';
import { registerProperties } from './register-properties';

export function globalRegister(app: App): void {
    registerElement(app);
    registerElementIcon(app);
    registerProperties(app);
}
