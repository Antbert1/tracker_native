import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { setCurrentAnswerState } from '../redux/indexActions';
const emptyCircle = require('../images/circle-regular.png');
const fullCircle = require('../images/circle-solid.png');

const Question = (props) => {
    const dispatch = useDispatch();
    const currentAnswerState = useSelector(state => state).dataReducer.currentAnswerState;
    // const save = answers => dispatch(saveAnswers(answers));

    const update = (index) => {
        console.log(currentAnswerState);
        console.log(props.index);
        let newAnswerState = [...currentAnswerState];
        newAnswerState[props.index].value = (index + 1);
        let newSelectors = [...selectors];
        newSelectors.map(function (item) {
            item.active = false;
            return item;
        });
        newSelectors[index].active = !selectors[index].active;
        updateSelectors(newSelectors);
        dispatch(setCurrentAnswerState(newAnswerState));
        // save(newSelectors);
    };

    const [selectors, updateSelectors] = useState([
        { name: 1, active: currentAnswerState[props.index].value === 1 },
        { name: 2, active: currentAnswerState[props.index].value === 2 },
        { name: 3, active: currentAnswerState[props.index].value === 3 },
        { name: 4, active: currentAnswerState[props.index].value === 4 },
        { name: 5, active: currentAnswerState[props.index].value === 5 },
    ]);

    const List = () => {
        return selectors.map((item, index) => {
            return (
                <View style={styles.individual} key={item.name}>
                    <Text>{item.name}{item.active}</Text>
                    <TouchableOpacity onPress={() => update(index)} >
                        {item.active ?
                            <Image source={fullCircle} style={styles.circle} />
                            :
                            <Image source={emptyCircle} style={styles.circle} />
                        }
                    </TouchableOpacity>
                </View>
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>{props.name} </Text>
            <Text style={styles.subtext}>
                {props.subtext}
            </Text>
            <View style={styles.selectContainer}>
                <List />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: 10,
        // marginRight: 10
    },
    outerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
    },
    selectContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    individual: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 40,
    },
    nameStyle: {
        // paddingLeft: 10,
        fontSize: 16,
    },
    subtext: {
        // paddingLeft: 10,
    },
});

export default Question;
