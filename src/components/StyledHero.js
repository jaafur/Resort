import styled from 'styled-components'



const StyledHero =styled.head`
min-height: 65vh;
background: url(${props=>props.images}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero
