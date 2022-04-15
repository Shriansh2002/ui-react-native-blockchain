import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
	return (
		<View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Image
					source={assets.logo}
					resizeMode="contain"
					style={{ width: 90, height: 25 }}
				/>
			</View>
		</View>
	);
};

export default HomeHeader;
