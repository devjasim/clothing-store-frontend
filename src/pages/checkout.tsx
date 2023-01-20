import React from 'react';
import {NextPageWithLayout} from 'next';
import { getProductLists } from '~/hooks/api';
import {Main, Meta, PageLayout} from '~/layouts';
import {Button} from '~/ui/Button';
import { notify } from '~/utils/notify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from 'redux/actions/product';
import CheckoutForm from '~/ui/CheckoutForm';

const CheckoutPage: NextPageWithLayout = () => {
  return (
    <CheckoutForm/>
  );
};

CheckoutPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default CheckoutPage;
