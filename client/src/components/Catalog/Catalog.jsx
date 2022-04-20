import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsFilterByBrand, productsInitAC } from '../../redux/actionCreators/productsAC';
import Product from '../Product/Product';
import Container from '@mui/material/Container';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

function Catalog(props) {
  const dispatch = useDispatch();
  const filterInput = useRef();

  const [view, setView] = useState('list');

  useEffect(() => {
    dispatch(productsInitAC())
  }, [dispatch]);

  const { products } = useSelector((state) => state.productsReducer);

  const handleChange = (event, nextView) => setView(nextView ?? 'list');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productsFilterByBrand(filterInput.current.value));
  };
  const handleClearButton = () => {
    filterInput.current.value = '';
    dispatch(productsFilterByBrand(filterInput.current.value));
  }

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* === Переключатель вида ==== */}
        <ToggleButtonGroup
          orientation="horizontal"
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

        {/* === Фильтр ==== */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
            display: 'flex',

          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >

          <Container
            sx={{ width: '24px', height: '24px', alignSelf: 'center' }}
            onClick={handleClearButton}
          >
            <CloseIcon />
          </Container>

          <TextField inputRef={filterInput} label="Фильтр по производителю" variant="outlined" size="small" />
        </Box>
      </Container>
      {/* === Отрисовка товаров ==== */}
      <Container sx={{ maxWidth: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
        {
          view === 'list'
          &&
          <Container sx={{ display: 'flex', flexDirection: 'row', border: '1px solid black', justifyContent: 'center', alignItems: 'center', padding: '2px', fontWeight: 'bold' }}>
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
