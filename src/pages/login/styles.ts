import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        //padding:20
    },
    boxTop:{
        height:Dimensions.get("window").height/3,
        width:'100%',
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',


    },
    boxMid:{
        height:Dimensions.get("window").height/4,
        width:'100%',
        backgroundColor:'#ffffff',
        paddingHorizontal:37
    },
    boxBotton:{
        height:Dimensions.get("window").height/4,
        width:'100%',
        backgroundColor:'#ffffff',
        alignItems:'center',
       

    },
    logo:{
        width:80,
        height:80,
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    tittleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20

    },
    BoxInput:{
       width:"100%",
       height:40,
       borderWidth:1,
       borderRadius:40,
       marginTop:10,
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:5,
       backgroundColor:themas.colors.lighGray,
       borderColor:themas.colors.lighGray
    },
    input:{
        height:"100%",
        width:"90%",
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor:"#0000",
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    
    },
    textButton:{
        fontSize:16,
        color:"#FFFF",
        fontWeight:"bold",

    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray,
    },



})