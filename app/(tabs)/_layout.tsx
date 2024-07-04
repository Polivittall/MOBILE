import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'PREÇO PRODUTO',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
          <Tabs.Screen
              name="three"
              options={{
                title: 'Tab Three',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />

             <Tabs.Screen
                          name="four"
                          options={{
                            title: 'Tab Four',
                            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                          }}
                        />

                          <Tabs.Screen
                                                  name="five"
                                                  options={{
                                                    title: 'Tab Five',
                                                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                                                  }}
                                                />
    </Tabs>
  );
}
