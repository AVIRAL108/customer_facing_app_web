import React, { useState, Fragment } from "react";
import { dummyBoutiques } from "../constants/mocks";
import Card from "../shared/components/card";
import CardWrapper from "../shared/components/cardWrapper";
import Container from "../shared/components/container";
import Header from "../shared/components/header";
import Wrapper from "../shared/components/wrapper";

const ListingPage = () => {
  const [data, setData] = useState(dummyBoutiques);
  return (
    <Wrapper>
      <Header companyName="Book My Boutique" />
      <Container>
        {/* <CardWrapper>
          {data.map((d) => {
            const { id, name } = d;
            return (
              <Fragment key={id}>
                <Card title={name} />
              </Fragment>
            );
          })}
        </CardWrapper> */}
      </Container>
    </Wrapper>
  );
};

export default ListingPage;
