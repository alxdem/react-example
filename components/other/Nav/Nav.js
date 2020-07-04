import React, { Component } from 'react';
import { Link } from 'config/routes';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import actions from 'store/actions';
import { connect } from 'react-redux';

import Block from './Nav.style.js';

import { NavItem } from 'components';

const mapStateToProps = state => {
  return {
    isNavShow: state.isNavShow,
    navHeight: state.navHeight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      navShow: bindActionCreators(actions.setIsNavShow, dispatch),
      navHeightGet: bindActionCreators(actions.setNavHeight, dispatch)
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Nav extends Component {
  static propTypes = {
    list: PropTypes.array,
    servicesData: PropTypes.object
  };

  static defaultProps = {
    list: [],
    servicesData: {}
  };

  state = {
    activeItem: null
  };

  navShow = () => {
    const { actions } = this.props;
    actions.navShow(true);
  };

  subnavHeightGet = e => {
    const { actions } = this.props;
    const currentHeight = e.nativeEvent.target.nextElementSibling.offsetHeight + 30;
    actions.navHeightGet(currentHeight);
  };

  onNavClick = e => {
    e.stopPropagation();
    const id = e.nativeEvent.target.dataset.id;
    this.navShow();
    this.subnavHeightGet(e);
    this.setState({
      activeItem: id
    });
  };

  render() {
    const { list, servicesData, isNavShow } = this.props;
    const { ServicesCategoryDynamic: dinamicList } = servicesData || {};
    const { activeItem } = this.state;

    return (
      <Block>
        <Block.List>
          {list.map(item => {
            const submenuRaw = item.items;
            const submenu =
              submenuRaw &&
              submenuRaw.map(subItem => {
                return (
                  <Block.Children key={subItem.id}>
                    <Link route={subItem.link} passHref>
                      <Block.ChildrenLink>{subItem.text}</Block.ChildrenLink>
                    </Link>
                  </Block.Children>
                );
              });

            const submenuDinamic =
              item.dinamicData === 'servicesData' &&
              Array.isArray(dinamicList) &&
              dinamicList.map(item => {
                const childrenRaw = item.services;
                const singleElementLink = childrenRaw[0] && childrenRaw[0].slug;

                const children =
                  Array.isArray(childrenRaw) &&
                  childrenRaw.map(child => {
                    return (
                      <Block.Children key={child.id}>
                        <Link
                          route='service'
                          params={{ category: item.slug, slug: child.slug }}
                          passHref
                        >
                          <Block.ChildrenLink>{child.name}</Block.ChildrenLink>
                        </Link>
                      </Block.Children>
                    );
                  });

                const childrenSingle =
                  childrenRaw.length === 1 &&
                  Array.isArray(childrenRaw) &&
                  childrenRaw.map(child => {
                    return (
                      <Block.ChildrenList key={`children${child.id}`} childrenDinamic>
                        <Block.Children>
                          <Block.ChildrenLink as='span'>{child.name}</Block.ChildrenLink>
                        </Block.Children>
                      </Block.ChildrenList>
                    );
                  });

                return (
                  <Block.DinamicItem key={item.id}>
                    {children.length > 1 && (
                      <>
                        <Block.DinamicTitle>
                          <Link route='services' params={{ category: item.slug }} passHref>
                            <Block.DimanicLink>{item.name}</Block.DimanicLink>
                          </Link>
                        </Block.DinamicTitle>

                        {children && (
                          <Block.ChildrenList childrenDinamic>{children}</Block.ChildrenList>
                        )}
                      </>
                    )}

                    {children.length === 1 && (
                      <Block.DinamicTitle>
                        <Link
                          route='service'
                          params={{ category: item.slug, slug: singleElementLink }}
                          passHref
                        >
                          <Block.DimanicLink>
                            {item.name}
                            {childrenSingle && childrenSingle}
                          </Block.DimanicLink>
                        </Link>
                      </Block.DinamicTitle>
                    )}
                  </Block.DinamicItem>
                );
              });

            const navLink = item.link;
            const navText = item.text;
            const isActiveItem = activeItem === item.id && isNavShow;

            return (
              <Block.Item key={item.id}>
                {navLink && (
                  <Link
                    route={navLink}
                    passHref
                  >
                    <Block.Link title={navText}>{navText}</Block.Link>
                  </Link>
                )}

                {!navLink && (
                  <Block.Link onClick={this.onNavClick} data-id={item.id} isHasSubmeny={true}>
                    {navText}
                  </Block.Link>
                )}
                {(submenu || submenuDinamic) && (
                  <NavItem
                    submenu={submenu}
                    submenuDinamic={submenuDinamic}
                    isActive={isActiveItem}
                  />
                )}
              </Block.Item>
            );
          })}
        </Block.List>
      </Block>
    );
  }
}

export default Nav;
