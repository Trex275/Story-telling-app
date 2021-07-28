import * as React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import BottomTabNavigator from "./Tabnavigator"
const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {BottomTabNavigator}>

            </Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;