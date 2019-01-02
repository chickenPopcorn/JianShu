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
        const { 
            focused, 
            list, 
            page,
            totalPage,
            mouseIn,
            handleMouseEnter, 
            handleMouseLeave,
            handleChangePage,
        } = this.props; 
        const newList = list.toJS();
        const pageList = [];

        if (newList.length){
            for (let i = (page * 10); i < Math.min((page + 1) * 10, newList.length); i ++ ){
                pageList.push(
                    <SearchInfoItem key={page*10+i}> {newList[i]}</SearchInfoItem>
                );
            }
        }
        if (focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门收索</SearchInfoTitle>
                    <SearchInfoSwitch
                        onClick={()=>{handleChangePage(page, totalPage, this.spinIcon)}}
                    >
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        { pageList }
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
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe623;</i>
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
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
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
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

            originAngle = originAngle ? parseInt(originAngle, 10): 0;
            console.log(originAngle);
            spin.style.transform = `rotate(${originAngle+360}deg)`;
            const nextPage = page < totalPage-1 ? page +1: 0;
            dispatch(actionCreators.changePage(nextPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
