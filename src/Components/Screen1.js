import {StyleSheet, Text,  TouchableOpacity, View,Image} from 'react-native';
import React,{useState,useEffect} from 'react';


const Screen1 = ({navigation}) => {
     const[hour,setHour]=useState('00')
     const[minute,setMinute]=useState('00')
     const[second,setSeconnd]=useState('00')
     const[ampm,setAmpm]=useState('AM')

     useEffect(()=>{
getHour()
getMinute()
//getSecond()
getAmpm()

     },[])

     const getHour=()=>{
          const date=new Date();
          const hour=date.getHours();
          //console.log(hour);
         hour <10 ? setHour('0'+ hour) :setHour(hour)
          //setHour(hour)
     }
     const getMinute=()=>{
          const date=new Date();
          const minute=date.getMinutes();
          minute <10 ? setMinute('0'+ minute) :setMinute(minute)
          //setMinute(minute)
     }
     /*const getSecond=()=>{
          const date=new Date();
          const second=date.getSeconds();
          second <10 ? setSeconnd('0'+ second) :setSeconnd(second)
         
     }*/
    const getAmpm=()=>{
      const date=new Date();
      const ampm=date.getHours() >=12 ? 'PM' :'AM'
      setAmpm(ampm)
     }
     setInterval(()=>{
getHour()
getMinute()
//getSecond()
getAmpm()
     },1000)

     const Showpage=(page)=>{
      navigation.navigate(page)
     }
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.minute}>{minute}</Text>
    { /* <Text style={styles.sec}>{second}</Text>*/}
      <Text style={styles.ampm}>{ampm}</Text>

      <View style={styles.nav}>
        <TouchableOpacity style={styles.btnactive} onPress={()=>Showpage('S1')}>
         { /*<Text style={styles.btn}>+</Text>*/}
         <Image source={require('../assests/logoclock.webp')} style={styles.navicon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnnonactive}  onPress={()=>Showpage('S2')}>
          {/*<Text style={styles.btn}>-</Text>*/}
          <Image source={require('../assests/clock2.jpeg')} style={styles.navicon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
   justifyContent:'center',

  },
  hour: {marginTop:20,
    color: '#fff',
    fontSize: 200,
    fontWeight: 'bold',
    lineHeight: 200,
    height: 220,
    textAlign:'center'
  },
  minute: {
    color: 'grey',
    fontSize: 200,
    fontWeight: 'bold',
    lineHeight: 200,
    height: 220,
    textAlign:'center'
  },
  sec: {
    color: '#fff',
    fontSize: 200,
    fontWeight: 'bold',
    lineHeight: 200,
    height: 220,
    textAlign:'center'
  },
  ampm: {
    color:'#fff',
    fontSize: 200,
    fontWeight: 'bold',
    lineHeight: 200,
    height: 220,
    textAlign:'center'
    
  },
  nav:{
    flexDirection:'row',
    width:'100%',
    //backgroundColor:'white',
    position:'absolute',
    bottom:0,
    alignItems:'center',
    justifyContent:'center'
  },
 navicon:{
  width:40,
  height:40
  },
  btnactive:{
    width:50,
    height:50,
    backgroundColor:'#fff',
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'

  },
  btnnonactive:{
    width:50,
    height:50,
    backgroundColor:'#fff',
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }

});
