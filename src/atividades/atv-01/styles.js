import { PixelRatio, StyleSheet } from "react-native";
import { RFValue} from "react-native-responsive-fontsize";


const styles = StyleSheet.create({


    container :{
        flex:1,
        backgroundColor: 'blue',
        padding:8,
      
        
      
    },

    titulo:{
    
     //fontSize:20,
     fontSize: RFValue(22),
     color:'#fafafa',
     marginTop: 8 ,
     fontWeight: 'bold',
     textAlign:'center'
    
    },

    texto:{
        color:'black',
        textAlign:'center',
        fontSize:18,

    }
    
    
});


export default styles;


