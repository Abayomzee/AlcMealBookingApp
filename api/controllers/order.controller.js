import OrderService from '../services/order.service';

const OrderController = {
    postOrder(req, res){
        const orderBody = req.body;
        const orderCreated = OrderService.postAnOrder(orderBody);

        return res.json({
            status: 'Success',
            data: orderCreated
        }).status(200);
    },

    modifyOrders(req, res){
        const orderBody = req.body;
        const orderId = req.params.id;
        const editOrder = OrderService.modifyOrder(orderBody, orderId);

        return res.json({
            status: 'Success',
            data: editOrder
        }).status(200);
    },

    fetchAllOrders(req, res){
        const allOrders = OrderService.getAllOrders();
        return res.json({
            status: 'Success',
            data: allOrders
        }).status(200);
    }
}

export default OrderController;