import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Modal from '../Modal/Modal';


function Product({ id, title, vendor, pack, price, imgPath, view }) {
  const [modalView, setModalView] = useState(false);

  const handleClick = () => {
    setModalView(!modalView);
  }

  return (
    <>
      {
        view === 'list'

          ?

          <Container
            sx={{ display: 'flex', border: '1px solid black', justifyContent: 'center', alignItems: 'center' }}
            onClick={handleClick}
          >

            <Container sx={{ padding: '2px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <CardMedia
                component="img"
                src={imgPath}
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              {title}</Container>
            <Container sx={{ padding: '2px' }}>{vendor}</Container>
            <Container sx={{ padding: '2px' }}>{pack}</Container>
            <Container sx={{ padding: '2px' }}>{price} ₽</Container>
          </Container>

          :

          <Card
            sx={{ width: 250, margin: '1rem' }}
            onClick={handleClick}
          >
            <CardActionArea>
              <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  src={imgPath}
                  sx={{ width: "140px", height: "140px" }}
                />
              </Container>
              <CardContent>
                <Typography gutterBottom >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {price}₽
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      }

      <Modal
        modalView={modalView}
        setModalView={setModalView}
        productInfo={{ id, title, vendor, pack, price, imgPath }}
      />

    </>
  );
}

export default Product;
