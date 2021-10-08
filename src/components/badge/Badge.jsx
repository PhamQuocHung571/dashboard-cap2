import React from 'react'
import styled from 'styled-components'
import './badge.css'

// eslint-disable-next-line no-undef
const Span = styled.span` 
    padding: 6px 11px;
    color: var(--txt-white);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
`;
  
const Badge = props => {
    return (
        <Span className={`badge badge-${props.type}`}>
            {props.content}
        </Span>
    )
}

export default Badge
