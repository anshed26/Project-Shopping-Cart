import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'

function Home() {
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.products)
    const [currentPage, setCurrentPage] = useState(1)
    const cardPerPage = 6

    let endingIndex = currentPage * cardPerPage
    let startingIndex = endingIndex - cardPerPage

    let currentProducts = products.slice(startingIndex, endingIndex)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            <Header insideHome />
            {
                loading ?
                    <div className='text-center my-5'>
                        <Spinner animation="border" variant="success" />

                    </div>
                    :
                    <>
                        <div className='row m-5'>

                            {
                                currentProducts.length > 0 ?
                                    currentProducts.map(pro => (

                                        <div className='col-lg-4'>

                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={pro?.thumbnail} />
                                                <Card.Body>
                                                    <Card.Title className='text-center'>{pro?.title.slice(0, 15)}...</Card.Title>
                                                    <Card.Text>

                                                    </Card.Text>
                                                    <Link className='btn btn-success w-100 mt-3' to={`/product/${pro?.id}/view`} variant="primary">View More</Link>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))
                                    :
                                    <p className='text-danger fw-bold text-center'>No Products Found</p>
                            }
                        </div>
                        <div className='text-center my-5'>
                            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={products?.length}  cardPerPage={cardPerPage}/>
                        </div>

                    </>
            }
        </>
    )
}

export default Home