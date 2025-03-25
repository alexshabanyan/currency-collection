import { defineStore } from 'pinia';
export const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        menuCollapsed: false,
    }),
    getters: {
        menuCollapsedValue: (state) => state.menuCollapsed,
    },
    actions: {
        setMenuCollapsed(value) {
            this.menuCollapsed = value;
        }
    }
});
