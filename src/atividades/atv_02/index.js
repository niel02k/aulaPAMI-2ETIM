import { View, Text, Image } from 'react-native'; 

import Mensagem from './mensagem';

import logo from '../../../assets/002-1-react-native.png'; 

import styles from './styles';

export default function Atividade2 () { 

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Exemplo 2
            </Text>
            <Image source={logo} style={styles.imagem} /> 

            <Mensagem nome={'Marcos'} idade ={56}/>
            <Mensagem nome={'Freitas'}  idade ={17}/>
            <Mensagem nome={'Niel'}  idade ={15}/>

        </View>
    );
}

