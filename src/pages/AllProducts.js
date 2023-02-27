import React from "react";
import { ProdsConsumer } from "../components/Context";
import Loading from "../components/Loading";
import StyleMainHero from "../components/styledComponents/styleMainHero";
import Banner from "../components/Banner";
import NavBtn from "../components/NavBtn";
import Products from "../components/Products";
import RoomsFilter from "../components/RoomsFilter";
import Title from "../components/Title";
import Data from "../components/HeroData";
const AllProducts = () => {
  let image = Data[Math.floor(Data.length * Math.random())];
  return (
    <>
      <ProdsConsumer>
        {(value) => {
          const { filteredProds, loading } = value;
          return (
            <>
              {loading ? (
                <Loading />
              ) : (
                <StyleMainHero img={image}>
                  <Banner desc="OUR ROOMS COLLECTION">
                    <NavBtn destination="/">Back Home</NavBtn>
                  </Banner>
                </StyleMainHero>
              )}
              <div className="container">
                {" "}
                <RoomsFilter />
              </div>
              <div>
                <Title title="All Rooms" />
                <div className="d-flex flex-flex-wrap  justify-content-center align-items-center">
                  {loading ? (
                    <Loading />
                  ) : (
                    <Products products={filteredProds} />
                  )}
                </div>
              </div>
            </>
          );
        }}
      </ProdsConsumer>
    </>
  );
};
export default AllProducts;
