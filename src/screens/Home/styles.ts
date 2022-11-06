import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '@assets/logo.svg';

const S = {
    Container: styled.View`
        flex: 1;
        background-color: ${({ theme: { colors } }) => colors.background_primary};
    `,

    Header: styled.View`
        width: 100%;
        height: 113px;
        padding: 32px 24px;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        background-color: ${({ theme: { colors } }) => colors.header};
    `,

    LogoIcon: styled(Logo).attrs(() => ({
        height: RFValue(12),
        width: RFValue(108)
    }))``,

    HeaderText: styled.Text`
        ${({ theme: { colors, fonts } }) => css`
            font-family: ${fonts.family.primary_400};
            font-size: ${fonts.size.md};
            color: ${colors.text};
        `};
    `
};

export default S;