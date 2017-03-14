import { cyan500, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'

import getMuiTheme from 'material-ui/styles/getMuiTheme'

const colorPrimary = '#5B069E'
const colorSecondary = '#ff61a9'
const textColor = '#6B7E98'
const backgroundCard = '#FBFBFB'

const settings = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Helvetica, sans-serif',
  palette: {
    primary1Color: colorPrimary,
    primary2Color: colorSecondary,
    primary3Color: grey400,
    accent1Color: colorSecondary,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: textColor,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    backgroundCard: backgroundCard
  }
};

let muiTheme = getMuiTheme(settings)

muiTheme.raisedButton.textColor = colorSecondary
muiTheme.checkbox.checkedColor = colorSecondary
muiTheme.listItem.secondaryTextColor = textColor

export default muiTheme