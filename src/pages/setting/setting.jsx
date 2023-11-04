import * as styles from './settingstyle'

export default function SettingPage(){
    return(
        <styles.SettingContainer>
            <styles.SettingWrapper>
                <styles.SettingInform>나무의 이름을 지어주세요.</styles.SettingInform>
                <styles.NameInputSection>
                    <styles.NameInput placeholder='나무 이름을 입력해주세요.'/>
                </styles.NameInputSection>
            </styles.SettingWrapper>
        </styles.SettingContainer>
    );
}