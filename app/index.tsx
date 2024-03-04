import { Stack, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images, icons, SIZES, } from '../constants'
import { ScreenHeaderBtn, Nearbyjobs, Popularjobs, Welcome } from "../components"
 

// To conduct unit testing with react native expo, run the following commands
// npx expo install jest-expo jest
//npm install --save-dev @testing-library/react-native
 
const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress = {()=>{}} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} handlePress={()=>{}} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style= {{flex:1, padding:SIZES.medium}}
                >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;                                