import React, {useState} from 'react'
import styled from 'styled-components'
import './table.css'

const Wrapper = styled.div`
     overflow-y: auto;
`;
const Container = styled.div`
    width: 100%;
    min-width: 400px;
    border-spacing: 0;
`;
const Thead = styled.thead`
    background-color: var(--second-bg);
`;
const Tr = styled.tr`
    text-align: left;
`;
const Tbody = styled.tbody`
    tr{
        &:hover{
        background-color: var(--main-color);
        color: var(--txt-white);
        }
    }
`;
const Pagination = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
`;
const Item = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        color: var(--txt-white);
        background-color: var(--second-color);
    }  
`;


const Table = props => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData
    const [dataShow, setDataShow] = useState(initDataShow)
    let pages = 1
    let range = []
    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)
    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)
        setDataShow(props.bodyData.slice(start, end))
        setCurrPage(page)
    }

    return (
        <div>
           
            <Wrapper>
                <Container>
                    {
                        props.headData && props.renderHead ? (
                            <Thead>
                                <Tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </Tr>
                            </Thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <Tbody>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </Tbody>
                        ) : null
                    }
                </Container>
            </Wrapper>
            {
                pages > 1 ? (
                    <Pagination>
                        {
                            range.map((item, index) => (
                                <Item key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </Item>
                            ))
                        }
                    </Pagination>
                ) : null
            }
        </div>
    )
}

export default Table
