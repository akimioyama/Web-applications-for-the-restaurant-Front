import React, { useEffect, useState } from "react";
import { MenuOrList } from "./MenuOrList";
import { OrderList } from "./OrderList";

const Sesion = ({ sesion, change, table }) => {

  const [newPost, setNewPost] = useState([])

  const qwe = () => {
    console.log(sesion);
    setDish(true)
  };


  const [dish, setDish] = useState(false)
  const asd = () => {
    setDish(false)
  }
  const [post, setPost] = useState([])

  useEffect(()=> {
    setPost(sesion.orders)
  }, [dish])


  useEffect(() => {
    setPost(sesion.orders)
  }, [sesion])

  const changeOrder = (newList) => {
    change(newList)
  }

  return (
    <div className="addMenu">
      <div>
        Текущие заказы:
        <OrderList post={post} sessionId={sesion.id} change={changeOrder} table={table}/>
      </div>
      <div>
        <button className="btn btn-mini" onClick={qwe}>Посмотеть меню</button>
        <button className="btn btn-mini" onClick={asd}>Скрыть меню</button>
        {dish == true ? <MenuOrList change={changeOrder} sessionId={sesion} table={table}/> : ""}
      </div>
    </div>
  );
};

export { Sesion };
