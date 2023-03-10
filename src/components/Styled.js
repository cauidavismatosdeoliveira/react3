import styled from 'styled-components';

const Styled = styled.div`



#area-cabeçalho{
    background-color: #f7b600;
    text-align: center;
}
#area-logo, #area-menu{
    padding: 5px;
}
h1{
    color: #4e4e4e;
    font-size: 2.5em;
}
.branco{
    color: white;
}
a{
    text-decoration: none;
}
a:link, a:visited{
    color: #f7b600;
}
a:hover{
    text-decoration: underline;
}
#area-cabeçalho a:link, #area-cabeçalho a:visited{
    color: #fff;
    padding: 8px 12px;
}
#area-cabeçalho a:hover{
    color: #f7b600;
    background: #fff;
    text-decoration: none;
}
#area-principal{
    padding: 15px;
    width: 920px;
    margin: 0 auto;
}

#area-postagens{
    width: 660px;
    float: left;
}
#area-lateral{
    width: 240px;
    float: right;
}
#rodape{
    clear: both;
    text-align: center;
    padding: 15px;
    background: #ccc;
}
.postagens{
    padding: 20px;
    margin-bottom: 20px;
    background: white;
}
h2{
    color: #f7b600;
}
.data-postagem{
    font-size: 0.8em;
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: block;
}
.conteudo-lateral{
    background: white;
    padding: 10px;
    margin-bottom: 20px;
}
h3{
    color: #565656;
    background: #ccc;
    padding: 5px;
}
.postagem-lateral{
    font-size: 0.8em;
    padding: 5px;
    border-bottom: 1px dotted #ccc;
}
p{
    text-align: justify;
}
`;
export default Styled;