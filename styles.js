import {StyleSheet} from 'react-native'
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
     padding: 5,     
  },
  tituloPrincipal:{
      fontSize: 25,
      textAlign: 'center',
      color: `#0000CD`,
       
  },
  dia:{
    backgroundColor: 'white',
    color: '#000'
  },
  noite: {
    backgroundColor: 'black',
    color: 'white'
  },
  
  pequeno:{
    fontSize: 10,
  },
  grande: {
    fontSize: 20
  },
  subtitulo:{
      margin: 10,
      fontSize: 19,
      textAlign: 'center',
      color: `#191970`,
    
      
  },
  descricao:{
      textAlign: 'center',
      fontSize: 15,
      

  },
  box1:{
    height: 250,
    width: 300,
    margin: 5,
    borderWidth: 4,
  },
  
})
 
 
export {styles};