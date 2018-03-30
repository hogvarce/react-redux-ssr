import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBanners } from '../stores/banners';

class Banners extends Component {
    static inititalData(store) {
        return store.dispatch(fetchBanners());
    }
    componentDidMount() {
        this.props.fetchBanners();
    }
    render() {
        const { banners } = this.props;
        return (
            <div>
                {banners && banners.map((banner, i) => <div key={i}>{banner.title}</div>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    banners: state.banners
});

const mapDispatchToProps = {
    fetchBanners,
};


export default connect(mapStateToProps, mapDispatchToProps)(Banners);
