import React, { useState, useEffect } from 'react';
import { Keyboard, Animated, Alert } from 'react-native';

import logoImg from '../../assets/company.png';

interface Props {
    values: {
        inital: {
            x: number;
            y: number;
        },
        final: {
            x: number;
            y: number;
        },
    }
}
const AnimatedImage: React.FC<Props> = (props) =>{
      
     const { values } = props;
     
     const[logo] = useState(new Animated.ValueXY({x: values.inital.x , y: values.inital.y }));

     useEffect(()=> {
        Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        
        function keyboardDidShow(){
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: values.final.x,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(logo.y, {
                    toValue: values.final.y,
                    duration: 100,
                    useNativeDriver: true,
                })
            ]).start();
        }
        function keyboardDidHide(){
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: values.inital.x,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(logo.y, {
                    toValue: values.inital.x,
                    duration: 100,
                    useNativeDriver: true,
                })
            ]).start();
        }
     },[]);    
     return (
        <Animated.Image
            style={{
                transform: [
                    {scaleX: logo.x},
                    {scaleY: logo.y}
                ]
            }}
            source={logoImg}
         />
     )
      
}

export default AnimatedImage;