import { useNavigation } from "@react-navigation/native";

export default handleGetStart = () => {
    const navigation = useNavigation();
    navigation.navigate("loginScreen");
}