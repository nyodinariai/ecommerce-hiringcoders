import { useState, useEffect } from 'react';

import { Container} from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    description: string;
    name: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response =>{
                setData(response.data)
            });
    }, [])

    const handleChart = ( index: number ) =>{
        
        const productStorage = JSON.stringify(data[index])

        localStorage.setItem(`@Produto-${index}`, productStorage)
        
    }

    return(
        <>
        <Container>
            <h1 className="product-header">As melhores luvas de beisebol do País</h1>
        </Container>
        
        <Container>
            <section>
            { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                    <h1>{prod.name}</h1>
                    <div className="product-image">
                    <img src={prod.photo} alt={prod.name}/>
                    </div>
                    <div className="product-description">
                    <p>{prod.description}</p>
                    <h4>R${prod.price}</h4>
                    </div>
                    <button onClick={ () => handleChart(index) } >Adicionar ao Carrinho</button>
                </div>
            ))}
            
            </section>
        </Container>
        </>
    )
}

export default Home;