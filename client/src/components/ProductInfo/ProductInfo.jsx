import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { productsInitAC } from '../../redux/actionCreators/productsAC';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';

function ProductInfo(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(productsInitAC())
  }, [dispatch])

  const productInfo = useSelector(state => {
    const { products } = state.productsReducer;
    const product = products?.filter((item) => item.id === productId);
    return product[0]
  });

  const handleClick = () => history.push('/catalog');

  return (
        <Box>
          <CardMedia
            component="img"
            src={productInfo?.imgPath}
            sx={{ width: "100px", height: "100px" }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {productInfo?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Бренд: {productInfo?.vendor}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Количество: {productInfo?.pack}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Стоимость: {productInfo?.price} ₽
          </Typography>
          <Button onClick={handleClick}>Вернуться к каталогу</Button>
        </Box>
  );
}

export default ProductInfo;
