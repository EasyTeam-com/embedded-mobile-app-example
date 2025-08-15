import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import dayjs from 'dayjs';

import { name, version } from '../../package.json';

import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { ComponentCardButton } from '../../components/ComponentCardButton';
import { RootStackParamList, Routes } from '../../routes';
import { rawTheme } from '../../theme';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.HOME
>;

export const Home = () => {
  const navigation = useNavigation<NavigationProp>();

  const startDate = dayjs().utc().startOf('week');
  const endDate = dayjs().utc().endOf('week');

  return (
    <SafeAreaContainer>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Eeasyteam</Text>
        <View style={styles.content}>
          <View style={styles.row}>
            <ComponentCardButton
              name="Employees"
              description="View list of employees and their timesheets."
              onPress={() => navigation.navigate(Routes.EMPLOYEES)}
            />
            <ComponentCardButton
              name="Timesheet"
              description="Manage employee shifts and notes."
              onPress={() =>
                navigation.navigate(Routes.TIMESHEET, {
                  startDate: startDate.format('YYYY-MM-DD'),
                  endDate: endDate.format('YYYY-MM-DD'),
                })
              }
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.versionContainer}>
        <Text style={styles.version}>{`@${name} - v${version}`}</Text>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 16,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: rawTheme.tokens.colors.text.secondary,
    alignSelf: 'center',
  },
  versionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  version: {
    fontSize: 10,
    color: rawTheme.tokens.colors.text.secondary,
  },
});
