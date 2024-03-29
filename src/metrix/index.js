import { Dimensions, PixelRatio } from 'react-native';

let { height, width } = Dimensions.get('window');
const scale = height / 812;

const normalize = (size) => {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const VerticalSize = (size = 812) => (size / 812) * height;
const HorizontalSize = (size = 375) => (size / 375) * width;
const createShadow = (
    number = 5,
    opacity = 0.2,
    offset = { height: 5 },
    color = Colors.Shadow,
    backgroundColor = 'white',
) => {
    return {
        elevation: number,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowColor: color,
        backgroundColor,
    };
};
export default {
    Radius: VerticalSize(10),
    LightRadius: VerticalSize(6),
    ActiveOpacity: 0.5,
    customFontSize: normalize,
    FontRegular: normalize(16),
    FontExtraSmall: normalize(12),
    FontSmallest: normalize(10),
    FontSmall: normalize(14),
    FontMedium: normalize(18),
    FontLarge: normalize(22),
    VerticalSize,
    HorizontalSize,
    createShadow,
    height: height,
    width: width
};