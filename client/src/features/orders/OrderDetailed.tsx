import { Box, Button, Grid, Typography } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { Order } from "../../app/models/order";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
    order: Order;
    setSelectedOrderNumber: (id: number) => void;
}

export default function OrderDetailed({order, setSelectedOrderNumber}: Props) {
    const subTotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    return(
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{p:2}} gutterBottom variant='h4'>
                    Order# {order.id} - {order.orderStatus}
                </Typography>
                <Button onClick={() => setSelectedOrderNumber(0)} sx={{m: 2}} size='large' variant='contained'>
                    Back to orders
                </Button>
            </Box>
            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false}/>
            <Grid container>
                <Grid item xs={6}/>
                <Grid item xs={6}>
                    <BasketSummary subtotal={subTotal} />
                </Grid>
            </Grid>
        </>
    )
}