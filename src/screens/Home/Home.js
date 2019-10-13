import React, { PureComponent } from 'react';
import { SafeAreaView, Button, TextInput, Text, Alert } from 'react-native';
import {connect} from 'react-redux';

class Home extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            text: "",
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render(){
        return(
            <SafeAreaView>
                <Text>Hola Mundo</Text>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        pass: state.user.pass,
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user,pass) => dispatch(log_in(user,pass)),
        onLogout: () => dispatch(log_out())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);