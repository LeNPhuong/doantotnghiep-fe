 useEffect(() => {
    if (tokenCheck) {
      dispatch(handleLoading(true));
      dataCheck()
        .unwrap()
        .then((data) => {
          const dataCheck = data.data.find((e) => e.status.id === 1);
          let total = 0;
          dataCheck?.order_details.forEach((dataEl) => {
            total += dataEl.quantity;
          });

          const cartArr: {
            id: number;
            name: string;
            price: number;
            sale: number;
            des: string;
            img: string;
            qtt: number;
            unit: string;
          }[] = [];

          dataCheck?.order_details.map((el) => {
            cartArr.push({
              id: el.product_id,
              name: el.product.name,
              price: Number(el.product.price),
              sale: el.product.sale,
              qtt: el.quantity,
              img: el.product.img,
              des: el.product.description,
              unit: el.unit,
            });
          });

          dispatch(setCart2(cartArr));
          setTotal(total);
          dispatch(handleLoading(false));
        })
        .catch(() => {
          setTotal(0);
          dispatch(setCart2([]));
          dispatch(handleLoading(false));
        });
    }
  }, []);