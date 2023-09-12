import * as orderService from './ShippingService.js';

export function total(order){

    const totalDiscount = order.basic - ((order.discount / 100) * order.basic);

    return totalDiscount + orderService.shipment(order);
}