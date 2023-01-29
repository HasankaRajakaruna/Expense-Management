import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../constants'

const Home = () => {


    function renderNavBar() {
        return (
            <View style={styles.nav_main}>
                <TouchableOpacity
                    style={styles.touch1}
                    onPress={() => console.log('Back')}
                >
                    <Image
                        source={icons.cart}
                        style={styles.navBar}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touc2h}
                    onPress={() => console.log('more')}
                >
                    <Image
                        source={icons.cart}
                        style={styles.navBar}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={styles.hear_main}>
                <View>
                    <Text style={styles.header_text1}>My Expense</Text>
                    <Text style={styles.header_text2}>Summary (private)</Text>
                </View>
                <View style={styles.header_sub1}>
                    <Image
                        style={styles.header_image1}
                        source={icons.cart}
                    />
                </View>
                <View style={{marginLeft: SIZES.padding}}>
                    <Text style={styles.header_text3}>My Expense</Text>
                    <Text style={styles.header_text4}>Summary (private)</Text>
                </View>
            </View>
        )
    }

    function renderCategoryHeaderSection(){
        return (
            <View style={styles.category_main}>
                {/* Title */}
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title_text1}>CATEGORIES</Text>
                    <Text style={styles.title_text2}>Total</Text>
                </View>
                {/* Buttons */}
                <View>
                    <TouchableOpacity>
                        <Image 
                            resizeMethod='contain'
                            source={icons.cart}
                            style={styles.category_image1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            resizeMethod='contain'
                            source={icons.cart}
                            style={styles.category_image1}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.main}>
            {renderNavBar()}

            {renderHeader()}

            {renderCategoryHeaderSection()}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    navBar: {
        width: 30,
        height: 30,
        tintColor: COLORS.primary
    },
    nav_main: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white
    },
    touch1: {
        justifyContent: 'center',
        width: 50
    },
    touch2: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 50
    },
    header_main: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
    },
    header_sub1: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.lightGray,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_text1: {
        color: COLORS.primary,
        ...FONTS.h2
    },
    header_text2: {
        color: COLORS.darkgray,
        ...FONTS.h3
    },
    header_image1: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightBlue
    },
    header_text3:{
        color: COLORS.primary,
        ...FONTS.h3
    },
    header_text4:{
        color: COLORS.darkgray,
        ...FONTS.body3
    },
    category_main:{
        flexDirection: 'row',
        padding: SIZES.padding,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    category_image1:{
        width: 20,
        height: 20
    },
    title_text1:{
        color: COLORS.primary,
        ...FONTS.h3
    },
    title_text2:{
        color: COLORS.darkgray,
        ...FONTS.body4
    }
})

export default Home