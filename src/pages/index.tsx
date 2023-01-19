import React from 'react';
import {NextPageWithLayout} from 'next';
import { getProductLists } from '~/hooks/api';
import {Main, Meta, PageLayout} from '~/layouts';
import {Button} from '~/ui/Button';
import { notify } from '~/utils/notify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from 'redux/actions/product';

const LandingPage: NextPageWithLayout = () => {
  const [products, setProducts] = React.useState([]);

  const getProduct = async () => {
    const { data } = await getProductLists();
    setProducts(data?.data);
  }

  const store = useSelector((state: any) => state.products);

  console.log("STORE", store);
  const dispatch = useDispatch();

  const addToCart = (id: string) => {
    if(id) {
      if(!!store) {
        const found = store.find((item: string) => item === id);
        if(found) {
          notify("Product already in the cart!", 'warning');
        } else {
          dispatch(addToCartAction(id));
        }
      } else {
        console.log("EXISt", existingItems);
        const item = [id];
        localStorage.setItem('cartProducts', JSON.stringify(item));
      }
    }
  }

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Clothing Store"
          description="Clothing store is a online clothing shopping platform"
        />
      }
    >
      <main>
        <section className="mx-auto mt-24 max-w-[1560px] px-5 mb-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {(products || []).map((item: any) => (
              <div key={item._id} className="h-full col-span-3">
                <div className="flex flex-col justify-between h-full border-t rounded-md shadow-lg border-gray">
                  <div className="mx-auto mb-2 shadow-sm h-[150px] w-full">
                    <img
                      src={item.images[0]}
                      className="object-contain w-full max-h-full mx-auto"
                      alt=""
                    />
                  </div>
                  <div className="block p-4">
                    <div className="block">
                      <div className="flex items-start justify-between">
                        <h2 className="text-xl">{item.productName}</h2>
                      </div>
                      <p className="mt-2 font-light text-normal">{item.description}</p>
                      <div className="flex items-center justify-start gap-4 mt-4">
                        {(item.availableSizes || []).map((item: any, index: any) => (
                          <button key={index} className="px-3 py-1 m-0 text-white bg-teal-700 rounded-lg font-boll">{item}</button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-5">
                      <Button
                        variant="primary"
                        className="flex-1 w-full h-10 max-w-full mx-auto cursor-pointer rounded-2xl sm:mx-0"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 1.9, type: 'spring'}}
                        onClick={() => addToCart(item._id)}
                      >
                        Add to Cart
                      </Button>

                      <div>
                          <button className="flex-1 px-4 py-1 m-0 font-medium text-white bg-green-500 rounded-lg"> <span className='text-lg font-bold'>৳</span> {parseInt(item.price) || 0}</button>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Main>
  );
};

LandingPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default LandingPage;
