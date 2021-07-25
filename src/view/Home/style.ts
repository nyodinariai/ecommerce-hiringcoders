import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .product-header{
        font-size:64px;
        text-align:center;
        padding: 25px;
    }

    section {
        height: auto;
        max-width:100%;
        background-color:lightGray;
        display: flex;
        justify-content: center;
        gap: 15px;
        padding:15px;
    
        .product-content{
            gap: 5px;
            display: grid;
            text-align: center;
            max-width: 300px;
            background-color: #fff;
            border-radius:12px;
            padding:12px;

            h1{
                margin: 10px 0;
            }

            .product-image{
                max-height:500px;
                margin: 10px auto;

                img{
                max-width: 300px;
                max-height:auto;
                }
            }
            
            .product-description{
                p{
                    height:auto;
                    margin: 10px 0;
                }
                h4{
                    font-size: 1.6rem;
                }
            }

            
            button{
                height: 50px;
                background: green;
                outline:none;
                border: 1px solid green;
                color: #fff;
                font-size: 1.4rem;
            }
        }
    
    }
`;