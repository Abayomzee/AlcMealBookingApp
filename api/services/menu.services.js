import menuDummy from '../utils/menuDummyData';
import menu from '../models/menu.model';

const MenuServices = {
    fetchAllMenus(){
        const getMenus = menuDummy.menus.map((menus) => {
            const newMenu = new menu();

            newMenu.id = menus.menuId;
            newMenu.menuName = menus.name;
            newMenu.menuMeals = menus.meals;

            return newMenu;
        })
        return getMenus;
    },

    setMenu(menu){
        const menuLength = menuDummy.menus.length;
        const lastMenu = menuDummy.menus[menuLength - 1].menuId;

        menu.menuId = lastMenu + 1;

        menuDummy.menus.push(menu);

        return menu;
    }
} 

export default MenuServices;