export function shipment(order){
    if(order.basic < 100){
        return 20.0;
    }else 
        if(order.basic >= 100 && order.basic < 200.00){
            return 12.00;
        }else{
            return 0.0;
        }
}