import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsInitAC } from '../../redux/actionCreators/productsAC';
import Product from '../Product/Product';
import Container from '@mui/material/Container';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Catalog(props) {
  const dispatch = useDispatch();
  const [view, setView] = useState('list');

  useEffect(() => {
    dispatch(productsInitAC())
  }, [dispatch]);

  const { products } = useSelector((state) => state.productsReducer);

  const handleChange = (event, nextView) => setView(nextView ?? 'list');

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Container sx={{ maxWidth: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
        {
          view === 'list'
          &&
          <Container sx={{ display: 'flex', flexDirection: 'row', border: '1px solid black', justifyContent: 'center', alignItems: 'center', padding: '2px', fontWeight: 'bold'}}>
            <Container>Наименование</Container>
            <Container>Бренд</Container>
            <Container>Количество</Container>
            <Container>Стоимость</Container>
          </Container>
        }
        {
          products?.length
            ?
            products?.map((product) => <Product key={product.id} {...product} view={view} />)
            :
            "Товары отсутствуют"
        }
      </Container>
    </>
  );
}

export default Catalog;
