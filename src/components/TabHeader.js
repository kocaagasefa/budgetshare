import React from 'react';
import { signOut } from '../store/actions/session/actions';
import { connect } from 'react-redux';
import Button from './Button';

class TabHeader extends React.Component{
    render(){
        return <Button  onPress={this.props.signOut} label="SignOut"/>
    }
}
const mapDispatchToProps = dispatch=>({
    signOut:()=> dispatch(signOut())
});

export default connect(null,mapDispatchToProps)(TabHeader)