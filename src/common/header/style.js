import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    height: 56px;
    position: absolute;
    top: 1;
    left: 0;
    display: block;
    width:100px;  
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height:100%;  
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    &.left {
        float: left;  
        color: #333;  
    }
    &.right {
        float: right;
        color: #969696;
    }
    line-height: 56px;
    padding: 0px 15px;
    font-size: 17px;
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 15px;
    &::placeholder {
        color: #999;
    };
    &.focused {
        width: 240px;
    }
    color: #666;
`

export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
        color: #969696;
    }
    .slide-enter {
        transition: all .4s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        transition: all .4s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }

`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height:56px;  
`;

export const Button = styled.div`
    float: right
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size 14px;
    line-height: 20px;
    color: #787878;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size 13px;
`;

export const SearchInfoItem = styled.a`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;





