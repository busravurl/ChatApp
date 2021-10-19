import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';


import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};

const Sign = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.goBack();
    }
    
 
    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: 'danger',
            });
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.repassword,
            );
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: 'success',
            });
            navigation.navigate('LoginPage');
            setLoading(false);
        } catch (error) {

            setLoading(false);
        }
    }

    return(
         <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/email.png')} /> 
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit}) =>(
                    <>
                        <Input 
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder="e-postanızı giriniz.."
                        />
                        <Input 
                            onType={handleChange('password')}
                            value={values.password}
                            placeholder="şifrenizi giriniz.."
                            isSecure
                        />
                        <Input 
                            onType={handleChange('repassword')}
                            value={values.repassword}
                            placeholder="şifrenizi tekrar giriniz.."
                            isSecure
                        />
                        <Button text="Kayıt ol" loading={loading} onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
            
            <Button text="Geri" theme="secondary" onPress={handleLogin}/>
        </SafeAreaView>
    );
};


export default Sign;