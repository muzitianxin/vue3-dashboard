import { ref } from "vue";
import { useStorage } from '@vueuse/core';

// 是否折叠应用菜单
const foldMenu = useStorage("__foldAppMenu__", false);

export function useMenu() {
  /**
   * 切换应用菜单折叠状态
   */
  const toggleMenu = () => {
    foldMenu.value = !foldMenu.value;
  };

  return {
    foldMenu,
    toggleMenu,
  };
}
