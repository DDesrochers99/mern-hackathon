import './OrderList.css';
import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders, currentOrder, setCurrentOrder }) {
  const orderList = orders.map((order) => (
    <OrderListItem
      order={order}
      currentOrder={currentOrder}
      setCurrentOrder={setCurrentOrder}
      key={order.id}
    />
  ));

  return (
    <main className={`OrderList ${orders.length ? "" : "no-orders"}`}>
      {orderList}
    </main>
  );
}
