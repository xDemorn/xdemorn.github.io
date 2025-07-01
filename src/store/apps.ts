import { create } from 'zustand'

export interface IApp {
  uuid: number;
  title: string;
  src: string;
}

type Apps = {
  // variables
  windows: Array<any>;
  // functions
  open: (app: IApp) => void;
  remove: (uuid: string) => void;
}

export const useStore = create<Apps>()((set) => ({
  windows: [],
  open: (app: IApp) => set(state => ({ windows: [...state.windows, app] })),
  remove: (uuid: string) => set(state => {
    const filtered = state.windows.filter(app => app.uuid !== uuid);

    return [...filtered]
  })
}))