import React from 'react'
import {useCart} from "react-use-cart"

const Cart = () => {
  const { items, isEmpty, totalItems, totalUniqueItems,  updateItemQuantity, removeItem, cartTotal,emptyCart } = useCart()
  console.log(cartTotal);
  console.warn(items)
 if(isEmpty) return<h1 className='text-center'>your cart is empty</h1>
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            cart({totalUniqueItems})totalitems:({totalItems})
          </h5>

          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        alt={item.price}
                        style={{ height: "6rem" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{`$:${item.price}`}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-success ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button className="btn btn-primary ms-2" onClick={()=>removeItem(item.id)}>
                        RemoveItem
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto  m-2'>
          <h2>TotalPrice:{`$:${cartTotal}` }</h2>

        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>clearcart</button>

        </div>
      </div>
    </section>
  );
}

export default Cart