import React , {useState , useEffect , useContext}from 'react'
import { ApiClient } from "../api/services";
import '../../styles/navbar.css';
import { ShoppingContext } from "../../../context/ShoppingContext";
import toast, { Toaster } from 'react-hot-toast';
import Detalles from '../home/productos/Detalles';

const SearchProducts=() => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const {cartItems, setCartItems, favoriteItems, setFavoriteItems } = useContext(ShoppingContext)


  const apiClient = new ApiClient();

  useEffect(() => {
    const getSearchResults = async () => {
      if (searchTerm && searchTerm.length >= 3) {
        try {
          const response = await apiClient.getProductName(searchTerm);
          setSearchResults(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setSearchResults([]);
      }
    };

    getSearchResults();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
  };

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item._id === product._id);
    if (!isProductInCart) {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
      toast.success('Agregado al carrito');
    } else{
      toast.error('Ya se encuentra agregado');
    }
  };

  useEffect(() => {
  }, [cartItems]);


  const addToFavorite = (product) => {
    const isProductInFavorites = favoriteItems.some((item) => item._id === product._id);
    if (!isProductInFavorites) {
      setFavoriteItems((prevFavoriteItems) => [...prevFavoriteItems, product]);
      toast.success('Agregado a Favoritos');
    } else{
      toast.error('Ya se encuentra agregado');
    }
  };


  useEffect(() => {
    
  }, [favoriteItems]);

  return (
    <nav className='position-relative'>
      <input type="search" className="form-control mx-3" onChange={handleInputChange} placeholder="¿Qué producto estás buscando?" id='searchProduct'/>
      {searchResults.length > 0 && (
        <ul className='searchProdName list-group' id='searchProdName'>
          {searchResults.map((result) => (
            <a 
              key={result._id} 
              className="list-group-item list-group-item-action">{result.nombre} ${result.precio} <Detalles product={result} addToCart={addToCart} addToFavorite={addToFavorite}/> </a>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SearchProducts;