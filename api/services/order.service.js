import dummyData from '../utils/orderDummyData';
import Orders from './../models/order.model';

const OrderService = {
    postAnOrder(order){
        const orderLength = dummyData.Orders.length;
        const lastOrder = dummyData.Orders[orderLength - 1].id;

        order.id = lastOrder + 1;

        dummyData.Orders.push(order);
        return order;
    },

    modifyOrder(order, id){
        // get the order id and index
        const orderId = dummyData.Orders.find((anOrder) => anOrder.id == id);
        const getOrderIndex = dummyData.Orders.indexOf(orderId);

        orderId.id = id;

            if(order.userName == null){
                orderId.username = orderId.username;
            } else {
                orderId.username = order.userName;
            }

            if(order.address == null){
                orderId.address = orderId.address;
            } else {
                orderId.address = order.address;
            }

            if(order.items == null){
                orderId.items = orderId.items;
            } else {
                orderId.items = order.items;
            }

            dummyData.Orders.splice(getOrderIndex, 1, orderId);

        return orderId;
    },

    getAllOrders(){
        const allOrders = dummyData.Orders.map((orders) => {
            const newOrder = new Orders();

            newOrder.id = orders.id;
            newOrder.userName = orders.username;
            newOrder.address = orders.address;
            newOrder.items = orders.items;

            return newOrder;
        })
        return allOrders || {};
    }
}

export default OrderService;