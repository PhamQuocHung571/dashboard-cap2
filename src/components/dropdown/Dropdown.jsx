import React, {useRef} from 'react'
import styled from 'styled-components'
import './dropdown.css'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Container = styled.div`
    position: relative;
    z-index: 99;
`;
const Button = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    position: relative;
`;
const I = styled.i`
    font-size: 2.5rem;
    color: var(--txt-color);
`;
const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -12px;
    right: -10px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--main-color);
    color: var(--txt-white);
    font-size: 0.8rem;
`;
const Content = styled.div`
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: max-content;
    max-width: 400px;
    background-color: vaR(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    overflow: hidden;
    transform-origin: top right;
    transform: scale(0);
    transition: transform 0.3s ease 0s;
`;
const Footer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Dropdown = props => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    
    return (
        // <div className='dropdown'>
        //     <button ref={dropdown_toggle_el} className="dropdown__toggle">
        //         {
        //             props.icon ? <i className={props.icon}></i> : ''
        //         }
        //         {
        //             props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
        //         }
        //         {
        //             props.customToggle ? props.customToggle() : ''
        //         }
        //     </button>
        //     <div ref={dropdown_content_el} className="dropdown__content">
        //         {
        //             props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
        //         }
        //         {
        //             props.renderFooter ? (
        //                 <div className="dropdown__footer">
        //                     {props.renderFooter()}
        //                 </div>
        //             ) : ''
        //         }
        //     </div>
        // </div>
        <Container>
            <Button ref={dropdown_toggle_el} className="dropdown__toggle">
                 {
                    props.icon ? <I className={props.icon}></I> : ''
                 }
                 {
                    props.badge ? <Span >{props.badge}</Span> : ''
                 }
                 {
                    props.customToggle ? props.customToggle() : ''
                 }
             </Button>
             <Content ref={dropdown_content_el} className="dropdown__content">
                 {
                     props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                 }
                 {
                     props.renderFooter ? (
                         <Footer >
                            {props.renderFooter()}
                         </Footer>
                     ) : ''
                 }
             </Content>
        </Container>
    )
}

export default Dropdown
