
import { Router } from 'express';

import MenuController from './../controllers/menu.controller';

const menusRouter = Router();

menusRouter.get('/', MenuController.fetchAllMenus);
menusRouter.post('/', MenuController.setupMenu);


export default menusRouter;