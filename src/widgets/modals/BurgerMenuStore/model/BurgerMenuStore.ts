import {create} from 'zustand';

type BurgerMenuStoreType = {
  isActive:boolean,
  onClose: () => void,
  onOpen: () => void,
}

export const useBurgerMenuStore = create<BurgerMenuStoreType>()((set) => ({

  isActive:false,
  onOpen: () => {
    set({isActive:true});
  },
  onClose: () => {
    set({isActive:false});
  },

}))
