import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const Screen2 = ({navigation}) => {
  const Showpage = page => {
    navigation.navigate(page);
  };

  const[hour,setHour]=useState(0)
  const[minute,setMinute]=useState(0)
  const[second,setSecond]=useState(0)
  const[interv,setInterv]=useState()

  const[timeron,setTimeron]=useState(0)
  const[stopped,setStopped]=useState(0)

 let currentsecond=second
 let currentminute=minute
 let currenthour=hour

  const updatetimer=()=>{
     if(currentsecond==60){
          currentsecond=0
          currentminute=currentminute+1
     }
     if(currentminute==60){
          currentminute=0
          currentsecond=0
          currenthour=currenthour+1
     }
     currentsecond=currentsecond+1

     setSecond(currentsecond)
     setMinute(currentminute)
     setHour(currenthour)
  }
  const starttimer=()=>{
     updatetimer()
     setStopped(0)
     //console.log('start timer');
     setInterv(setInterval(updatetimer,1000))
     setTimeron(1)
  }
  const stoptimer=()=>{
     setStopped(1)
     clearInterval(interv)
  }
  const resettimer=()=>{
     setTimeron(0)
     setHour(0)
     setMinute(0)
     setSecond(0)
     clearInterval(interv)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
     {hour >9 ? hour:'0'+hour}
        <Text style={styles.small}>HR</Text>
      </Text>
      <Text style={styles.number}>
      {minute >9 ? minute:'0'+minute}
        <Text style={styles.small}>MIN</Text>
      </Text>
      <Text style={styles.number}>
      {second >9 ? second:'0'+second}
        <Text style={styles.small}>SEC</Text>
      </Text>

      {timeron==0 ?
      <View style={styles.startstop}>
        <TouchableOpacity onPress={starttimer}>
          <Text style={styles.start}>Start</Text>
        </TouchableOpacity>
       { /*<TouchableOpacity onPress={stoptimer}>
          <Text style={styles.stop}>stop</Text>
        </TouchableOpacity>*/}
      </View>:
      <View style={styles.startstop}>
           <TouchableOpacity onPress={resettimer}>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
      
     {stopped==0?
     <TouchableOpacity onPress={stoptimer}>
        <Text style={styles.stop}>stop</Text>
      </TouchableOpacity>:
      <TouchableOpacity onPress={starttimer}>
      <Text style={styles.stop}>continue</Text>
    </TouchableOpacity>}
    </View>}

      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.btnactive}
          onPress={() => Showpage('S1')}>
          <Image
            source={require('../assests/logoclock.webp')}
            style={styles.navicon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnnonactive}
          onPress={() => Showpage('S2')}>
          <Image
            source={require('../assests/clock2.jpeg')}
            style={styles.navicon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },

  number: {
    color: '#fff',
    fontSize: 180,
    fontWeight: 'bold',
    lineHeight: 180,
    height: 180,
    textAlign: 'center',
  },
  small: {
    color: 'grey',
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    width: '100%',
    //backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navicon: {
    width: 40,
    height: 40,
  },
  btnactive: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnnonactive: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startstop: {
    flexDirection: 'row',
    marginVertical: 20,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
   marginBottom:10,
    marginRight: 1,
  },
  stop: {
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderTopRightRadius:20,
   borderBottomRightRadius:20,
    marginLeft: 1,
  },
  reset:{
     color: '#000',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 1,

  }
});
