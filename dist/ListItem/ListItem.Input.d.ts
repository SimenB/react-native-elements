import React from 'react';
import { TextInput } from 'react-native';
import { Theme } from '../helpers';
import { InputProps } from '../Input';
export interface ListItemInputProps extends InputProps {
}
export declare const ListItemInput: React.ForwardRefExoticComponent<Pick<ListItemInputProps & {
    theme?: Theme;
}, "testID" | "containerStyle" | "disabled" | "onPressIn" | "onPressOut" | "children" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "value" | "theme" | "onBlur" | "onFocus" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "textAlign" | "textAlignVertical" | "label" | "placeholder" | "key" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "autoFocus" | "defaultValue" | "autoComplete" | "maxLength" | "autoCapitalize" | "autoCorrect" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "multiline" | "onChange" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "shake" | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "ErrorComponent" | "labelStyle" | "labelProps" | "renderErrorMessage"> & React.RefAttributes<TextInput>>;
