import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstBigDiv}>
         <View style={styles.firstBigDivComp1}>
            <View style={styles.firstBigDiv1Comp1Box1}></View>
            <View style={styles.firstBigDiv1Comp1Box2}></View>
            <View style={styles.firstBigDiv1Comp1Box3}></View>
          </View>
        <View style={styles.firstBigDivComp2}>
            <View style={styles.firstBigDivComp2Box1}></View>
            <View style={styles.firstBigDivComp2Box2}></View>
        </View>
        <View style={styles.firstBigDivComp3}>
            <View style={styles.firstBigDivComp3Box1}></View>
            <View style={styles.firstBigDivComp3Box2}></View>
        </View>
     </View>
     <View style={styles.secondBigDiv}></View>
    </View>
          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  firstBigDiv: {
    flex: 0.5,
    flexDirection : "row",
 
  },
  secondBigDiv: {
    flex: 0.5,
    backgroundColor : "lightgrey"
 
  },
  firstBigDivComp1: {
    flex: 6,
 
  },
  firstBigDiv1Comp1Box1: {
    flex: 6,
    backgroundColor : "purple"
    
 
  },
  firstBigDiv1Comp1Box2: {
    flex: 2,
    backgroundColor : "yellow"
    
 
  },
  firstBigDiv1Comp1Box3: {
    flex: 2,
    backgroundColor : "lightpink"
    
 
  },

  firstBigDivComp2: {
    flex: 2,
    flexDirection : "row",
 
  },
  firstBigDivComp2Box1: {
    flex: 1,
  backgroundColor : "red",
 
  },
  firstBigDivComp2Box2: {
    flex: 0.3,
  backgroundColor : "blue",
 
  },
  firstBigDivComp3: {
    flex: 2,
    
  },
  
  firstBigDivComp3Box1: {
    flex: 4,
    backgroundColor : "cyan"
    
  },

  firstBigDivComp3Box2: {
    flex: 2,
    backgroundColor : `#ff00ff`,
  },

  


});
