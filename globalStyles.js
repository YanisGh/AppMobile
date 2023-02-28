import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    logoContainer:{
      marginTop: 40,
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center', 
    },
    containerInfoCar: {
      backgroundColor: '#212121',
      color: 'white',
      width: 400,
      textAlign: "left",
    },
    containerMenu :{
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      height: 10,
    },
    menuHome :{
      alignItems: "center",
      height: 650,
      width: 500,
      backgroundColor: 'black',
    },
    TextMenu :{
      textAlign: "center",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
    },
    TextMenuImg:{
      textAlign: "right",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginRight: 25,
    },
    TextMenuCar:{
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginLeft: 10,
    },
    TextMenuCarBold:{
      fontWeight: "bold",
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 15,
      marginLeft: 10,
    },
    TextMenuImgR8 :{
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginLeft: 40,
    },
    TextMenuImgA1 :{
      textAlign: "center",
      marginTop: 10,
      marginBottom: 5,
      color: "black",
      fontSize: 12,
    },
    TextMenuImgAllModels :{
      textAlign: "center",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
    },
    logoImgMenu:{
      width: 400,
      height: 140,
      marginBottom: 10,
    },
    logoPlusMenu:{
      tintColor: 'white',
      width: 100,
      height: 100,
    },
    containerForm:{
      width: 300,
    },
    input:{
      backgroundColor:'white',
      color: 'black',
      height: 40,
      marginRight: 10,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    Text:{
      color: 'white',
      marginTop: 5,
    },
    Test:{
      color: 'white',
      textAlign: 'center',
      fontSize: 13,
    },
    TestUnderline:{
      color: 'white',
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    Button:{
      borderRadius: 6,
      alignContent: "center",
      backgroundColor: '#212121',
      marginTop: 40,
      marginBottom: 20,
      padding: 20,
      width: 150

    },
    logoImg:{
      width: 100,
      height: 35,
      resizeMode: 'center',
    }
});