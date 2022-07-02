import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from '../screens/CartScreen';
import {View, Text, StyleSheet} from 'react-native';
import metrix from '../metrix';
import Colors from '../Colors';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const cartCount = useSelector(state => state.cart.cartCount);
  console.log(cartCount);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color="grey"
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="eraser" color="grey" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <View style={styles.cartTabContainer}>
              <MaterialCommunityIcons
                name="cart-outline"
                color="grey"
                size={35}
              />
              <View style={styles.bedgeContainer}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sett"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color="grey"
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setti"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color="grey"
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  cartTabContainer: {
    position: 'relative',
  },
  badgeText: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 9,
  },
  bedgeContainer: {
    backgroundColor: Colors.blue,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: metrix.HorizontalSize(10),
    padding: metrix.VerticalSize(1),
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    height: metrix.VerticalSize(20),
  },
});
export default MyTabs;
