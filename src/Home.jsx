import React from "react";
import Itemcard from "./Itemcard";
import data from "./Data"

const Home = () => {
  return (
    <div>
          <h1 className="text-center mt-3">All items</h1>
          <section className="py-4 container">
              <div className="row justify-content-center">

                  {data.productData.map((x,index) => {
                    return (<Itemcard title={x.title} img={x.img} item={x} key={index} desc={x.desc}price={`$:${x.price}`}
                      />)
                       
                  })}
                 
              </div>
          </section>
    </div>
  );
};

export default Home;
