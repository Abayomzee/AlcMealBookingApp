import MenuServices from '../services/menu.services';

const MenuController = {
    fetchAllMenus(req, res){
        const allMenus = MenuServices.fetchAllMenus();
        return res.json({
            status: 'Success',
            data: allMenus
        }).status(200);
    },

    setupMenu(req, res){
        const getMenu = req.body;
        const createdMenu = MenuServices.setMenu(getMenu);

        return res.json({
            status: 'Success',
            data: createdMenu
        }).status(200);
    }
}

export default MenuController;
