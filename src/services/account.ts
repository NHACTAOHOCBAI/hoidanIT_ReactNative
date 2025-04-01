interface IRegister {
    fullName?: string,
    email?: string,
    password?: string
}
const registerAPI = (data: IRegister) => {
    const { fullName, email, password } = data
    if (!fullName) {
        throw "Full name can not be empty"
    }
    if (!email) {
        throw "Email can not be empty"
    }
    if (!password) {
        throw "Password can not be empty"
    }
}
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const verifyAPI = async (data: string) => {
    const correctOtp = '1234';
    await delay(2000);
    if (data !== correctOtp) {
        throw new Error('OTP is invalid')
    }
    return 'OTP is correct'
}
export { registerAPI, verifyAPI }