import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function BasicModal({ modalView, setModalView, productInfo }) {
  const handleClose = () => setModalView(!modalView);
  const { id, title, vendor, pack, price, imgPath } = productInfo;
  const history = useHistory();

  const handleClick = () => history.push(`/catalog/${id}`)

  return (
    <div>
      <Modal
        open={modalView}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            src={imgPath}
            sx={{ width: "100px", height: "100px" }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Бренд: {vendor}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Количество: {pack}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Стоимость: {price} ₽
          </Typography>
          <Button onClick={handleClick}>Перейти к странице товара</Button>
        </Box>
      </Modal>
    </div>
  );
}
