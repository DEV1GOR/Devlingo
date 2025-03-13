import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'gray',
        paddingHorizontal:37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'blue',
    },
    logo:{
        width:150,
        height:150,
    },
    text:{
        fontWeight:'bold',
        marginTop:30,
        fontSize:18,
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.iceWithe,
        marginTop:20,
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.iceWithe,
        borderColor:themas.colors.iceWithe,
    },
    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
    }

})