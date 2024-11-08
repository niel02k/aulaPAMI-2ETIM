import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
    texto: {
        fontSize: 25, 
        fontWeight: 'bold',
        
    }, 
    idade:{
        fontSize: RFValue (20), 

    },

    container :{
           marginBottom:(5),
           borderBottomWidth:(2),
           width:'100%',
           alignItems:'center'

    }
});

export default styles;

