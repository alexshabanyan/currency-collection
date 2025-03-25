import { defineStore } from 'pinia'

export interface LayoutStore {
  menuCollapsed: boolean,
}


export const useLayoutStore = defineStore('layoutStore', {
  state: (): LayoutStore => ({
    menuCollapsed: false,
  }),
  getters: {
    menuCollapsedValue: (state) => state.menuCollapsed,
  },
  actions: {
    setMenuCollapsed(value: boolean) {
      this.menuCollapsed = value;
    }
  }
})