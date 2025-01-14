import { MMKV } from "react-native-mmkv";

const  ONBOARDINGSTORGAGEKEY = 'onboardingStorageKey'
const THEMESTORAGEKEY = 'themeStorageKey'
const TOKENSTORAGEKEY = 'TOKENUSER'
export const storage = new MMKV();

export {
    ONBOARDINGSTORGAGEKEY,
    THEMESTORAGEKEY,
    TOKENSTORAGEKEY
}