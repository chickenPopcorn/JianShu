import React, { Component } from 'react';
import { HeaderWrapper, 
    Logo, Nav, NavItem, NavSearch, Addition, Button, 
    SearchWrapper, SearchInfo, SearchInfoTitle, 
    SearchInfoSwitch, SearchInfoItem, 
    SearchInfoList} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
class Header extends Component{
    getListArea() {
        const { focused, list } = this.props; 
        if (focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门收索</SearchInfoTitle>
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    <SearchInfoList>
                        { list.map((item) => {
                            return <SearchInfoItem key={item}> {item}</SearchInfoItem>
                          })
                        }
                    </SearchInfoList>
                </SearchInfo>  
            )
        } else {
            return null;
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                
                <Nav>
                <Logo href='/'></Logo>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused': ''}
                                onFocus={handleInputFocus} 
                                onBlur={handleInputBlur}    
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont': 'iconfont'}>&#xe623;</i>
                    {this.getListArea()}
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
