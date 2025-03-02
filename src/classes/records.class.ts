import { CONSTS } from "../consts";
import { IDesktopApp } from "../interfaces/desktop-app.interface";

export class Records {
    private apps: Record<number, HTMLDivElement>;
    private count: number;

    constructor() {
        this.apps = {};
        this.count = 0;
    }

    /**
     * Adds the html element passed by the parameter to the list of opened apps
     * @param element the html element to add
     */
    add(app: IDesktopApp): HTMLDivElement {
        if (this.apps[this.count]) throw Error(`There is an app inside the object with the key '${this.count}'.`);

        const $parent = document.createElement('div');
        $parent.id = `app_${this.count.toString()}`;
        $parent.classList.add('app');
        $parent.setAttribute('state', 'max');
        $parent.innerHTML = `
            <div class="header">
                <img src="${app.icon}" />
                <span>${app.name}</span>
                <div class="controls">
                <button class="minimize">
                    <span>-</span>
                </button>
                <button class="maximize"">
                    <span>+</span>
                </button>
                <button class="close">
                    <span>&times;</span>
                </button>
                </div>
            </div>
            
            <div class="content">
                Content
            </div>
            `;

        ($parent.querySelector('button.minimize') as HTMLButtonElement)?.addEventListener('click', () => {
            console.log('minimize app')
        });

        ($parent.querySelector('button.maximize') as HTMLButtonElement)?.addEventListener('click', () => {
            console.log('maximize app')
        });

        ($parent.querySelector('button.close') as HTMLButtonElement)?.addEventListener('click', () => {
            const id = parseInt($parent.id.split('_')[1]);

            if (!this.apps[id]) throw new Error(`There is not an app with an id '${id}' in the list.`);

            const $footer = document.querySelector(`${CONSTS.html.footer}`);

            if (!$footer) return;

            const $footApp = $footer.querySelector('div#taskbar')?.querySelector(`div#app_${id}`);

            if (!$footApp) return;

            this.apps[id].remove();
            $footApp.remove();

            delete this.apps[id];
        });

        this.apps[this.count] = $parent;

        this.count++;

        return $parent;
    }

    get(): void { }
}