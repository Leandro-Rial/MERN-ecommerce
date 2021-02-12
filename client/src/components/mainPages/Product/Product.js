import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItems from '../Utils/ProductItems/ProductItems';
import Loading from '../Utils/Loading/Loading';
import {Link} from 'react-router-dom';
import './product.css'

function Product() {

    const state = useContext(GlobalState);
    const [token] = state.token;
    const [products] = state.productAPI.products;
    const [callback, setCallback] = state.productAPI.callback;

    return (
        <div className="page_product">
            <div className="products">
                {
                    products.map(product => {
                        return <ProductItems key={product._id} product={product} token={token} callback={callback} setCallback={setCallback} />
                    })
                }
            </div>
            <div className="vertical_view">
                {
                    products.map(product => {
                        return (
                            <div className="products_vertical" key={product._id}>
                                <Link to={`/details/${product._id}`}>
                                    <h1 title={product.title}>{product.title}</h1>
                                </Link>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
            {products.length === 0 && <Loading />}
        </div>
    )
}

export default Product
