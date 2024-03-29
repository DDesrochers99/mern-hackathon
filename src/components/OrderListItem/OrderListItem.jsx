import './OrderListItem.css';

export default function OrderListItem({ order, currentOrder, setCurrentOrder }) {
  return (
    <div
      className={`OrderListItem ${order === currentOrder ? "selected" : ""}`}
      onClick={() => setCurrentOrder(order)}
    >
      <div>
        <div>
          Order Id: <span className="">{order.orderId}</span>
        </div>
        <div className="">
          {new Date(order.updatedAt).toLocaleDateString()}
        </div>
      </div>
      <div className="">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="">
          {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}
