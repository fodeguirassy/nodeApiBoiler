module.exports = (app) => {

    return {

        RegisterWithFacebook: require('./facebookRegister')(app),
        RegisterWithGoogle: require('./googleRegister')(app),
        registerWithLocal: require ('./localRegister')(app)
    }

}
