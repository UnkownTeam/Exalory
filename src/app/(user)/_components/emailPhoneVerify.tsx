import OtpInput from "react-otp-input";
const EmailPhoneVerify = ({ setVerifyCode, verifyCode, user }: TypeProps) => {
  return (
    <>
      <p>Enter the code that sent to {user?.email}</p>
      <OtpInput
        value={verifyCode}
        onChange={setVerifyCode}
        numInputs={4}
        renderSeparator={() => <span className="w-3"></span>}
        renderInput={(props) => <input {...props} />}
        inputStyle="w-8 h-12 text-center text-3xl rounded-lg items-center justify-center text-theme-secondary focus:outline-none focus:border-none"
        containerStyle={"w-[450px] justify-center my-5"}
        skipDefaultStyles
      />
    </>
  );
};

type TypeProps = {
  setVerifyCode: React.Dispatch<React.SetStateAction<string>>;
  verifyCode: string;
  user: any;
};

export default EmailPhoneVerify;
