import { Ionicons } from "@expo/vector-icons";

export default {
	regular: 'Nunito-Regular',
	semiBold: 'Nunito-SemiBold',
	bold: 'Nunito-Bold',
};

export const CustomFonts: any = {
    ...Ionicons.font,
	'Nunito-Regular':<any> require('../../assets/fonts/Nunito-Regular.ttf'),
	'Nunito-SemiBold':<any> require('../../assets/fonts/Nunito-SemiBold.ttf'),
	'Nunito-Bold':<any> require('../../assets/fonts/Nunito-Bold.ttf'),
};