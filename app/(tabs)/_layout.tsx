import { Link, Tabs } from "expo-router";
import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown:false,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown:false,
          tabBarShowLabel :false,
          tabBarLabelStyle:{
            color:'blue'
          },
          tabBarIcon: ({ focused,color}) => <TabBarIcon name="google-wallet" color={focused ? 'blue' :"black"} />,
          headerRight: () => (
            <Link href='/modal' asChild>
                  <HeaderButton  />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Tab One',
          headerShown:false,
          tabBarShowLabel :false,
          tabBarLabelStyle:{
            color:'blue'
          },
          tabBarIcon: ({ focused,color}) => <TabBarIcon name="user" color={focused ? 'blue' :"black"} />,
          headerRight: () => (
            <Link href='/modal' asChild>
                  <HeaderButton  />
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

