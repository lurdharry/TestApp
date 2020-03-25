import React from 'react'
import {Text} from 'react-native'

export const TRYText =(props)=>{
    return(
        <Text {...props} style={[props.styles,{fontFamily:'TRYVesterbro'}]} >{props.children}</Text>
    )
}

export const TTText =(props)=>{
    return(
        <Text {...props} style={[props.styles,{fontFamily:'TTNorms'}]} >{props.children}</Text>
    )
}