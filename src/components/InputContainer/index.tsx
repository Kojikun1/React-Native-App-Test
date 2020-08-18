import React,{ useState, useEffect} from 'react';
import { StyleSheet, Animated } from 'react-native';


const InputContainer: React.FC = (props) => {
    const [offset,setOffset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity,setOpacity] = useState(new Animated.Value(0));

    useEffect(()=> {
           Animated.parallel([
                Animated.spring(offset.y,{
                    toValue: 0,
                    speed: 4,
                    bounciness: 20,
                    useNativeDriver: true
                }),
                Animated.timing(opacity,{
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                })
           ]).start();    
    },[]);

    return (
        <Animated.View style={
            [styles.container,{
                opacity: opacity,
                transform: [
                    {translateY: offset.y}
                ]
        }]}>
            {props.children}
        </Animated.View>
    )
};

export default InputContainer

const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          paddingBottom: 50
       }
})